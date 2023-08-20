import { useOutletContext, useParams } from "react-router-dom";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import { XMLParser } from "fast-xml-parser";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Item } from "../types/RSSData";
import { Link } from 'react-router-dom'

const parser = new XMLParser();

const EpisodeList = () => {

  // console.log(parser)

  // if (!podcastId) return <div></div>

  // console.log("podcastId: ", podcastId)
  // const { isLoading, error, data, isFetching } = usePodcastData(podcastId)

  // console.log("original data: ", data)

  // if (error) return <></>

  // const rssURL = data?.results[0].feedUrl as string

  // console.log("rssURL", rssURL)
  // const { isLoading: rssIsLoading, error: rssError, data: rssData, isFetching: rssIsFetching } = usePodcastRSSData(rssURL, podcastId, rssURL != undefined)

  // if (rssIsLoading || rssIsFetching || error) return <></>

  // console.log("DATA: ", rssData)

  // console.log("awwwwwwwawwwwwwww",rssData?.rss.channel.item[0].enclosure)


  let { podcastId } = useParams();
  const [data, rssData] = useOutletContext();

  return (

    <div>
      <div className="bold bg-white border mb-3">Episodes: {rssData?.rss.channel.item.length}</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rssData?.rss.channel.item.map((row: Item, i: number) => (
              <TableRow
                // key={row.name}
                key={row.guid["#text"]}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">

                  <Link key={row.guid["#text"]} to={`/podcast/${podcastId}/episode/${1}`}>
                    {row.title["#text"]}
                  </Link>
            
                </TableCell>
                <TableCell align="right">
                  {new Date(row.pubDate["#text"]).toLocaleDateString('en-US')}
                </TableCell>
                <TableCell align="right">
                  {row["itunes:duration"]?.["#text"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )


}

export default EpisodeList
