import React from "react";

// logo
import CreaterCompanyLogo from "../../assets/logo/cobrand-secondary.png"
import logo from "../../assets/logo/Sparkle By CYC.svg"

// icon 
import { IoMailOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

// social icons
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// styles
import './footer.css'

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/program" },
  { name: "Admission Form", path: "/form" },
  { name: "Career", path: "/career" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
];

const socialIcons = [
  { icon: FaFacebook, link: "https://www.facebook.com/sparkle.cyc" },
  { icon: FaInstagram, link: "https://www.instagram.com/sparkle__kids_academy/" },
  { icon: FaWhatsapp, link: "#" }
];

const contacts = [
  {
    icon: MdLocationPin,
    label: "Lalitpur-5 Manbhawan",
    link: "https://maps.app.goo.gl/RrrUfgmmvpDQcETF9"
  },
  {
    icon: IoMailOutline,
    label: "sparkle.cyc@gmail.com",
    link: "mailto:sparkle.cyc@gmail.com"
  },
  {
    icon: BsFillTelephoneForwardFill,
    label: "9857049590",
    link: "tel:9857049590"
  },
  {
    icon: BsFillTelephoneForwardFill,
    label: "01-5409722",
    link: "tel:01-5409722"
  }
];

const locations = [
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6204231622387!2d85.31368797459079!3d27.667213176205504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190040550b05%3A0x635c1e5aa56534f8!2sSparkle%20By%20CYC!5e0!3m2!1sen!2snp!4v1724823461460!5m2!1sen!2snp"
  }
];

const termsConditions = [
  { name: "Privacy Policy", link: "#" },
  { name: "Terms of Service", link: "#" }
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-content">

          {/* detail */}
          <div className="footer-content-item footer-details-container">
            <img src={logo} alt="logo" className="size-[90px]" />

            <p className="footer-p">
              <span className="quote">"</span>
              Empowering Tomorrow's <br /> Sparkling Leaders Today
              <span className="quote">"</span>
            </p>

            <div className="footer-icon-container">
              {socialIcons.map(({ icon: Icon, link }, index) => (
                <a href={link} key={index}><Icon size={30} /></a>
              ))}
            </div>

            <ul className="footer-contacts-container">
              {contacts.map((contact, index) => (
                <li className="contact-link" key={index}>
                  <contact.icon size={25} />
                  <a href={contact.link}>{contact.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="footer-content-item footer-Qlinks-container">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-link-container">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink className="footer-link" to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* map */}
          <div className="footer-content-item footer-map-container">
            {locations.map((location, index) => (
              <div className="footer-map" key={index}>
                <iframe
                  src={location.src}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.label}
                />
              </div>
            ))}
          </div>

          {/* newsletter and Terms & Conditions */}
          <div className="footer-content-item footer-NandTC-container">
            <div className="newsletter-container">
              <h2 className="footer-heading">Newsletter</h2>
              <form action="">
                <input className="input-box" type="text" placeholder="example@gmail.com" />
                <div className="btn-container">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>

            <div className="footer-TaC">
              <h3>Terms and Conditions</h3>
              {termsConditions.map((term, index) => (
                <a href={term.link} key={index}>{term.name}</a>
              ))}
            </div>
          </div>
        </div>

        <hr />

        {/* footer-footer */}
        <div className="footer-footer">
          <div className="creator-container">
            <h2>Powered by</h2>
            <img src={CreaterCompanyLogo} alt="Author Company logo" className="creator-logo" />
          </div>
          <p className="license">© Copyright 2024 Cultivate your canvas • All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
