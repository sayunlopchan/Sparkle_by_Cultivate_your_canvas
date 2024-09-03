import React from 'react';
import { NavLink } from 'react-router-dom';
import Root_Drawer from '../Drawer/Root_Drawer';

import './staticHeader.css';
// logo
import logo from '../../assets/logo/Sparkle By CYC.svg';

const NotFoundHeader = () => {
  return (
    <>
      <header className="static-header shadow-lg">
        {/* Logo Section */}
        <div className="static-logo">
          <NavLink to="/">
            <img src={logo} alt="Sparkle logo" className="size-[80px] p-2" />
          </NavLink>
        </div>

        {/* Navigation Links Section */}
        <nav className="static-links max-lg:hidden text-white">
          <NavLink
            to="/about"
            className='static-navlink-link'
          >
            About us
          </NavLink>

          <NavLink
            to="/program"
            className='static-navlink-link'
          >
            Programs
          </NavLink>

          <NavLink
            to="/admissionform"
            className='static-navlink-link'
          >
            Admission Form
          </NavLink>

          <NavLink
            to="/career"
            className='static-navlink-link'
          >
            Career
          </NavLink>

          <NavLink
            to="/gallery"
            className='static-navlink-link'
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
        <div className="static-drawer lg:hidden text-white">
          <Root_Drawer />
        </div>
      </header >
    </>
  )
}

export default NotFoundHeader