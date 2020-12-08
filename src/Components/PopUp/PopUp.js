// import 
import React from "react";
import { IoCheckbox } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./PopUp.css";





function PopUp(props) {
  return (
    <div className="container-popup">
      <div className="children-popup">
        <h1>اکانت عادی</h1>
        <ul>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
        </ul>
        <button type="button" onClick={props.Handlepopup}>
          <Link to="/" className="link-button">
            خرید آنلاین
          </Link>
        </button>
      </div>
      <div className="children-popup">
        <h1>اکانت پریمیوم</h1>
        <ul>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
        </ul>
        <button type="button" onClick={props.Handlepopup}>
          <Link to="/" className="link-button">
            خرید آنلاین
          </Link>
        </button>
      </div>
      <div className="children-popup">
        <h1>اکانت فوق پریمیوم</h1>
        <ul>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
          <li>
            <IoCheckbox className="icons-popup" color="#2ecc71" />
            پشتیبانی از زبان فارسی
          </li>
        </ul>
        <button type="button" onClick={props.Handlepopup}>
          <Link to="/" className="link-button">
            خرید آنلاین
          </Link>
        </button>
      </div>
    </div>
  );
}

export default PopUp;
