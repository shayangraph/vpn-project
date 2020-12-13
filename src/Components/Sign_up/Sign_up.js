import React from "react";
import "./Sign_up.css";
import { Link } from "react-router-dom";

const Sign_up = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="signup-box2">
          <div className="children-box-signup">
            <h1>ورود به سایت</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و م
            </p>
            <button type="submit">
              <Link to="/sign-in" className="sign-up2-link">
                ورود
              </Link>
            </button>
          </div>
        </div>
        <div className="signup-box">
          <form>
            <h1>ورود به سایت</h1>
            <div className="form-inputs-signup">
              <input type="text" name="username" placeholder="نام" />
              {/* <p>نام کاربری خود را اشتباه وارد کرده اید</p> */}
            </div>
            <div className="form-inputs-signup">
              <input type="text" name="lastname" placeholder="نام خانوادگی" />
              {/* <p> نام خانوادگی خود را اشتباه وارد کرده اید</p> */}
            </div>
            <div className="form-inputs-signup">
              <input type="email" name="email" placeholder="ایمیل" />
              {/* <p> ایمیل خود را اشتباه وارد کرده اید</p> */}
            </div>
            <div className="form-inputs-signup">
              <input type="password" name="password" placeholder="رمز عبور" />
              {/* <p> کلمه عبور خود را اشتباه وارد کرده اید</p> */}
            </div>
            <p className="forgot-signup">کلمه عبور خود را فراموش کرده اید؟ </p>
            <button type="submit">ورود</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_up;
