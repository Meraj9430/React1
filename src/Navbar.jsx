// import React from 'react'
import logo from "./assets/Group 3008.svg";
import search from "./assets/Path 26.png";
// import user from "./assets/Group 3149.png";
import hamburger from "./assets/hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [view, setview] = useState(false);
  const [sign, setSign] = useState(false);
  const Doctor_URL = import.meta.env.VITE_DOCTOR_URL;
  const closemodal = () => {
    setview(false);
  };
  const closesignup = () => {
    setSign(false);
  };
  return (
    <>
      <div>
        <div className="nav">
          <div id="navbar">
            <nav id="box1">
              <div id="logo">
                <img src={logo} alt="" />
                <div className="nav-text">
                  <span style={{ color: "#FF2828" }}>Doc </span>
                  <span style={{ color: "#FBBC05" }}>Search</span>
                </div>
              </div>
              <div id="toggle">
                <img
                  src={hamburger}
                  width="62"
                  height="59"
                  onClick={() => setToggle(!toggle)}
                  alt=""
                />
              </div>
              <div id="search">
                <input type="text" placeholder="SEARCH DOCTORS & HOSPITAL" />
                <div id="search-btn">
                  <img src={search} alt="" />
                </div>
              </div>
            </nav>
            <div id="box2">
              <div className="box">
                <ul>
                  <Link className="navlist" to="">
                    <li>Home</li>
                  </Link>
                  <Link className="navlist" to="">
                    <li>Sheid</li>
                  </Link>
                  <a className="navlist" href={Doctor_URL} target="_blank">
                    <li>For doctors</li>
                  </a>
                  <Link className="navlist" to="Medicines">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
              <div className="login_btn">
                <p onClick={() => setSign(true)}>Register</p>
                <p> / </p>
                <p onClick={() => setview(true)}>Login</p>
              </div>

              {/* <div>
              <img src={user} alt="" />
            </div> */}
            </div>
            {toggle && (
              <div id="mobile-menu">
                <div id="search1">
                  <input type="text" placeholder="SEARCH DOCTORS & HOSPITAL" />
                  <div id="search1-btn">
                    <img src={search} alt="" />
                  </div>
                </div>
                <div>
                  <ul>
                    <Link className="navlist" to="">
                      <li>Home</li>
                    </Link>
                    <Link className="navlist" to="">
                      <li>Sheid</li>
                    </Link>
                    <a className="navlist" href={Doctor_URL} target="_blank">
                    <li>For doctors</li>
                  </a>
                    <Link className="navlist" to="Medicines">
                      <li>Contact Us</li>
                    </Link>
                  </ul>
                  <div className="login_btn">
                    <p onClick={() => setSign(true)}>Register</p>
                    <p> / </p>
                    <p onClick={() => setview(true)}>Login</p>
                  </div>
                  {/* <div>
                  <img src={user} alt="" />
                </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Category />
      {view && <Login close={closemodal} setview={setview} setSign={setSign} />}
      {sign && (
        <Signup close={closesignup} setview={setview} setSign={setSign} />
      )}
    </>
  );
};

export default Navbar;
