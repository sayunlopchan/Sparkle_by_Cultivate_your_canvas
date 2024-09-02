import React from 'react'

const Booking = () => {
  return (
    <div className='flex flex-wrap items-center justify-center md:gap-5 p-10 md:p-20 gap-5 bg-gradient-to-tr from-yellow-500 to bg-orange-500 text-center text-white'>
      <p className='text-sm md:text-xl lg:text-2xl'>
        Empower Young Minds with Art, Dance, Yoga, and More. Ready to Sparkle?
      </p>
      <span
        className=' text-sm md:text-lg px-3 py-2 rounded-2xl border-2 border-white hover:bg-orange-500 transition-all'>
        <a href="https://wa.me/9857049590" target="_blank"> Join Us Today!</a>
      </span>
    </div>
  )
}

export default Booking