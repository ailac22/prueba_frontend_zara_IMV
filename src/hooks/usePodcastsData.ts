import axios from "axios"
import PodcastListData from "../types/PodcastListData"
import LookupResults from "../types/LookupResults"
import { useQuery } from "@tanstack/react-query"
import { XMLBuilder, XMLParser }  from "fast-xml-parser";
import RSSData from "../types/RSSData";

const podcastLimit = 100

const parser = new XMLParser();
const builder = new XMLBuilder();
// useQuery<PodcastListData,Error>({
//     queryKey: ['allPodcasts'],
//     queryFn: usePodcastsData,
//   })
//

const allowCorsURL ='https://api.allorigins.win/get?url='

// const allowCorsURL =''

export const usePodcastsData = () => useQuery<PodcastListData,Error>({
    queryKey: ['allPodcasts'],
    queryFn: (): Promise<PodcastListData> =>
      axios
        .get(`https://itunes.apple.com/us/rss/toppodcasts/limit=${podcastLimit}/genre=1310/json`)
        .then((res) => res.data),
  })


export const usePodcastData = (id: string) => useQuery<LookupResults,Error>({
    queryKey: ['podcasts', id],
    queryFn: (): Promise<LookupResults> =>
      axios
        .get(`https://itunes.apple.com/lookup?id=${id}`, { timeout: 10000 })
        // .get(`${allowCorsURL}${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`, { timeout: 300000 })
        // .then((res) => JSON.parse(res.data.contents)),
        .then ((res) => {
      console.log(res)
      return res
    })
        .then((res) => res.data),
  })

export const usePodcastRSSData = (rssUrl: string, id:string, enabled: boolean) => 
   useQuery<RSSData,Error>({
    queryKey: ['rssPodcast',id], 
    queryFn: (): Promise<any> =>
      axios
        .get(`${rssUrl}`, { timeout: 300000 })
        // .get(`${allowCorsURL}${encodeURIComponent(rssUrl)}`, { timeout: 300000 })
        .then((res) => {
          console.log("res.data", res)
          const cont = res.data
          let jObj = parser.parse(cont);
          res.data = jObj
          return res
      })
        .then((res) => res.data)
       .catch(error => console.log(error.message)),
    enabled,
    cacheTime: 300000,
    staleTime: 300000
  })



  



