import React from 'react';
import StaticHeader from '../../components/StaticHeader/StaticHeader';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { IoPhonePortrait } from 'react-icons/io5';
import AnimatedComponent from '../../components/Animation/AnimatedComponent';
import AnimatedComponent2 from '../../components/Animation/AnimatedComponent2';
import Useable from '../../components/Useable/Useable';




// form
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const Form = () => {



  const formik = useFormik({
    initialValues: {
      fullName: '',
      parentName: '',
      email: '',
      number: '',
      dob: '',
      programSelected: '',
      gender: '',
      address: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('*Required*'),
      parentName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('*Required*'),
      email: Yup.string().email('Invalid email address').notRequired(),
      number: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits')
        .required('Phone number is required'),
      dob: Yup.date().required('Date of birth is required'),
      programSelected: Yup.string().required('Please select a program'),
      gender: Yup.string().required('Gender is required'),
      address: Yup.string().required('Address is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // Redirect to Google Form after submission
      window.location.href = 'https://forms.gle/your-google-form-url';
    },
  });

  return (
    <div className="bg-[#CCE0FF] min-h-screen overflow-hidden">
      <StaticHeader />

      {/* Banner */}
      <div>
        <Useable
          message={'Your first step'}
          mainText={'Form to fill Your Children Life with '}
          subText={'Creativity and Confidence'}
        />
      </div>

      {/* admission form */}
      <div className="max-w-2xl mx-auto bg-white p-8 mt-10 mb-20 shadow-lg rounded-lg">
        {/* heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">Admission Form</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('fullName')}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500">{formik.errors.fullName}</div>
            ) : null}
          </div>

          {/* Parent's Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parentName">
              Parent Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('parentName')}
            />
            {formik.touched.parentName && formik.errors.parentName ? (
              <div className="text-red-500">{formik.errors.parentName}</div>
            ) : null}
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address <span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Optional"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('number')}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="text-red-500">{formik.errors.number}</div>
            ) : null}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth <span className='text-red-500'>*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('dob')}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="text-red-500">{formik.errors.dob}</div>
            ) : null}
          </div>

          {/* Program Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="programSelected">
              Program <span className='text-red-500'>*</span>
            </label>
            <select
              id="programSelected"
              name="programSelected"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('programSelected')}
            >
              <option value="" disabled>
                Select your program <span className='text-red-500'>*</span>
              </option>
              <option value="arts">Arts</option>
              <option value="yoga">Yoga</option>
              <option value="publicSpeaking">Public Speaking</option>
              <option value="dance">Dance</option>
              <option value="personalDevelopment">Personal Development</option>
            </select>
            {formik.touched.programSelected && formik.errors.programSelected ? (
              <div className="text-red-500">{formik.errors.programSelected}</div>
            ) : null}
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
                  checked={formik.values.gender === 'male'}
                  onChange={() => formik.setFieldValue('gender', 'male')}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio h-4 w-4 text-blue-600"
                  checked={formik.values.gender === 'female'}
                  onChange={() => formik.setFieldValue('gender', 'female')}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="text-red-500">{formik.errors.gender}</div>
            ) : null}
          </div>


          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address <span className='text-red-500'>*</span>
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              {...formik.getFieldProps('address')}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500">{formik.errors.address}</div>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
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
                    <h1 className="text-2xl font-bold text-orange-400">
                      {process.title}
                    </h1>
                  </div>
                  <div className="ml-[65px] mt-5 text-lg">
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
