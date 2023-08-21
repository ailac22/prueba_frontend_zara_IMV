import { Link, Outlet, useParams } from "react-router-dom";

import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import CardContainer from "./CardContainer";
import ReactHtmlParser from 'react-html-parser';


const BarraLateralLayout = () => {

  let { podcastId } = useParams();

  const { error, data } = usePodcastData(podcastId as string)

  const rssURL = data?.results[0].feedUrl as string


  const { isLoading: rssIsLoading, data: rssData, isFetching: rssIsFetching } =
    usePodcastRSSData(rssURL, podcastId as string, rssURL != undefined)

  if (rssIsLoading || rssIsFetching || error) return <></>

  if (!data || !rssData) return <></>

  return (<section>

    <div className='flex items-start'>
      <CardContainer className="w-72 mr-10">

        {/* <Card className = 'flex flex-col drop-shadow-sm items-center p-2'> */}
        <div className='flex flex-col stretch '>
          <div className='flex items-center justify-center'>
            <Link to={`/podcast/${podcastId}`} >
              <img src={data?.results[0].artworkUrl600} className='rounded-lg w-64' />
            </Link>
          </div>
          <hr className='mt-3'></hr>
          <div className='my-5 pl-5'>
            <Link to={`/podcast/${podcastId}`} >
              <div className='font-bold text-xl w-full'>{data?.results[0].trackName}</div>
              <div>by <span className='italic'>{data?.results[0].artistName}</span></div>
            </Link>
          </div>
          <hr className='mt-3'></hr>
          <div className='mt-5'>
            <span className='font-bold text-lg'>Description:</span>
            <div className='pt-1 italic text-gray-500'>{ReactHtmlParser(rssData?.rss.channel.description["#text"])}</div>
          </div>
        </div>
        {/* </Card> */}
      </CardContainer>
      <Outlet context={{ data, rssData }} />
    </div>
  </section>)

}

export default BarraLateralLayout
