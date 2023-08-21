import { Outlet, useParams } from "react-router-dom";
import PodcastCardProps from "../types/PodcastCardProps";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Item } from "../types/RSSData";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";

const BarraLateralLayout = () => {

  let params = useParams();

  let { podcastId, episodeId } = useParams(); 


  const { isLoading, error, data, isFetching } = usePodcastData(podcastId as string)



  const rssURL = data?.results[0].feedUrl as string


  const { isLoading: rssIsLoading, error: rssError, data: rssData, isFetching: rssIsFetching } = usePodcastRSSData(rssURL, podcastId as string, rssURL != undefined)

  if (rssIsLoading || rssIsFetching || error) return <></>

  if (!data || !rssData)

  if (error) return <></>
  console.log("los params: ", params)
  console.log("data: ", data)
  console.log("rssData: ", rssData)


  return (<section>

    <Card>
    <div>
        {data?.results[0].trackName} </div>
        <div>{data?.results[0].artistName}</div>
        <div>{rssData?.rss.channel.description["#text"]}</div>
    </Card>
    <Outlet context={[data, rssData]}/>
  </section>)

} 

export default BarraLateralLayout
