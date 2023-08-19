import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import PodcastCard from './PodcastCard'
import PodcastListData from '../types/PodcastListData'

export default function VistaPrincipal() {

  console.log("ey")

  const { isLoading, error, data, isFetching } = useQuery<PodcastListData,Error>({
    queryKey: ['allPodcasts'],
    queryFn: (): Promise<PodcastListData> =>
      axios
        .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then((res) => res.data),
  })

  if (isLoading || isFetching || error) return <>Cargando...</> 

  console.log("feed: ", data.feed)

  const podcastList = data.feed.entry.map(entry => {

    //TODO: Poner key 
    return <PodcastCard key={entry.id.label} image={entry['im:image'][0].label} name={entry['im:name'].label} author={entry['im:artist'].label} />
  })
  console.log(data)
  return <div>
    Podcasts
    {error ? "sip" : "no hay error?"}

    {podcastList}
    

  </div>

}
