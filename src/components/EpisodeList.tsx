import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Item } from "../types/RSSData";
import { Link } from 'react-router-dom'
import { useRssData } from "../hooks/usePodcastsData";
import CardContainer from "./CardContainer";


const EpisodeList = () => {

  let { podcastId } = useParams();
  const { rssData } = useRssData()

  return (

    <div>

      <CardContainer className="bg-red-500">
        <span>Episodes: {rssData?.rss.channel.item.length}</span>
      </CardContainer>
      <TableContainer component={Paper} className="bg-blue-500">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><span className='font-bold'>Title</span></TableCell>
              <TableCell align="left"><span className='font-bold'>Date</span></TableCell>
              <TableCell align="left"><span className='font-bold'>Duration</span></TableCell>
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

                  <Link key={row.guid["#text"]} to={`/podcast/${podcastId}/episode/${i}`}>
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
