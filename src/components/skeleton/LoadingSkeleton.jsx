import React from 'react'
import './Skeleton.css'

const LoadingSkeleton = () => {
  return (
    <div className='loading-container'>
      <div className='loading-box-1'>
        <div className='loading-text-box-1'></div>
        <div className='loading-text-box-2 '></div>
        <div className='loading-text-box-3 '></div>
      </div>
      <div className='loading-box-2'>

      </div>
    </div>
  )
}

export default LoadingSkeleton