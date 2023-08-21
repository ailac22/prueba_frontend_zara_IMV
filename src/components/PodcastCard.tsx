import PodcastCardProps from "../types/PodcastCardProps"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const PodcastCard: React.FC<PodcastCardProps> =  ({image, name, author}) => {

  return ( 

    <div className="border-2">
    <div className='flex flex-col drop-shadow-sm items-center p-2 '>
        <img src={image} alt={name} className='rounded-full' />
      <p className='text-center pt-1 uppercase font-bold'>{name}</p>
      <p className='text-center text-gray-500 pt-2'>Author: {author}</p>
    </div>
    </div>
  )
}

export default PodcastCard
