import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-primary " id="footer">
        <div className="row d-flex flex-wrap gap-4">
          <div className="col-sm-4 text-center">
            <h1>Logo</h1>
            <p className="footer-p mx-auto">
              Brighten your day with solar energy, secure your night with CCTV,
              and fortify your perimeter with electric fencing. We've got you
              covered.
            </p>
          </div>
          <div className="col-sm-3 d-flex gap-3">
            <div className="d-flex gap-2 flex-column mx-auto">
              <span>Services</span>
              <span>Wiring</span>
              <span>Installations</span>
              <span>Maintenance</span>
            </div>
            <div className="d-flex gap-2 flex-column mx-auto">
              <span>Resources</span>
              <span>About Us</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
          <div className="col-sm-3 text-center d-flex flex-column gap-2">
            <span>Subscribe to our Newsletter</span>
            <div className="closedinput">
              <input
                type="email"
                placeholder="Email Address"
                className="email-input"
              />
              <button className="sub">Subscribe</button>
            </div>
            <div className="d-flex justify-content-center  gap-2">
              <div className="rounded social">
                <AiOutlineInstagram />
              </div>
              <div className="rounded social">
                <FaFacebookF />
              </div>
              <div className="rounded social">
                <RiTwitterXFill />
              </div>
              <div className="rounded social">
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <span className="text-center footer-span">
            Copyright ©
            <a
              href="https://twitter.com/AbiolaTimothy10"
              className="text-white text-decoration-none"
            >
              Abiola Timothy
            </a>
            2023
          </span>
        </div>
        <a href="#home"><BsFillArrowUpSquareFill/></a>
      </div>
    </>
  );
};

export default Footer;
