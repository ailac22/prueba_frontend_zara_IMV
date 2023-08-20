import { useParams } from "react-router-dom";

const EpisodeList = () => {

  let { podcastId } = useParams(); 



  return <div>Lista de {podcastId} aqui</div>


}

export default EpisodeList
