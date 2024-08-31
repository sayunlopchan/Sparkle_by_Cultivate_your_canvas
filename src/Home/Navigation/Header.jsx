import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo/Sparkle By CYC.svg';

// style
import './header.css';

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

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  // Toggle drawer
  const toggleDrawer = () => setIsOpen(!isOpen);

  // Handle scrolling for header visibility
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY === 0 || scrollY < 450) {
      setShowHeader(false);
    } else if (scrollY >= 450) {
      setShowHeader(true);
    }
    if (scrollY < 400) {
      setIsOpen(false); // Close drawer if scrolled back up
    }
  };

  // Close drawer when clicking outside
  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={`root-header ${showHeader ? "translate-y-[100px]" : "-translate-y-full"}`}>
      <div className="root-header-logo">
        <NavLink to={"/"}>
          <img src={logo} alt="sparkle logo" className="size-[80px] p-2" />
        </NavLink>
      </div>

      <nav className="space-x-[10px] max-lg:hidden">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `root-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div>
        <NavLink
          to="/contact"
          className="bg-[#ff0000] text-white py-[10px] px-[20px] max-lg:hidden"
        >
          Contact
        </NavLink>
      </div>

      {/* Drawer Toggle for small screens */}
      <div className="lg:hidden">
        <div onClick={toggleDrawer} className="p-2 hover:cursor-pointer">
          <RxHamburgerMenu size={30} />
        </div>
      </div>

      {/* Drawer and Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 h-[100vh]"></div>}

      <div
        ref={drawerRef}
        className={`bg-white text-black fixed top-0 right-0 h-[100vh] w-[70vw] sm:w-[300px] transform transition-transform duration-300 z-50 overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ overflowY: "auto", overflowX: "hidden" }} 
        <div className="flex justify-center items-center p-2">
        <div className="mx-auto">
          <img src={logo} alt="Sparkle logo" className='w-[80px]' />
        </div>
      </div>

      <div>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `block py-2 px-4 border-b duration-500 ${isActive ? "bg-orange-500 text-white" : "hover:bg-gray-300"}`
            }
            onClick={() => setIsOpen(false)} // Close drawer on link click
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Social Links */}
      <div className="social-links text-center space-y-3 mt-6">
        <h1>Follow us</h1>
        <div className="flex justify-center gap-3">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} aria-label={link.name}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Close Drawer Button */}
      <div className="flex justify-center items-center mt-10">
        <button onClick={toggleDrawer}>
          <IoClose size={40} />
        </button>
      </div>
    </div>
    </header >
  );
};

export default Header;
