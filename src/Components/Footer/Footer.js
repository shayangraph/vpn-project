import React from "react";
import "./Footer.css";
// import icons
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    //   main footer
    <div className="container-footer">
      <div className="footer-top">
        <div className="services">
          <h1>خدمات</h1>
          <ul>
            <li>برنامه نصب ویندوز</li>
            <li>برنامه نصب ویندوز</li>
            <li>برنامه نصب ویندوز</li>
            <li>برنامه نصب ویندوز</li>
            <li>برنامه نصب ویندوز</li>
          </ul>
        </div>
        <div className="about">
          <h1>خدمات</h1>
          <p>
            شما با وی پی ان بنه می توانید به راحتی و امنیت بالا و با هزینه کم به
            تمام سرور های جهان دست یابید و به موفقیت های خود و بدون محدودیت زیرا
            شما لایق بهترین ها هستیتدشما با وی پی ان بنه می توانید به راحتی و
            امنیت بالا و با هزینه کم به تمام سرور های جهان دست یابید و به موفقیت
            های خود و بدون محدودیت زیرا شما لایق بهترین ها هستیتدشما با وی پی ان
            بنه می توانید به راحتی و امنیت بالا و با هزینه کم به تمام سرور های
            جهان دست یابید و به موفقیت های خود و بدون محدودیت زیرا شما لایق
            بهترین ها هستیتدشما با وی پی ان بنه می توانید به راحتی و امنیت بالا
            و با هزینه کم به تمام سرور های جهان دست یابید و به موفقیت های خود و
            بدون محدودیت زیرا شما لایق بهترین ها هستیتد
          </p>
        </div>
        <div className="social-media">
          <h1>ما را دنبال کنید</h1>
          {/* icons */}
          <div className="images-footer">
            <FaFacebook />
            <AiFillTwitterCircle />
            <AiFillYoutube className="youtube" />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      {/* <hr/> */}
      <div className="copyright">
        <div className="children-copyright">
          <p className="para">
            این سایت تحت مالکیت گراف و ادولف
            <BiHappyHeartEyes className="eyes"/>
          </p>

          <div className="logo-copyright">
            <img src="/images/graph.png" alt="graph" />
            <img src="/images/adolf.png" alt="adolf" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
