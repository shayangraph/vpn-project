import React from "react";
import { Link } from "react-router-dom";
import "./Sign_in.css";

const Sign_in = () => {
  return (
    <div className="signin-container">
      <div className="signin-box2">
        <div className="children-box">
          <h1>ثبت نام</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و م
          </p>
          <button type="submit">
            <Link to="/sign-up" className="sign-in2-link">
              ثبت نام
            </Link>
          </button>
        </div>
      </div>
      <div className="signin-box">
        <form>
          <h1>ورود به سایت</h1>
          <div className="form-inputs">
            <label>نام کاربری</label>
            <input
              type="text"
              name="username"
              placeholder="نام کاربری خود را وارد کنید"
            />
            {/* <p>نام کاربری خود را اشتباه وارد کرده اید</p> */}
          </div>

          <div className="form-inputs">
            <label>کلمه عبور</label>
            <input
              type="password"
              name="password"
              placeholder="کلمه عبور خود را وارد کنید"
            />
            {/* <p> کلمه عبور خود را اشتباه وارد کرده اید</p> */}
          </div>
          <p className="forgot">کلمه عبور خود را فراموش کرده اید؟ </p>
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
