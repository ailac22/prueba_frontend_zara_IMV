import { Link, Outlet } from 'react-router-dom'

const LayoutGeneral = () => {

  return (
    <main>
      <div className='w-full lg:px-32 px-0 pt-8 '>

        <div>
          <Link to={'/'}>
            <h1 className='text-sky-800 font-bold text-xl'>Podcaster</h1>
          </Link>
          <hr className='pb-8 mt-3' />
          <Outlet />
        </div>
      </div>
    </main>
  )

}

export default LayoutGeneral
