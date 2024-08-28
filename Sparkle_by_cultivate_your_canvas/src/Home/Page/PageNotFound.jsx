import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <div className='m-5 space-y-5'>
      <h1>Page Not Found!!!</h1>
      <button
        onClick={() => nav(-1)}
        className='px-3 py-2 bg-gray-500 text-white rounded-md'>Return back</button>
    </div>
  )
}

export default PageNotFound