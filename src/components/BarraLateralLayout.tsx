import { Outlet, useParams } from "react-router-dom";

import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import CardContainer from "./CardContainer";

const BarraLateralLayout = () => {

  let params = useParams();

  let { podcastId } = useParams(); 

  const { error, data} = usePodcastData(podcastId as string)

  const rssURL = data?.results[0].feedUrl as string


  const { isLoading: rssIsLoading, data: rssData, isFetching: rssIsFetching } = 
  usePodcastRSSData(rssURL, podcastId as string, rssURL != undefined)

  if (rssIsLoading || rssIsFetching || error) return <></>

  if (!data || !rssData)

  if (error) return <></>
  console.log("los params: ", params)
  console.log("data: ", data)
  console.log("rssData: ", rssData)


  return (<section>

    <div className='flex'>
      <CardContainer> 
      {/* <Card className = 'flex flex-col drop-shadow-sm items-center p-2'> */}
        <img src={data?.results[0].artworkUrl600} />
        <div>{data?.results[0].trackName} </div>
        <div>{data?.results[0].artistName}</div>
        <div>{rssData?.rss.channel.description["#text"]}</div>
      {/* </Card> */}
      </CardContainer>
      <Outlet context={{data, rssData}}/>
    </div>
  </section>)

} 

export default BarraLateralLayout
