import React from 'react'
import StaticHeader from '../../components/StaticHeader/StaticHeader'

import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Form = () => {
  return (
    <div classNameName='w-[100vw]'>

      <StaticHeader />

      {/* heading */}
      <div className=" text-center space-y-5 p-10 bg-gray-300 ">
        <div className="relative h-[200px]">
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-red-500 opacity-50 blur-2xl">
          </div>
          <div className="absolute z-20 mt-10 w-full space-y-5">
            <span className="p-2 bg-red-300 text-sm font-[500] rounded-full border border-b-2 border-black">
              Your first step
            </span>

            <div className="font-semibold text-[24px]">
              <h1>Form to fill Your Childrens Life with Joy</h1>
              <h2>Know us More!</h2>
            </div>
          </div>
        </div>
      </div>


      {/* addmission form */}
      <div className="max-w-2xl mx-auto bg-white p-8 mt-10 mb-20 shadow-lg rounded-lg">
        {/* heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">Admission Form</h2>

        <form action="#" method="POST">
          {/* <!-- Full Name --> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="full_name">Full Name</label>
            <input type="text" id="full_name" name="full_name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* <!-- Email Address --> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* <!-- Phone Number --> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* <!-- Date of Birth --> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* <!-- Program Selection -->/ */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="program">Program</label>
            <select id="program" name="program" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="" disabled selected>Select your program</option>
              <option value="arts">Arts</option>
              <option value="science">Yoga</option>
              <option value="commerce">Public Speaking</option>
              <option value="commerce">Dance</option>
              <option value="commerce">Presonal Development</option>
            </select>
          </div>

          {/* <!-- Gender --> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="male" className="form-radio h-4 w-4 text-blue-600" required />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="female" className="form-radio h-4 w-4 text-blue-600" required />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="other" className="form-radio h-4 w-4 text-blue-600" required />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          {/* <!-- Address --> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
            <textarea id="address" name="address" rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>

          {/* <!-- Submit Button --> */}
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
          </div>
        </form>


      </div>

      {/* process */}
      <div className='grid grid-cols-1 lg:grid-cols-2 p-10 space-y-10'>
        <div className='space-y-5'>
          <h1 className='text-orange-500 font-bold text-xl md:text-2xl lg:text-4xl'>
            Admission Process for Incoming Students
          </h1>
          <h2 className='font-semibold text-[15px] lg:text-xl'>if you prefer immediate answers</h2>
          {/* icons */}
          <div className='space-y-2'>
            <p className='flex gap-3'>
              <BsFillTelephoneForwardFill size={25} /> 9857049590</p>
            <p className='flex gap-3'>
              <BsFillTelephoneForwardFill size={25} /> 01-5409722</p>

          </div>
        </div>
        <div>
          <ul className='space-y-10'>
            {/* process 1 */}
            <li>
              <div className='flex items-center gap-4 animation-disapp'>
                <div className='size-[50px] rounded-full bg-orange-500 text-center pt-3 text-2xl font-bold text-white'>1</div>
                <h1 className='text-lg font-bold text-orange-400'>Inquire</h1>
              </div>
              <div className='ml-20 text-sm font-semibold'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, laudantium?</p>
              </div>
            </li>
            {/* process 2 */}
            <li>
              <div className='flex items-center gap-4 animation-disapp'>
                <div className='size-[50px] rounded-full bg-orange-500 text-center pt-3 text-2xl font-bold text-white'>2</div>
                <h1 className='text-lg font-bold text-orange-400'>Meeting Interview</h1>
              </div>
              <div className='ml-20 text-sm font-semibold'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, laudantium?</p>
              </div>
            </li>
            {/* process 3 */}
            <li>
              <div className='flex items-center gap-4 animation-disapp'>
                <div className='size-[50px] rounded-full bg-orange-500 text-center pt-3 text-2xl font-bold text-white'>3</div>
                <h1 className='text-lg font-bold text-orange-400'>Pre-evaluation</h1>
              </div>
              <div className='ml-20 text-sm font-semibold'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, laudantium?</p>
              </div>
            </li>
            {/* process 4 */}
            <li>
              <div className='flex items-center gap-4 animation-disapp'>
                <div className='size-[50px] rounded-full bg-orange-500 text-center pt-3 text-2xl font-bold text-white'>4</div>
                <h1 className='text-lg font-bold text-orange-400'>Enrollment</h1>
              </div>
              <div className='ml-20 text-sm font-semibold'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, laudantium?</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Form