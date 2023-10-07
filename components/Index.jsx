import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

const Index = ({ offer }) => {
  return (
    <>
      <div className="container-fluid front-page" id="home">
        <div className="container">
          <div className="row pt-3">
            <div className="col-4 fw-bold">Logo</div>
            <div className="d-flex col-8 justify-content-between menu-holder">
              {/* <button className="btn menu-bar d-none">
                <AiOutlineMenu />
              </button> */}
              <div className="d-flex col-8 justify-content-between menu-div">
                <Link className="mx-1 fw-bold menu" to="/">
                  Home
                </Link>
                <a href="#offer" className="mx-1 fw-bold menu">
                  Services
                </a>
                <a href="#exper" className="mx-1 fw-bold menu">
                  About
                </a>
                <a href="#footer" className="mx-1 fw-bold menu">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 mx-auto" style={{ width: "45vw" }}>
            <h2 className="text-center">
              Brighten your day with solar energy,
            </h2>
            <p className="text-center">
              Harness the power of the sun with our experxt solar panel
              installations. Light up your life, the sustainable way
            </p>
          </div>
          <div
            className="row d-flex gap-5 mx-auto mt-5 btn-control"
            style={{ width: 400 }}
          >
            <div className="btn btn-bg col-6 menu-btn" style={{ width: 150 }}>
              <span className="started get">Get Started</span>
            </div>
            <div className="btn btn-color menu-btn col-6" style={{ width: 150 }}>
              <span className="explore get">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
