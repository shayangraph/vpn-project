//import
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="container">
      {/* navbar */}
      <Navbar />
      {/* title website */}
      <div className="slider-container">
        <div className="title-slider">
          <h1>به راحتی از مرز ها عبور کنید</h1>
        </div>
        {/* button download */}
        <div className="button-download">
          <Link to="/">
            <button type="button">همین الان دانلود کنید</button>
          </Link>
        </div>
        {/* image download */}
        <div className="img-downloads">
          <Link to="/">
            <img src="/images/appstore.png" alt="appstore" />
          </Link>
          <Link to="/">
            <img src="/images/googleplay.png" alt="googleplay" />
          </Link>
          <Link to="/">
            <img src="/images/mac.png" alt="mac" />
          </Link>
          <Link to="/">
            <img src="/images/windows.png" alt="windows" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
