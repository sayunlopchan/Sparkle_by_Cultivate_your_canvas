import React from "react";
import StaticHeader from "../../components/StaticHeader/StaticHeader";

// social icons
import { FaWhatsapp } from "react-icons/fa";


import { IoMailOutline } from "react-icons/io5";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-[100vw]">
      <StaticHeader />


      {/* heading */}
      <div className=" text-center space-y-5 p-10 bg-gray-300">
        <div className="relative h-[200px]">
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-red-500 opacity-50 blur-2xl">
          </div>
          <div className="absolute z-20 mt-10 w-full space-y-5">
            <span className="p-2 bg-red-300 text-black text-sm font-[500] rounded-full border border-b-2 border-black">
              Have Questions?
            </span>

            <div className="font-semibold text-[24px]">
              <h1>Come and visit our office</h1>
              <h2>Know us More!</h2>
            </div>
          </div>
        </div>
      </div>


      {/* box */}
      <div className="flex flex-wrap gap-10 justify-center py-10">
        {/* WhatsApp Box */}
        <a href="tel:9857049590" className="w-[300px]">
          <div className="border border-b-4 border-black rounded-lg p-5 gap-5 flex flex-col items-center justify-center cursor-pointer">
            <FaWhatsapp className="bg-red-200 size-[60px] p-2 rounded-full" />
            <span className="font-semibold">9857049590</span>
          </div>
        </a>

        {/* Email Box */}
        <a href="mailto:sparkle.cyc@gmail.com" className="w-[300px]">
          <div className="border border-b-4 border-black rounded-lg p-5 gap-5 flex flex-col items-center justify-center cursor-pointer">
            <IoMailOutline className="bg-red-200 size-[60px] p-2 rounded-full" />
            <span className="font-semibold">sparkle.cyc@gmail.com</span>
          </div>
        </a>

        {/* Telephone Box */}
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
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] lg:h-full py-10">

          </iframe>
        </div>
        {/* Contact from */}
        <div className="py-10 my-10">
          <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <form action="#" method="POST" className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Your Message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
