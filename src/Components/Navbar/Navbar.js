import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PopUp from '../PopUp/PopUp'
// react icons
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";



const Navbar = () => {
  // menu responsive method
  const [menu, setMenu] = useState(false);

  const handlemenu = () => {
    setMenu(!menu);
  };
  const closemobilemenu = () => {
    setMenu(false);
  };
  //pop up method
  const [popup, setPopup] = useState(true);
  const Handlepopup = () => {
    setPopup(!popup);
  };

  return (
    //Navbar
    <nav>
      {/* icons bars */}
      <FaBars className="Bars-navbar" onClick={handlemenu} />

      <div className={menu ? "responsive-menu active" : "responsive-menu"}>
        {/* icons  times */}
        <FaTimes className="Times-navbar" onClick={handlemenu} />
        {/* button */}
        <div className="button">
          <button
            className="button-enter"
            type="button"
            onClick={closemobilemenu}
          >
            <Link className="enter" to="/sign-in">
              ورود
            </Link>
          </button>
          <button
            className="button-special"
            type="button"
            onClick={Handlepopup}
          >
            <Link className="special" to="/" >
              اشتراک ویژه
            </Link>
            {/* PopUp section */}
            {
              popup?null:<PopUp Handlepopup={Handlepopup} popup={popup}/>
            }
          </button>
        </div>
        {/* Link */}
        <div className="navlink">
          {" "}
          <Link className="Link" to="/" onClick={closemobilemenu}>
            صفحه اصلی
          </Link>
          <Link className="Link" to="/product" onClick={closemobilemenu}>
            محصولات
          </Link>
          <Link className="Link" to="/about" onClick={closemobilemenu}>
            درباره ما
          </Link>
          <Link className="Link" to="/contact" onClick={closemobilemenu}>
            تماس با ما
          </Link>
        </div>
      </div>
      {/* logo */}
      <div className="logo">
        <Link className="enter" to="/">
          <img src="images/Baneh-vpn.png" alt="vpn" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
