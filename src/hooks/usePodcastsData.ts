import axios from "axios"
import PodcastListData from "../types/PodcastListData"
import LookupResults from "../types/LookupResults"
import { useQuery } from "@tanstack/react-query"
import { XMLParser }  from "fast-xml-parser";
import RSSData from "../types/RSSData";
import { useOutletContext } from "react-router-dom";

const podcastLimit = 100

const parser = new XMLParser({alwaysCreateTextNode:true, ignoreAttributes:false, ignoreDeclaration:false, ignorePiTags: false});

const one_day_in_ms = 86400000 
const allowCorsURL ='https://corsproxy.io/?'

const cacheProperties = {

    cacheTime: one_day_in_ms,
    staleTime: one_day_in_ms 
}

export const usePodcastsData = () => useQuery<PodcastListData,Error>({
    queryKey: ['allPodcasts'],
    queryFn: (): Promise<PodcastListData> =>
      axios
        .get(`https://itunes.apple.com/us/rss/toppodcasts/limit=${podcastLimit}/genre=1310/json`)
        .then((res) => res.data),
      ...cacheProperties
  })


export const usePodcastData = (id: string) => useQuery<LookupResults,Error>({
    queryKey: ['podcasts', id],
    queryFn: (): Promise<LookupResults> =>
      axios
        // .get(`https://itunes.apple.com/lookup?id=${id}`, { timeout: 10000 })
        .get(`${allowCorsURL}${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`, { timeout: 300000 })
        // .then((res) => JSON.parse(res.data.contents)),
        .then((res) => res.data),

      ...cacheProperties
  })

export const usePodcastRSSData = (rssUrl: string, id:string, enabled: boolean) => 
   useQuery<RSSData,Error>({
    queryKey: ['rssPodcast',id], 
    queryFn: (): Promise<any> =>
      axios
        // .get(`${rssUrl}`, { timeout: 300000 })
        .get(`${allowCorsURL}${encodeURIComponent(rssUrl)}`, { timeout: 300000 })
        .then((res) => {
          const cont = res.data
          let jObj = parser.parse(cont, );
            
          res.data = jObj
          return res
      })
        .then((res) => res.data)
       .catch(error => console.log(error.message)),
    enabled,
    ...cacheProperties
  })

export function useRssData() {
  return useOutletContext<{data: LookupResults, rssData: RSSData}>();
}

  



