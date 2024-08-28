import React from "react";
import { NavLink } from "react-router-dom";
import Root_Drawer from "../../components/Drawer/Root_Drawer";


// style
import './header.css'

const Header = () => {
  const [showHeader, setShowHeader] = React.useState(false);

  //when screen scroll > 400px show header
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY === 0) {
      setShowHeader(false);
    } else if (scrollY > 0 && scrollY < 450) {
      setShowHeader(false);
    } else if (scrollY >= 450) {
      setShowHeader(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <header
      className={`root-header ${showHeader ? "translate-y-[100px]" : "-translate-y-full "
        }`}
    >
      <div className="root-header-logo">
        <NavLink to={"/"}>LOGO</NavLink>
      </div>

      <nav className="space-x-[10px] max-lg:hidden">
        <NavLink
          to="about"
          className={({ isActive }) =>
            `root-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
          }
        >
          About us
        </NavLink>

        <NavLink
          to="program"
          className={({ isActive }) =>
            `root-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
          }
        >
          Programs
        </NavLink>
        <NavLink
          to="form"
          className={({ isActive }) =>
            `root-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
          }
        >
          Admission Form
        </NavLink>
        <NavLink
          to="career"
          className={({ isActive }) =>
            `root-navlink-link ${isActive ? "bg-[#ffa500]" : ""}`
          }
        >
          Career
        </NavLink>
      </nav>

      <div>
        <NavLink
          to="contact"
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
