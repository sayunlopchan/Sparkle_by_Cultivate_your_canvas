import React from "react";
import { NavLink } from "react-router-dom";
// styles
import './footer.css'

// logo
import CreaterCompanyLogo from "../../assets/logo/cobrand-secondary.png"
import logo from "../../assets/logo/SPARKLE_LOGO.png"

// icon 
import { IoMailOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

// social icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// form
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";





const Footer = () => {



  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('email is required')
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      toast.success('Thank you for subscribing')
    },
  });

  return (
    <div className="footer-container ">
      <div className="footer-content-container">

        <div className="footer-content">

          {/* detail */}
          <div className="footer-content-item footer-details-container">

            <img src={logo} alt="logo" className="h-[140px]" />

            <p className="footer-p">
              <span className="quote">"</span>
              Empowering Tomorrow's <br /> Sparkling Leaders Today
              <span className="quote">"</span>
            </p>

            <div className="footer-icon-container ">
              <a href="https://www.facebook.com/sparkle.cyc"><FaFacebook size={30} /></a>
              <a href="https://www.instagram.com/sparkle__kids_academy/"><FaInstagram size={30} /></a>
              <a href=""><FaWhatsapp size={30} /></a>
            </div>



          </div>

          {/* Quick links */}
          <div className="footer-content-item footer-Qlinks-container">
            <h2 className="footer-heading underline underline-offset-4">Quick Links</h2>
            <ul className="footer-link-container">
              <li>
                <NavLink
                  className={"footer-link"}
                  to={'/about'}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"footer-link"}
                  to={'/program'}>
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"footer-link"}
                  to={'/form'}>
                  Addmission form
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"footer-link"}
                  to={'/career'}>
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"footer-link"}
                  to={'/contact'}>
                  Contact
                </NavLink>
              </li>
            </ul>

          </div>


          {/* map */}
          <div className="footer-content-item footer-map-container ">
            <div className="footer-map ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6204231622387!2d85.31368797459079!3d27.667213176205504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190040550b05%3A0x635c1e5aa56534f8!2sSparkle%20By%20CYC!5e0!3m2!1sen!2snp!4v1724823461460!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="map">
              </iframe>
            </div>
          </div>

          {/* news letter */}
          <div className="footer-content-item footer-NandTC-container">
            <div className="newsletter-container">
              <h2 className="footer-heading underline underline-offset-4 mb-1">Newsletter</h2>
              <form onSubmit={formik.handleSubmit}>
                <input
                  className="input-box"
                  type="text"
                  placeholder="example@gmail.com"
                  {...formik.getFieldProps('email')}
                />
                <div className="btn-container">
                  <button type="submit" >subscribe</button>
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-white">{formik.errors.email}</div>
                ) : null}
              </form>
            </div>
            <ul className="footer-contacts-container">
              <li className="contact-link">
                <MdLocationPin size={25} />
                <a href="https://maps.app.goo.gl/RrrUfgmmvpDQcETF9">Lalitpur-5, Manbhawan</a>
              </li>

              <li className="contact-link">
                <IoMailOutline size={25} />
                <a href="mailto:sparkle.cyc@gmail.com">sparkle.cyc@gmail.com</a>
              </li>

              <li className="contact-link">
                <BsFillTelephoneForwardFill size={20} />
                <span className="space-x-1">
                  <a href="tel:9857049590">9857049590</a>
                  ,
                  <a href="tel:01-5409722">01-5409722</a>
                </span>
              </li>
            </ul>
          </div>
        </div>


        <hr />
        {/*footer-footer */}
        <div className="footer-footer">
          <div className="creator-container">
            <h2>Powered by</h2>
            <a href="https://cobrand.com.np" target="_blank">
              <img src={CreaterCompanyLogo} alt="Author Company logo" className="creator-logo" />
            </a>
          </div>

          <p className="license">© Copyright 2024 Cultivate your canvas • All Rights Reserved</p>
        </div>
        {/*  */}
      </div>
    </div >
  );
};

export default Footer;