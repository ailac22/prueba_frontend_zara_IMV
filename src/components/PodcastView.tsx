import { useParams } from "react-router-dom";

const PodcastView = () => {

  let { podcastId, episodeId } = useParams(); 

  return <>Podcast View of podcast {podcastId}, Episode { episodeId }</>
}

export default PodcastView
