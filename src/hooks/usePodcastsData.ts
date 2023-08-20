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
        .get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`)
        .then((res) => JSON.parse(res.data.contents)),
  })

export const usePodcastRSSData = (rssUrl: string) => 
   useQuery<RSSData,Error>({
    queryKey: [rssUrl], //TODO: Mejorar
    queryFn: (): Promise<RSSData> =>
      axios
        .get(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`)
        .then((res) => {
          console.log("res.data.contents", res.data.contents)
          const cont = res.data.contents
          let jObj = parser.parse(cont);
          res.data = jObj
          return res
      })
        .then((res) => res.data),
  })



  



