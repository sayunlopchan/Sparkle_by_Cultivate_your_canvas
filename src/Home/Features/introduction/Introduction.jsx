import React from 'react'

// sticker img
import candle2 from '../../../assets/image/vector/burning-candle2.webp'
import candle3 from '../../../assets/image/vector/burning-candle3.webp'

const Introduction = () => {
  return (
    <div className='p-10 text-center'>
      <div className=' w-full relative'>

        {/* headinng */}
        <h1 className=' text-[30px] lg:text-[50px] font-bold '>Introduction</h1>

        {/* stickers */}
        <img
          src={candle2}
          alt="candle"
          className='absolute h-[80px] right-0 bottom-0 md:right-[26%]' />
        <img
          src={candle3}
          alt="candle"
          className='absolute h-[80px] left-0 -bottom-0 md:left-[26%]' />
      </div>
      {/* text */}
      <div className='space-y-5'>
        <p className='max-sm:text-sm'><span>**</span>
          <span className="bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            <strong>Welcome to Sparkle by Cultivate Your Canvas</strong>
          </span>
          <span>**</span></p>
        <p className='max-sm:text-sm text-gray-700'>
          At Sparkle, we are committed to creating a nurturing and stimulating environment for children to explore, learn, and grow through a variety of engaging programs and workshops. We believe that every child deserves the opportunity to unlock their full potential, and our mission is to provide a holistic learning experience that focuses on both personal and academic development.
          <br />
          Founded by passionate educators and parents, Sparkle is more than just an academy—it’s a community dedicated to fostering creativity, confidence, and lifelong skills. From arts to yoga, public speaking, dance, and personality development, our diverse programs are designed to inspire children to discover their unique strengths in a safe and supportive setting.
          <br />
          With a team of experienced instructors, a focus on holistic development, and a commitment to keeping parents involved every step of the way, Sparkle is the perfect place for your child to shine. Join us in empowering the next generation to grow into confident, well-rounded individuals who are ready to take on the world.!</p>
      </div>
    </div>
  )
}

export default Introduction