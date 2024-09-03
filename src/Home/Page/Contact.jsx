import React from "react";
import StaticHeader from "../../components/StaticHeader/StaticHeader";


// react ioncs
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

// emailjs api
import emailjs from 'emailjs-com';

// npms
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";

const Contact = () => {

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('*Full Name Required*'),
      email: Yup.string().email('Invalid email address').required('Email is required!'),
      subject: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('*Subject is Required*'),
      message: Yup.string()
        .required('*Message is Required*'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs.send(
        'SparklebyCYC', // Replace with your EmailJS Service ID
        'sparkle_by_cyc_template',  // Replace with your EmailJS Template ID
        {
          fullName: values.fullName,
          email: values.email,
          subject: values.subject,
          message: values.message
        },
        'wOoJP1gd0_16es-iH' // Replace with your EmailJS User ID
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Message sent successfully')
          resetForm(); // Reset the form after successful submission
        })
        .catch((error) => {
          console.error('Failed to send message:', error);
          toast.error('Failed to send message. Please try again')
        });
    },
  });

  return (
    <div className="w-[100vw]">
      <StaticHeader />

      {/* heading */}
      <div className="text-center space-y-5 p-10 bg-gray-300">

        <div className="relative h-[200px]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-red-500 opacity-50 blur-2xl"></div>
          <div className="absolute z-20 mt-10 w-full space-y-5">
            <span className="p-2 bg-red-300 text-black text-sm font-[500] rounded-full border border-b-2 border-black">
              Have Questions?
            </span>
            <div className="font-semibold text-[24px]">
              <h2>Come and visit our office</h2>
              <h3>Know us More!</h3>
            </div>
          </div>
        </div>
      </div>

      {/* contact boxes */}
      <div className="flex flex-wrap gap-10 justify-center py-10">
        <a href="https://wa.me/9857049590" target="_blank" className="w-[300px]">
          <div className="border border-b-4 border-black rounded-lg p-5 gap-5 flex flex-col items-center justify-center cursor-pointer">
            <FaWhatsapp className="bg-red-200 size-[60px] p-2 rounded-full" />
            <span className="font-semibold">9857049590</span>
          </div>
        </a>
        <a href="mailto:sparkle.cyc@gmail.com" className="w-[300px]">
          <div className="border border-b-4 border-black rounded-lg p-5 gap-5 flex flex-col items-center justify-center cursor-pointer">
            <IoMailOutline className="bg-red-200 size-[60px] p-2 rounded-full" />
            <span className="font-semibold">sparkle.cyc@gmail.com</span>
          </div>
        </a>
        <a href="tel:01-5409722" className="w-[300px]">
          <div className="border border-b-4 border-black rounded-lg p-5 gap-5 flex flex-col items-center justify-center cursor-pointer">
            <BsFillTelephoneForwardFill className="bg-red-200 size-[60px] p-2 rounded-full" />
            <span className="font-semibold">01-5409722</span>
          </div>
        </a>
      </div>

      {/* map & form */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6204231622387!2d85.31368797459079!3d27.667213176205504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190040550b05%3A0x635c1e5aa56534f8!2sSparkle%20By%20CYC!5e0!3m2!1sen!2snp!4v1724823461460!5m2!1sen!2snp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] lg:h-full py-10"
          ></iframe>
        </div>

        {/* Contact form */}
        <div className="py-10 my-10">
          <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
            <form onSubmit={formik.handleSubmit} method="POST" className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullName"
                  placeholder="Your Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  {...formik.getFieldProps('fullName')}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500">{formik.errors.fullName}</div>
                ) : null}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  {...formik.getFieldProps('subject')}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="text-red-500">{formik.errors.subject}</div>
                ) : null}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  {...formik.getFieldProps('message')}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500">{formik.errors.message}</div>
                ) : null}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
