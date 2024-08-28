import React from 'react'
import { useNavigate } from 'react-router-dom'
import StaticHeader from '../../components/StaticHeader/StaticHeader';



const Career = () => {
  const nav = useNavigate();
  return (
    <div className='w-[100vw]'>
      <StaticHeader />
      <div className='h-[60vh] w-full flex justify-center items-center'>
        <div className='space-y-3'>
          <h1 className='text-2xl'>No Vacancy open!</h1>
          <button
            className='py-2 px-3 rounded-lg text-white bg-gray-500'
            onClick={() => nav(-1)}>Return To previous page</button>
        </div>
      </div>
    </div>
  )
}

export default Career