import { useParams } from "react-router-dom";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import { XMLParser } from "fast-xml-parser";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { minutesToSeconds } from "date-fns";
import { Item } from "../types/RSSData";

const parser = new XMLParser();

const EpisodeList = () => {

  console.log(parser)
  let { podcastId } = useParams();

  if (!podcastId) return <div></div>

  console.log("podcastId: ", podcastId)
  const { isLoading, error, data, isFetching } = usePodcastData(podcastId)

  console.log("original data: ", data)

  if (error) return <></>

  const rssURL = data?.results[0].feedUrl as string

  console.log("rssURL", rssURL)
  const { isLoading: rssIsLoading, error: rssError, data: rssData, isFetching: rssIsFetching } = usePodcastRSSData(rssURL, podcastId, rssURL != undefined)

  if (rssIsLoading || rssIsFetching || error) return <></>

  console.log("DATA: ", rssData)



  return (

    <div>
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
            {rssData?.rss.channel.item.map((row: Item) => (
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">1111</TableCell>
                <TableCell align="right">2222</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )


}

export default EpisodeList
