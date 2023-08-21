import PodcastCardProps from "../types/PodcastCardProps"

import CardContainer from "./CardContainer";

const PodcastCard: React.FC<PodcastCardProps> =  ({image, name, author}) => {

  return ( 

    <CardContainer>
    <div className='flex flex-col drop-shadow-sm items-center p-2 '>
        <img src={image} alt={name} className='rounded-full' />
      <p className='text-center pt-1 uppercase font-bold'>{name}</p>
      <p className='text-center text-gray-500 pt-2'>Author: {author}</p>
    </div>
    </CardContainer>
  )
}

export default PodcastCard
