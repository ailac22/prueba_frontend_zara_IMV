import PodcastCardProps from "../types/PodcastCardProps"

const PodcastCard: React.FC<PodcastCardProps> =  ({image, name, author}) => {

  return ( 
    <div>
      <img src={image} alt={name}/>
      <p>{name}</p>
      <p>Author: {author}</p>
    </div>
  )
}

export default PodcastCard
