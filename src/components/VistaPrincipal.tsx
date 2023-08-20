import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import PodcastCard from './PodcastCard'
import PodcastListData from '../types/PodcastListData'

export default function VistaPrincipal() {


  const { isLoading, error, data, isFetching } = useQuery<PodcastListData,Error>({
    queryKey: ['allPodcasts'],
    queryFn: (): Promise<PodcastListData> =>
      axios
        .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then((res) => res.data),
  })

  if (isLoading || isFetching || error) return <>Cargando...</> 

  const podcastList = data.feed.entry.map(entry => {
    return <PodcastCard key={entry.id.label} 
      image={entry['im:image'][0].label} 
      name={entry['im:name'].label} 
      author={entry['im:artist'].label} />
  })

  return <div>
    Podcasts
    {error ? "sip" : "no hay error?"}

    {podcastList}
    

  </div>

}
