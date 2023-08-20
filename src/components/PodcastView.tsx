import { useOutletContext, useParams } from "react-router-dom";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import { Item } from "../types/RSSData";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import DOMPurify from 'dompurify';
// import renderHTML from 'react-render-html';

const PodcastView = () => {

  const [data, item] = useOutletContext();


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
