import { useParams } from "react-router-dom";
import { usePodcastData, usePodcastRSSData } from "../hooks/usePodcastsData";
import { XMLParser }  from "fast-xml-parser";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { minutesToSeconds } from "date-fns";

const parser = new XMLParser();

const EpisodeList = () => {

  console.log(parser)
  let { podcastId } = useParams(); 

  if (!podcastId) return <div></div>

  console.log("podcastId: ", podcastId)
  const { isLoading, error, data, isFetching } = usePodcastData(podcastId)
  
  
  if (error) return <></>

  const rssURL = data?.results[0].feedUrl as string

  console.log("rssURL", rssURL)
  const {data: rssData} = usePodcastRSSData(rssURL)

  console.log("DATA: ", rssData)


  return (

  <div>
    {/* <TableContainer component={Paper}> */}
    {/*   <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
    {/*     <TableHead> */}
    {/*       <TableRow> */}
    {/*         <TableCell>Dessert (100g serving)</TableCell> */}
    {/*         <TableCell align="right">Calories</TableCell> */}
    {/*         <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
    {/*         <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
    {/*         <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
    {/*       </TableRow> */}
    {/*     </TableHead> */}
    {/*     <TableBody> */}
    {/*       {rows.map((row) => ( */}
    {/*         <TableRow */}
    {/*           key={row.name} */}
    {/*           sx={{ '&:last-child td, &:last-child th': { border: 0 } }} */}
    {/*         > */}
    {/*           <TableCell component="th" scope="row"> */}
    {/*             {row.name} */}
    {/*           </TableCell> */}
    {/*           <TableCell align="right">{row.calories}</TableCell> */}
    {/*           <TableCell align="right">{row.fat}</TableCell> */}
    {/*           <TableCell align="right">{row.carbs}</TableCell> */}
    {/*           <TableCell align="right">{row.protein}</TableCell> */}
    {/*         </TableRow> */}
    {/*       ))} */}
    {/*     </TableBody> */}
    {/*   </Table> */}
    {/* </TableContainer> */}
    
  </div>
  )


}

export default EpisodeList
