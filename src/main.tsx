import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutGeneral from './components/LayoutGeneral.tsx'
import VistaPrincipal from './components/VistaPrincipal.tsx'
import BarraLateralLayout from './components/BarraLateralLayout.tsx'
import EpisodeList from './components/EpisodeList.tsx'
import PodcastView from './components/PodcastView.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutGeneral/>,
    children: [

      { index: true, element: <VistaPrincipal/> },
      {
        path: "/podcast",
        element: <BarraLateralLayout image='a' name='b' author='c'/>,
        children: [
          {
            path: ":podcastId",
            element: <EpisodeList/>
          },
          {
            path: ':podcastId/episode/:episodeId',
            element: <PodcastView/>
            
          }
        ]
      },
    ]
  }
])

      // {/* <BrowserRouter> */}
      // {/*   <Routes> */}
      // {/*     <Route path="/" element={<LayoutGeneral/>}> */}
      // {/*         <Route index element={ <VistaPrincipal/> } /> */}
      // {/*          */}
      // {/*       {/* Using path="*"" means "match anything", so this route */}
      // {/*             acts like a catch-all for URLs that we don't have explicit */}
      // {/*             routes for. */} */}
      // {/*       {/* <Route path="*" element={<NoMatch />} /> */} */}
      // {/*     </Route> */}
      // {/*   </Routes> */}
      // {/* </BrowserRouter> */}
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
