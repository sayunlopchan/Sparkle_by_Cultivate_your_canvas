import React from 'react';
import { NavLink } from 'react-router-dom';
import Root_Drawer from '../Drawer/Root_Drawer';

import './staticHeader.css';
import logo from '../../assets/logo/Sparkle By CYC.svg';

const SliderHeader = () => {
  return (
    <>
      <header className="slider-header">
        {/* Logo Section */}
        <div className="static-logo">
          <NavLink to="/">
            <img src={logo} alt="Sparkle logo" className="size-[80px] p-2" />
          </NavLink>
        </div>

        {/* Navigation Links Section */}
        <nav className="static-links max-lg:hidden">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? 'bg-[#ffa500]' : ''}`
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/program"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? 'bg-[#ffa500]' : ''}`
            }
          >
            Programs
          </NavLink>

          <NavLink
            to="/admissionform"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? 'bg-[#ffa500]' : ''}`
            }
          >
            Admission Form
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? 'bg-[#ffa500]' : ''}`
            }
          >
            Career
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? 'bg-[#ffa500]' : ''}`
            }
          >
            Gallery
          </NavLink>
        </nav>

        {/* Contact Button Section */}
        <div className="static-contact max-lg:hidden">
          <NavLink
            to="/contact"
            className="bg-[#ff0000] text-white py-[10px] px-[20px]"
          >
            Contact
          </NavLink>
        </div>

        {/* Drawer for Mobile */}
        <div className="static-drawer lg:hidden">
          <Root_Drawer />
        </div>
      </header>
    </>
  );
};

export default SliderHeader;
