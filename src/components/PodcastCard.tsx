import PodcastCardProps from "../types/PodcastCardProps"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const PodcastCard: React.FC<PodcastCardProps> =  ({image, name, author}) => {

  return ( 
    <div className='flex flex-col drop-shadow-xl bg-blue-200 items-center'>
      <img src={image} alt={name} className='rounded-full' />
      <p className='pt-1 uppercase font-bold'>{name}</p>
      <p className='pt-2'>Author: {author}</p>
    </div>
  )
}

export default PodcastCard
