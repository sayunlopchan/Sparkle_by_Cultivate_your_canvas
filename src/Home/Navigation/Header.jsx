import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Root_Drawer from "../../components/Drawer/Root_Drawer";

import logo from '../../assets/logo/Sparkle By CYC.svg';

// style
import './header.css';

// Define the links in an array
const links = [
  { path: "/about", label: "About us" },
  { path: "/program", label: "Programs" },
  { path: "/form", label: "Admission Form" },
  { path: "/career", label: "Career" },
  { path: "/gallery", label: "Gallery" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`root-header fixed top-0 left-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="root-header-logo">
        <NavLink to={"/"}>
          <img src={logo} alt="sparkle logo" className="size-[80px] p-2" />
        </NavLink>
      </div>

      <nav className="space-x-[10px] max-lg:hidden">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `root-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div>
        <NavLink
          to="/contact"
          className={"bg-[#ff0000] text-white py-[10px] px-[20px] max-lg:hidden"}
        >
          Contact
        </NavLink>
      </div>

      <div className="lg:hidden">
        <Root_Drawer />
      </div>
    </header>
  );
};

export default Header;
