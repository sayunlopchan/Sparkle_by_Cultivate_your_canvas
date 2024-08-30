import React from 'react'

const Useable = ({ message, mainText, subText }) => {
  return (
    <>
      <div className="text-center space-y-5 p-10 bg-gray-300 mb-10">
        <div className="relative h-[300px] flex justify-center items-center">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-red-500 opacity-50 blur-2xl" />
          <div className="absolute z-20 w-full space-y-5">
            <span className="p-2 bg-red-300 text-sm font-[500] rounded-full border border-b-2 border-black">
              {message}
            </span>
            <div className="font-semibold">
              <h1 className='text-4xl'>{mainText}</h1>
              <h2 className='text-xl'>{subText}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Useable