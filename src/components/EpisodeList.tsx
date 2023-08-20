import { useParams } from "react-router-dom";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import { XMLParser }  from "fast-xml-parser";

const parser = new XMLParser();

const EpisodeList = () => {

  console.log(parser)
  let { podcastId } = useParams(); 

  if (!podcastId) return <div></div>

  console.log("podcastId: ", podcastId)
  const { isLoading, error, data, isFetching } = usePodcastData(podcastId)
  
  
  if (error) return <></>

  const rssURL = data?.results[0].feedUrl as string

  const rssData = usePodcastRSSData(rssURL)

  // console.log("DATA: ", rssData)


  return <div>Lista de {podcastId} aqui</div>


}

export default EpisodeList
