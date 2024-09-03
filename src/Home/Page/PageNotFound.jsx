import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundHeader from '../../components/StaticHeader/NotFoundHeader';

// bg-img

import notfound_bg from '../../assets/image/program/art/kid8.webp'


const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <div style={{
      backgroundImage: `url(${notfound_bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      height: '100vh',
      width: '100vw'
    }}>
      <div className='bg-black h-screen w-full opacity-50 absolute top-0' />
      <div className='text-white absolute w-full z-20'>
        <NotFoundHeader />
      </div>
      <div
        className='text-white absolute w-full z-10'
      >
        <div className='flex flex-col justify-center items-center mt-[40%] sm:mt-[30%] md:mt-[20%] lg:mt-[14%] text-center' >
          <h2 className='text-[130px] font-semibold   text-border'>404</h2>
          <p className='text-white text-[30px] -mt-8'>Page Not Found!!!</p>

          <div className='mx-auto mt-5'>
            <button
              onClick={() => nav(-1)}
              className=' px-4 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all'>Return back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound