import { useParams } from "react-router-dom";
import { useRssData } from "../hooks/usePodcastsData";
import { Item } from "../types/RSSData";
import ReactHtmlParser from 'react-html-parser';
import CardContainer from "./CardContainer";

const PodcastView = () => {

  let { episodeId } = useParams();

  const { rssData } = useRssData()

  if (!episodeId) return <></>
  const item: Item = rssData?.rss.channel.item[parseInt(episodeId)]

  return <section className='basis-10/12'>
    <CardContainer>
      <h1 className='mb-5 font-bold text-2xl'>{ReactHtmlParser(item.title["#text"])}</h1>

    <div>{ReactHtmlParser(item.description["#text"])}</div>
    <audio controls className='mainAudio mt-5 w-full'>
      <source src={item.enclosure["@_url"]} type={item.enclosure["@_type"]} />
      Your browser does not support the audio element.
    </audio>
    </CardContainer>
  </section>
}

export default PodcastView
