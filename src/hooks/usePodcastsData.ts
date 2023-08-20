import axios from "axios"
import PodcastListData from "../types/PodcastListData"
import LookupResults from "../types/LookupResults"
import { useQuery } from "@tanstack/react-query"

const podcastLimit = 100

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
    queryKey: ['allPodcasts', id],
    queryFn: (): Promise<LookupResults> =>
      axios
        .get(`https://itunes.apple.com/lookup?id=${id}`)
        .then((res) => res.data),
  })



