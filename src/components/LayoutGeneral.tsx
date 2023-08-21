import { Link, Outlet } from 'react-router-dom'

const LayoutGeneral = () => {

  return (
    <main className='flex justify-center'>
      <div className='flex justify-center md:max-w-6xl w-10/12 pt-5 bg-red-100'>

        <div>
          <Link to={'/'}>
          <h1 className='text-sky-800 bold text-xl'>Podcaster</h1>
          </Link>
          <hr className='pb-8 mt-3'/>
          <Outlet/>
        </div>
      </div>
    </main>
  )

}

export default LayoutGeneral
