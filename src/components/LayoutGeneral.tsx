import { Outlet } from 'react-router-dom'

const LayoutGeneral = () => {

  return (
    <main className='flex justify-center bg-blue-500'>
      <div className='flex justify-center md:max-w-6xl w-10/12 bg-red-500'>

        <div>
          <h1 className='text-blue-300 bold text-xl'>Podcaster</h1>
          <hr className='pb-8'/>
          <Outlet/>
        </div>
      </div>
    </main>
  )

}

export default LayoutGeneral
