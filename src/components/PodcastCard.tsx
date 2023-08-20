import PodcastCardProps from "../types/PodcastCardProps"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const PodcastCard: React.FC<PodcastCardProps> =  ({image, name, author}) => {

  return ( 
    <Card>
      <img src={image} alt={name}/>
      <p>{name}</p>
      <p>Author: {author}</p>
    </Card>
  )
}

export default PodcastCard
