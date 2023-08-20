import { Outlet } from "react-router-dom";
import PodcastCardProps from "../types/PodcastCardProps";

const BarraLateralLayout: React.FC<PodcastCardProps> = ({image, name, author}) => {

  return (<section>

    <div>
    {image}
    {name}
    {author}
    </div>
    <Outlet/>
  </section>)

} 

export default BarraLateralLayout
