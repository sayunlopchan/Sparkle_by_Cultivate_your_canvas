import React from 'react';
import StaticHeader from '../../components/StaticHeader/StaticHeader';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { IoPhonePortrait } from 'react-icons/io5';
import AnimatedComponent from '../../components/Animation/AnimatedComponent';
import AnimatedComponent2 from '../../components/Animation/AnimatedComponent2';
import Useable from '../../components/Useable/Useable';

const Form = () => {
  const admissionProcessData = [
    {
      type: 'heading',
      content: 'Admission Process for Incoming Students',
      className: 'text-orange-500 font-bold text-xl md:text-2xl lg:text-4xl',
    },
    {
      type: 'subheading',
      content: 'If you prefer immediate answers',
      className: 'font-semibold text-[15px] lg:text-xl',
    },
    {
      type: 'icon',
      content: '9857049590',
      icon: <IoPhonePortrait size={25} />,
    },
    {
      type: 'icon',
      content: '01-5409722',
      icon: <BsFillTelephoneForwardFill size={25} />,
    },
  ];

  const processes = [
    {
      step: 1,
      title: 'Inquire',
      description:
        'Contact us for inquiries at admin@sparklenepal.com or +977-9857049590. Expect a reply to learn more about your child.',
    },
    {
      step: 2,
      title: 'Meeting Interview',
      description:
        'Upon receiving your inquiries, one of our teachers will schedule a meeting interview with the parent/ guardian.',
    },
    {
      step: 3,
      title: 'Pre-evaluation',
      description:
        'To evaluate the student, attend class to observe interaction. Schedule a trial class and on-site assessment.',
    },
    {
      step: 4,
      title: 'Enrollment',
      description:
        'Submit a physical or digital copies of the required documents to enroll. You’ll receive an email confirming receipt and next steps.',
    },
  ];

  return (
    <div className="bg-[#CCE0FF] min-h-screen overflow-hidden">
      <StaticHeader />

      {/* heading */}
      <div>
        <Useable
          message={'Your first step'}
          mainText={'Form to fill Your Childrens Life with '}
          subText={'Creativity and Confidence'}
        />
      </div>

      {/* admission form */}
      <div className="max-w-2xl mx-auto bg-white p-8 mt-10 mb-20 shadow-lg rounded-lg">
        {/* heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">Admission Form</h2>

        <form action="#" method="POST">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full_name">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Parents Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parent_name">
              Parent Name
            </label>
            <input
              type="text"
              id="parent_name"
              name="parent_name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="optional"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Program Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="program">
              Program
            </label>
            <select
              id="program"
              name="program"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled selected>
                Select your program
              </option>
              <option value="arts">Arts</option>
              <option value="science">Yoga</option>
              <option value="commerce">Public Speaking</option>
              <option value="commerce">Dance</option>
              <option value="commerce">Personal Development</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* processes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 space-y-10">
        <div className="space-y-5 lg:mt-10">
          {admissionProcessData.map((item, index) => (
            <AnimatedComponent key={index}>
              {item.type === 'heading' && (
                <h1 className={`${item.className} lg:w-[70%]`}>
                  {item.content}
                </h1>
              )}
              {item.type === 'subheading' && (
                <h2 className={`${item.className}`}>
                  {item.content}
                </h2>
              )}
              {item.type === 'icon' && (
                <a
                  href={`tel:${item.content}`}
                  className="flex gap-3 cursor-pointer hover:underline underline-offset-2 w-fit"
                >
                  {item.icon} {item.content}
                </a>
              )}
            </AnimatedComponent>
          ))}
        </div>

        <div>
          <ul className="space-y-10">
            {processes.map((process, index) => (
              <li key={index}>
                <AnimatedComponent2>
                  <div className="flex items-center gap-4">
                    <div className="size-[50px] rounded-full bg-orange-500 text-center pt-3 text-2xl font-bold text-white">
                      {process.step}
                    </div>
                    <h1 className="text-lg font-bold text-orange-400">
                      {process.title}
                    </h1>
                  </div>
                  <div className="ml-[65px] text-sm font-semibold">
                    <p>{process.description}</p>
                  </div>
                </AnimatedComponent2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
