import React from 'react'

const Booking = () => {
  return (
    <div className='flex flex-wrap items-center justify-center md:gap-5 p-10 md:p-20 gap-5 bg-gradient-to-tr from-yellow-500 to bg-orange-500 text-center'>
      <h1 className='text-sm md:text-xl lg:text-2xl'>
        Book a trial class and receive a professionl assessment on-site.
      </h1>
      <span
        className='text-sm px-3 py-2 rounded-2xl border-2 border-white'>
        Get free trail class
      </span>
    </div>
  )
}

export default Booking