import React from "react";
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
          <button type="button">همین الان دانلود کنید</button>
        </div>
        {/* image download */}
        <div className="img-downloads">
          <a href="#">
            <img src="/images/appstore.png" alt="appstore" />
          </a>
          <a href="#">
            <img src="/images/googleplay.png" alt="googleplay" />
          </a>
          <a href="#">
            <img src="/images/mac.png" alt="mac" />
          </a>

          <a href="#">
            <img src="/images/windows.png" alt="windows" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
