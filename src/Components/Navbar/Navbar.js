import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    //Navbar
    <nav>
     <div className="responsive-menu">
        {/* button */}
      <div className="button">
        <button className="button-enter" type="button">
          <Link className="enter" to="/sign-in">
            ورود
          </Link>
        </button>
        <button className="button-special" type="button">
          <Link className="special" to="/">
            اشتراک ویژه
          </Link>
        </button>
      </div>
      {/* Link */}
      <div className="navlink">
        {" "}
        <Link className="Link" to="/">
          صفحه اصلی
        </Link>
        <Link className="Link" to="/product">
          محصولات
        </Link>
        <Link className="Link" to="/about">
          درباره ما
        </Link>
        <Link className="Link" to="/contact">
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
