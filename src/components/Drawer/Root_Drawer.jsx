import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// react icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// logo
import logo from '../../assets/logo/Sparkle By CYC.svg';



const socialLinks = [
  { href: "https://www.facebook.com/sparkle.cyc", icon: <FaFacebook size={30} />, name: "Facebook" },
  { href: "https://www.instagram.com/sparkle__kids_academy/", icon: <FaInstagram size={30} />, name: "Instagram" },
  { href: "", icon: <FaWhatsapp size={30} />, name: "Whatsapp" }
];

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About us" },
  { path: "/program", name: "Program" },
  { path: "/form", name: "Admission form" },
  { path: "/career", name: "Career" },
  { path: "/gallery", name: "Gallery" },
  { path: "/contact", name: "Contact us" },
];

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
        className={`bg-white text-black fixed top-0 right-0 h-[100vh] w-[70vw] sm:w-[300px] transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* logo */}
        <div className="flex justify-center items-center p-2">
          <div className="mx-auto">
            <img src={logo} alt="Sparkle logo" className='w-[80px]' />
          </div>
        </div>

        {/* Sidebar content here */}
        <div>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `block py-2 px-4 border-b duration-500 ${isActive ? "bg-orange-500 text-white" : "hover:bg-gray-300"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Social links */}
        <div className="social-links text-center space-y-3 mt-6">
          <h1>Follow us </h1>
          <div className="flex justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Close button */}
        <div className="flex justify-center items-center mt-10">
          <button onClick={toggleDrawer}>
            <IoClose size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root_Drawer;
