// import React from 'react'
import logo from "./assets/Group 3008.svg";
import search from "./assets/Path 26.png";
import user from "./assets/Group 3149.png";
import hamburger from "./assets/hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import User from "./pages/User";

const Navbar = () => {
  const API = import.meta.env.VITE_API;
  const [toggle, setToggle] = useState(false);
  const [view, setview] = useState(false);
  const [sign, setSign] = useState(false);
  const [menu, setMenu] = useState(false);
  const [userInfo, setUserinfo] = useState({});
  const Doctor_URL = import.meta.env.VITE_DOCTOR_URL;
  const closemodal = () => {
    setview(false);
  };
  const closesignup = () => {
    setSign(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    // setLogout(false);
    setview(true);
    alert("Logout Successfull");
    // Navgator("/");
  };
  
  const userinfo =async()=>{
    try {
      const v = localStorage.getItem("userId");
      const res = await fetch(`${API}/api/userSignup_login/getUserById/${v}`)
      const info = await res.json();
      setUserinfo(info.result)
      setMenu(!menu)
      console.log(info)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
        <div className="nav">
          <div id="navbar">
            <nav id="box1">
              <div id="toggle">
                <img
                  src={hamburger}
                  width="62"
                  height="59"
                  onClick={() => setToggle(!toggle)}
                  alt=""
                />
              </div>
              <div id="logo">
                <img src={logo} alt="" />
                <div className="nav-text">
                  <span style={{ color: "#FF2828" }}>Doc </span>
                  <span style={{ color: "#FBBC05" }}>Search</span>
                </div>
              </div>
              {/* <div id="toggle">
                <img
                  src={hamburger}
                  width="62"
                  height="59"
                  onClick={() => setToggle(!toggle)}
                  alt=""
                />
              </div> */}
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
              {!localStorage.getItem("token") ? (
                <div className="login_btn">
                  <p onClick={() => setSign(true)}>Register</p>
                  <p> / </p>
                  <p onClick={() => setview(true)}>Login</p>
                </div>
              ) : (
                <div onClick={userinfo}>
                  <img src={user} alt="" />
                </div>
              )}
              {menu && <User setview={setview} userInfo={userInfo}/>}
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
                    <a className="navlist" href={Doctor_URL} target="">
                      <li>For doctors</li>
                    </a>
                    <Link className="navlist" to="Medicines">
                      <li>Contact Us</li>
                    </Link>
                    <Link className="navlist" to="find_doctor">
                      <li>Find Doctor</li>
                    </Link>
                    <Link className="navlist" to="Video_consult">
                      <li>Video consult</li>
                    </Link>
                    <Link className="navlist" to="Medicines">
                      <li>Medicines</li>
                    </Link>

                    <Link className="navlist" to="Labs_test">
                      <li>Labs test </li>
                    </Link>
                    <Link className="navlist" to="Hospital">
                      <li>Hospital </li>
                    </Link>
                  </ul>
                  {!localStorage.getItem("token") ? (
                    <>
                      <div className="login_btn" onClick={() => setMenu(!menu)}>
                        <p onClick={() => setSign(true)}>Register</p>
                      </div>
                      <div className="login_btn">
                        <p onClick={() => setview(true)}>Login</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div onClick={() => setMenu(!menu)}>
                        <img src={user} alt="" />
                        <p></p>
                      </div>
                      {menu &&
                      <ul>
                        <Link className="navlist" to="Medicines">
                          <li>{userInfo.FirstName} {userInfo.LastName}</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>My Appointment</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>My Test</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>My Medical Record</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>My Feedback</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>Reedeme Doc search Cah</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>View/ Update Profile</li>
                        </Link>
                        <Link className="navlist" to="Medicines">
                          <li>Settings</li>
                        </Link>
                        <Link onClick={handleLogout} className="User_Link">
                          <li>Logout</li>
                        </Link>
                      </ul>
                      }
                    </>
                  )}
                </div>

                {/* {menu && <User setview={setview} />} */}
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
