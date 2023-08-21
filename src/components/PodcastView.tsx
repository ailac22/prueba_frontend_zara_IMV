import { useParams } from "react-router-dom";
import { useRssData } from "../hooks/usePodcastsData";
import { Item } from "../types/RSSData";
import ReactHtmlParser from 'react-html-parser';

const PodcastView = () => {

  let {  episodeId } = useParams();

  const {rssData} = useRssData() 

  if (!episodeId) return <></>
  const item: Item = rssData?.rss.channel.item[parseInt(episodeId)]

  console.log("episodeId", episodeId)

  return <section>
    <h1>{item.title["#text"]}</h1>

    <div>{ReactHtmlParser(item.description["#text"])}</div>
    <audio controls className='mainAudio'>
      <source src={item.enclosure["@_url"]} type={item.enclosure["@_type"]}/>
    Your browser does not support the audio element.
    </audio>
  </section>
}

export default PodcastView
