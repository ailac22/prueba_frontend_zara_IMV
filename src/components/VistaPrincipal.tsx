import PodcastCard from './PodcastCard'
import { Link } from 'react-router-dom'
import { usePodcastsData } from '../hooks/usePodcastsData'
// import Parser from 'rss-parser'

// const parser = new Parser()

export default function VistaPrincipal() {


  const { isLoading, error, data, isFetching } = usePodcastsData()

  if (isLoading || isFetching || error) return <>Cargando...</>  //TODO: Mejorar esto

  const podcastList = data.feed.entry.map(entry => {
    return (
      <Link to={`/podcast/${entry.id.attributes?.['im:id']}`}>
        <PodcastCard key={entry.id.label} 
        image={entry['im:image'][0].label} 
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
