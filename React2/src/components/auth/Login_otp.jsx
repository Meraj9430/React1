// import React from 'react'
import "../../components_css/auth_css/Login.css";
import { Link } from "react-router-dom";
// import OtpInput from "./OtpInput";

const Login_otp = () => {
  // const otplin=4
  return (
    <div className="Form_body">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form">
            <input type="text" placeholder="Mobile no." />
            {/* <input type="password" placeholder="password" /> */}
            
            <button>Get OTP</button>
            <p className="message">
               <a href="#">Create an account</a>
            </p>
            <p className="message">
            <Link to="/Login">Login with Email ID / Mobile  with password</Link>
            </p>
          </form>
          {/* <OtpInput outlength={otplin}/> */}
        </div>
      </div>
    </div>
  );
};

export default Login_otp;
