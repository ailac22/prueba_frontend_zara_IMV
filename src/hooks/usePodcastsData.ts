import axios from "axios"
import PodcastListData from "../types/PodcastListData"
import LookupResults from "../types/LookupResults"
import { useQuery } from "@tanstack/react-query"
import { XMLBuilder, XMLParser }  from "fast-xml-parser";

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

export const usePodcastRSSData = async (rssUrl: string) => {

  const { data } = useQuery<LookupResults,Error>({
    queryKey: [rssUrl], //TODO: Mejorar
    queryFn: (): Promise<LookupResults> =>
      axios
        .get(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`)
        .then((res) => {
          console.log("xml data: ", res.data)
          const cont = res.data.contents
          console.log("cont: ", cont)
          let jObj = parser.parse(cont);

          const xmlContent = builder.build(jObj);
          console.log("xmlContent: ", jObj)
          return res
      })
        .then((res) => res.data),
  })



}  



