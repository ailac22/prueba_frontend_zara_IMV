import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutGeneral from './components/LayoutGeneral.tsx'
import VistaPrincipal from './components/VistaPrincipal.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutGeneral/>,
    children: [

      { index: true, element: <VistaPrincipal/> },
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
