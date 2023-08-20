import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import PodcastCard from './PodcastCard'
import PodcastListData from '../types/PodcastListData'
import { Link } from 'react-router-dom'

export default function VistaPrincipal() {


  const { isLoading, error, data, isFetching } = useQuery<PodcastListData,Error>({
    queryKey: ['allPodcasts'],
    queryFn: (): Promise<PodcastListData> =>
      axios
        .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then((res) => res.data),
  })

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
