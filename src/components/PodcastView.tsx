import { useParams } from "react-router-dom";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import { Item } from "../types/RSSData";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import DOMPurify from 'dompurify';
// import renderHTML from 'react-render-html';

const PodcastView = () => {

  let { podcastId, episodeId } = useParams(); 

  if (!episodeId) return <></>

  const { isLoading, error, data, isFetching } = usePodcastData(podcastId as string)

  if (error) return <></>

  const rssURL = data?.results[0].feedUrl as string

  const { isLoading: rssIsLoading, error: rssError, data: rssData, isFetching: rssIsFetching } = usePodcastRSSData(rssURL, podcastId as string, rssURL != undefined)

  if (rssIsLoading || rssIsFetching || error) return <></>

  let item: Item = rssData?.rss.channel.item[episodeId]


  return <section>
    <h1>{item.title["#text"]}</h1>

    <div>{ReactHtmlParser(item.description["#text"])}</div>
    <audio controls>
      <source src={item.enclosure["@_url"]} type={item.enclosure["@_type"]}/>
    Your browser does not support the audio element.
    </audio>
  </section>
}

export default PodcastView
