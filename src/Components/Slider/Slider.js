import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="container">
      {/* navbar */}
      <Navbar />
      {/* title button and downloads in slider */}
      <div className="slider-container">
        <div className="title-slider">
          <h1>به راحتی از مرز ها عبور کنید</h1>
        </div>
        <div className="button-download">
          <button type="button">همین الان دانلود کنید</button>
        </div>
        <div className="img-downloads">
          <img src="/images/appstore.png" alt="appstore" />
          <img src="/images/googleplay.png" alt="googleplay" />
          <img src="/images/mac.png" alt="mac" />
          <img src="/images/windows.png" alt="windows" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
