import PodcastCard from './PodcastCard'
import { Link } from 'react-router-dom'
import { usePodcastsData } from '../hooks/usePodcastsData'

export default function VistaPrincipal() {


  const { isLoading, error, data, isFetching } = usePodcastsData()

  if (isLoading || isFetching || error) return <>Cargando...</>  //TODO: Mejorar esto

  console.log(data)
  const podcastList = data.feed.entry.map(entry => {
    return (
      <Link key={entry.id.label} to={`/podcast/${entry.id.attributes?.['im:id']}`}>
        <PodcastCard  
        image={entry['im:image'][2].label}  
        name={entry['im:name'].label} 
        author={entry['im:artist'].label} />
      </Link>
    )
  })

  return ( 
    <div className='grid grid-cols-4 gap-10'>
      {podcastList}
    </div>
  )

}
