import React from 'react'
import { NavLink } from 'react-router-dom'
import Root_Drawer from '../Drawer/Root_Drawer'

import './staticHeader.css'

import logo from '../../assets/logo/Sparkle By CYC.svg'

const SliderHeader = () => {
  return (
    <>
      <header className='slider-header '>
        <div className='static-logo'>
          <NavLink to={"/"}>
            <img src={logo} alt="Sparkle logo" className='size-[80px] p-2' />
          </NavLink>
        </div>

        <nav className="static-links">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/program"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
            }
          >
            Admission Form
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
            }
          >
            Career
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `static-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
            }
          >
            Gallary
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

export default SliderHeader