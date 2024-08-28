import React from 'react'
// imgs
import img1 from '../../assets/image/people/pose.jpg'
import img2 from '../../assets/image/fun-activities/yoga/yoga.jpg'
import img3 from '../../assets/image/award/grpbannerhold.jpg'
import img4 from '../../assets/image/fun-activities/art/art.jpg'


// texture images
import taxture from '../../assets/texture/bg-texture/white_linen_texture.jpg'

// splash images
import splashRed from '../../assets/texture/splash/modern-red-watercolor.png'

import splashGreen from '../../assets/texture/splash/elegant-green-watercolor.png'

import splashYelow from '../../assets/texture/splash/modern-yellow-orange-watercolor.png'

import splashOrange from '../../assets/texture/splash/abstract-orange-watercolor.png'

import splashPink from '../../assets/texture/splash/abstract-pink-watercolor.png'


import './gallery.css'

const GridGallery_1 = () => {
  return (
    <div className='grid-gallary-1-container '>

      {/* img */}
      <div className='grid-gallery-1-container-box'>
        <div
          className='grid-gallery-imgs-grid-box'
          style={{ backgroundImage: `url(${taxture})` }}
        >

          <div
            className="grid-img animation-disapp"
            style={{ backgroundImage: `url(${img1})` }}
          />

          <div
            className="grid-img animation-disapp"
            style={{ backgroundImage: `url(${img2})` }}
          />

          <div
            className="grid-img animation-disapp"
            style={{ backgroundImage: `url(${img3})` }}
          />

          <div
            className="grid-img animation-disapp"
            style={{ backgroundImage: `url(${img4})` }}
          />

        </div>
      </div>

      {/* text */}
      <div className='grid-gallery-1-container-box'>

        <div className='w-full space-y-5'>

          <h1 className='text-red-500 font-[500] text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, itaque.</h1>

          <p className='p-text italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique nisi harum! Eaque quaerat, necessitatibus facilis saepe et est tenetur.</p>

          <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <ul className='card-ul'>

            <li><img src={splashRed} alt="red-splash" className='size-[50px]' />Art at Sparkle Kids Academy.</li>

            <li><img src={splashGreen} alt="red-splash" className='size-[50px]' />Yoga at Sparkle Kids Academy.</li>

            <li><img src={splashYelow} alt="red-splash" className='size-[50px]' />Public speaking at Sparkle Kids Academy.</li>

            <li><img src={splashOrange} alt="red-splash" className='size-[50px]' />Dance at Sparkle Kids Academy.</li>

            <li><img src={splashPink} alt="red-splash" className='size-[50px]' />Personality development at Sparkle Kids Academy.</li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default GridGallery_1