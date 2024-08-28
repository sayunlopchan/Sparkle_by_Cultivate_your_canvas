import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// react icon
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

// social icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// import { Button } from "@material-tailwind/react";

const Root_Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY < 400) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Button to toggle the drawer */}
      <div onClick={toggleDrawer} className="p-2 hover:cursor-pointer">
        <RxHamburgerMenu size={30} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 h-[100vh]"></div>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`bg-white text-black fixed top-0 right-0 h-[100vh] w-[70vw] sm:w-[300px]  transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full hidden"
          } `}
      >
        {/* logo */}
        <div className=" flex justify-center items-center p-2">
          <div className="w-[200px]">logo</div>
        </div>

        {/* Sidebar content here */}
        <div className=''>
          <NavLink
            to="/"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            About us
          </NavLink>

          <NavLink
            to="/program"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            Program
          </NavLink>

          <NavLink
            to="/contact"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            Contact us
          </NavLink>
        </div>

        {/* social links */}
        <div className="text-center space-y-3">
          <h1>Follow us </h1>
          <div className="flex justify-center gap-3">
            <a href="https://www.facebook.com/sparkle.cyc">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/sparkle__kids_academy/">
              <FaInstagram size={30} />
            </a>
            <a href="">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
        {/* close button */}
        <div className="flex justify-center items-center mt-10">
          <button onClick={toggleDrawer} className=" ">
            <IoClose size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root_Drawer;
