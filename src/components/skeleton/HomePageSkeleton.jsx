import React from 'react'

const HomePageSkeleton = () => {
  return (
    <div className='h-screen w-full bg-gray-300 overflow-hidden'>
      {/* nav */}
      <div className='flex justify-between items-center p-3'>
        <div className='h-[30px] w-[70px] bg-gray-400 animate-fast-pulse'></div>

        <div className='flex w-full justify-center gap-2 max-lg:hidden '>
          <div className='h-[30px] w-[120px] bg-gray-400 animate-fast-pulse'></div>
          <div className='h-[30px] w-[120px] bg-gray-400 animate-fast-pulse'></div>
          <div className='h-[30px] w-[120px] bg-gray-400 animate-fast-pulse'></div>
          <div className='h-[30px] w-[120px] bg-gray-400 animate-fast-pulse'></div>
          <div className='h-[30px] w-[120px] bg-gray-400 animate-fast-pulse'></div>
        </div>
        <div className='h-[30px] w-[100px] bg-gray-400 animate-fast-pulse'></div>
      </div>
      {/* nav */}

      {/* bottom */}
      <div className='bg-gray-400 h-[100%] w-full relative animate-fast-pulse'>

        {/* circle */}
        <div className='bg-gray-300 size-[50px] rounded-full absolute bottom-16 left-5 animate-fast-pulse'></div>
        <div className='bg-gray-300 size-[50px] rounded-full absolute bottom-16 left-20 animate-fast-pulse'></div>
        {/* circle */}

        {/* box */}
        <div className='bg-gray-400 absolute bottom-16 right-0 lg:right-10 animate-fast-pulse p-2 flex gap-2 flex-col lg:flex-row'>
          <div className='bg-gray-300 size-[100px] lg:size-[120px] animate-fast-pulse'></div>
          <div className='bg-gray-300 size-[100px] lg:size-[120px] animate-fast-pulse'></div>
          <div className='bg-gray-300 size-[100px] lg:size-[120px] animate-fast-pulse'></div>
        </div>
        {/* box */}

      </div>


    </div>
  )
}

export default HomePageSkeleton