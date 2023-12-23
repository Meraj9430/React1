// import React from 'react'
import "../../components_css/auth_css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
            <input type="text" placeholder="Email ID / Mobile no." />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
               <a href="#">Create an account</a>
            </p>
            <p className="message">
             <Link to="/Login_with_otp">Login with OTP instead of password</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
