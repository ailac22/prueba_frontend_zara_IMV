import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import VistaPrincipal from './components/VistaPrincipal'


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <VistaPrincipal/>
    </QueryClientProvider>
  )
}

export default App
