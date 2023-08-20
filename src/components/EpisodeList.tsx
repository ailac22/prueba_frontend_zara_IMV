import { useParams } from "react-router-dom";
import { usePodcastData } from "../hooks/usePodcastsData";

const EpisodeList = () => {

  let { podcastId } = useParams(); 


  usePodcastData

  return <div>Lista de {podcastId} aqui</div>


}

export default EpisodeList
