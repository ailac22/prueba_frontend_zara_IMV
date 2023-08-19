import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function VistaPrincipal(){

  console.log("ey")

  const { isLoading, error, data, isFetching } = useQuery({
      queryKey: ['allPodcasts'],
      queryFn: () =>
        axios
          .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
          .then((res) => res.data),
    })

  console.log(data)
  return <div> 
    Podcasts
    {error ? "sip": "no hay error?"}
  </div>
  
}
