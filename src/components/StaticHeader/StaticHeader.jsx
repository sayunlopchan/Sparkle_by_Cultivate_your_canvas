import React from 'react'
import { NavLink } from 'react-router-dom'
import Root_Drawer from '../Drawer/Root_Drawer'

import './staticHeader.css'
// logo
import logo from '../../assets/logo/Sparkle By CYC.svg'

const StaticHeader = () => {
  return (
    <>
      <header className='static-header '>
        <div className='static-logo'>
          <NavLink to={"/"}>
            <img src={logo} alt="Sparkle logo" className='size-[80px]' />
          </NavLink>
        </div>

        <nav className="static-links">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/program"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            Admission Form
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            Career
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `root-navlink-link ${isActive ? "active-link" : ""}`
            }
          >
            Gallery
          </NavLink>
        </nav>

        <div className='static-contact'>
          <NavLink
            to="/contact"
            className={"bg-[#ff0000] text-white py-[10px] px-[20px] max-lg:hidden"}
          >
            Contact
          </NavLink>
        </div>
        <div className="static-drawer lg:hidden">
          <Root_Drawer />
        </div>
      </header>
    </>
  )
}

export default StaticHeader