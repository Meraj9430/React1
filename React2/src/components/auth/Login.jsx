// import React from 'react'
import "../../components_css/auth_css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const api=import.meta.env.VITE_API
  const [email, setEmail] = useState("azal035@gmail.com");
  const [password, setPassword] = useState("Abcdef@123");
  const Navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(data)
    // dispatch(UserAuth(data))
    const res = await fetch(`${api}/api/doctor/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      // expiresInMins: 60, // optional
    }),
  });
  const deta = await res.json();
  console.log(deta)
  localStorage.setItem("token", deta.token);
  alert(`Logged in Successfully ${deta.token}`);
  Navigate("dashboard");
  // getUserInfo()
  // dispatch(addUser(deta))
  
}; 

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
          <form className="login-form" onSubmit={handlesubmit}>
            <input type="text" value={email} placeholder="Email ID / Mobile no." onChange={(e)=>setEmail(e.target.value)} required />
            <input type="password" value={password} placeholder="password"required onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">login</button>
            <p className="message">
              <a href="#">Create an account</a>
            </p>
            <p className="message">
              <Link to="/Login_with_otp">
                Login with OTP instead of password
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
