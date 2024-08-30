import React, { useState } from 'react'

// img
import group from '../../assets/image/useables/group.webp'



// social icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import teamData from '../../assets/data/teamData';
import StaticHeader from '../../components/StaticHeader/StaticHeader';
import Useable from '../../components/Useable/Useable';

const About = () => {

  const [openId, setOpenId] = useState(null);
  const handleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };


  return (
    <div className='bg-[#CCE0FF]'>
      <StaticHeader />
      <Useable
        message={"Sparkle by CYC"}
        mainText={"Empowering Tomorrow's Sparkling Leaders Today"}
        subText={"Let Your Child Sparkle"}
      />
      <div className='p-10 pb-10 lg:p-20 space-y-20'>


        {/* grid */}
        <div className='grid lg:grid-cols-12 lg:grid-rows-12 gap-5 lg:max-h-[510px]'>

          <div className=' bg-white lg:col-span-5 lg:row-span-12 p-10 space-y-5 lg:space-y-10 rounded-3xl max-lg:order-2'>
            <div>
              <span className='text-red-500 text-sm font-semibold'>How it Started</span>
              <h1
                className='text-lg lg:text-4xl  font-semibold'
              >
                Our Dream is <br /> Global Learning Transformation
              </h1>
            </div>
            <div >
              <p className='text-sm text-gray-700'>
                <span className='italic text-gray-900'>Sparkle Kids Academy</span>, founded by <strong>Sneha Raut Thapa</strong>, is dedicated to grooming children for the future by offering a wide range of training programs. Inspired by her love for children and the desire to provide what her generation missed, Sneha created Sparkle to help kids develop essential life skills and confidence. Through courses in public speaking, dance, art, and personal grooming, Sparkle Kids Academy is committed to empowering the next generation with the resources they need to succeed.

              </p>
            </div>
          </div>

          <div className=' bg-white lg:col-span-7 lg:row-span-6   rounded-3xl overflow-hidden max-lg:order-1'>
            <img src={group} alt="team-img" />
          </div>

          <div className=' bg-white lg:col-span-7 lg:row-span-6  rounded-3xl max-lg:order-3'>
            <div className='flex flex-wrap p-5 items-center justify-center gap-5'>

              <div className='px-3 py-4  w-[200px] bg-gray-50 rounded-2xl'>
                <h1 className='text-lg font-bold'>1+</h1>
                <p className='text-[12px] text-gray-700'>Years Experience</p>
              </div>

              <div className='px-3 py-4 w-[200px] bg-gray-50 rounded-2xl'>
                <h1 className='text-lg font-bold'>20+</h1>
                <p className='text-[12px] text-gray-700'>Successful Events</p>
              </div>
              <div className='px-3 py-4 w-[200px] bg-gray-50 rounded-2xl'>
                <h1 className='text-lg font-bold'>100+</h1>
                <p className='text-[12px] text-gray-700'>Positive Reviews</p>
              </div>
              <div className='px-3 py-4  w-[200px] bg-gray-50 rounded-2xl'>
                <h1 className='text-lg font-bold'>1000+</h1>
                <p className='text-[12px] text-gray-700'>Successful Voices</p>
              </div>
            </div>
          </div>

        </div >

        {/*Team Heading */}
        <div className='p-10 space-y-5'>
          <div className='space-y-5'>
            <span className='text-red-500 text-sm font-semibold'>Meet the Team</span>
            <h1 className='text-lg lg:text-4xl font-semibold'>Meet Our Dedicated Team of <br /> Educators and Innovators</h1>
          </div>

          {/* Team Section */}
          <div className='flex flex-wrap gap-5 justify-center items-center'>
            {teamData.map(member => (
              <div key={member.id} className='w-[180px] md:w-[200px] h-[195px] md:h-[240px] rounded-lg overflow-hidden shadow-lg relative'>
                <img src={member.image} alt={`Team member ${member.id}`} className='h-full w-full' />
                <div
                  onClick={() => handleOpen(member.id)}
                  className='absolute top-[5px] right-[5px] z-10 cursor-pointer text-red-500 hover:text-black hover:scale-150 transition duration-200 text-[30px]'>
                  +
                </div>
                {openId === member.id && (
                  <div className='absolute top-10 right-0 z-10 transition-transform translate-y-3 duration-150'>
                    <div className='flex flex-col gap-[5px] md:gap-3 px-1'>
                      <NavLink to={member.linkedin}>
                        <FaLinkedin className='size-[20px] md:size-[30px] text-blue-500' />
                      </NavLink>

                      <NavLink to={member.facebook}>
                        <FaFacebook className='size-[20px] md:size-[30px] text-blue-700' />
                      </NavLink>

                      <NavLink to={member.instagram}>
                        <FaInstagram className='size-[20px] md:size-[30px] text-purple-500' />
                      </NavLink>

                      <NavLink to={member.whatsapp}>
                        <FaWhatsapp className='size-[20px] md:size-[30px] text-green-500' />
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* ambition*/}
        <div className='flex max-lg:flex-wrap justify-between rounded-lg overflow-hidden gap-5 p-10 bg-white'>

          {/* our Vision */}
          <div className='bg-gray-50 w-full rounded-3xl p-5 space-y-5'>
            <span className='text-red-500 text-sm font-semibold'>Our Vision</span>
            <h1 className='text-lg lg:text-4xl font-semibold'>Empowering Lives <br />Through Education</h1>
            <div>
              <p className='text-sm text-gray-700'>
                Our vision is to become a leading educational and training academy for children, redefining childhood education through creativity and innovation.
              </p>
            </div>
          </div>

          {/* our Mision */}
          <div className='bg-gray-50 w-full rounded-3xl p-5 space-y-5'>
            <span className='text-red-500 text-sm font-semibold'>Our Mission</span>
            <h1 className='text-lg lg:text-4xl font-semibold'>Learning for All, <br />Everywhere</h1>
            <div>
              <p className='text-sm text-gray-700'>
                Our mission is to revolutionize early childhood education in Nepal by offering high-quality, hands-on learning experiences tailored to the unique needs and interests of young learners. Through our training and workshops, we aim to enhance cognitive development, foster problem-solving skills, and inspire a lifelong passion for discovery.

              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About