import { Outlet, useParams } from "react-router-dom";
import PodcastCardProps from "../types/PodcastCardProps";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const BarraLateralLayout: React.FC<PodcastCardProps> = ({image, name, author}) => {

  let params = useParams();


  console.log("los params: ", params)

  return (<section>

    <Card>
    <div>
    {image}
    {name}
    {author}
    </div>
    </Card>
    <Outlet/>
  </section>)

} 

export default BarraLateralLayout
