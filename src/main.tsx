import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
