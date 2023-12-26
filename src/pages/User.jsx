/* eslint-disable react/prop-types */
// import React from 'react'
import user from "../assets/Group 3149.png";
import "../Pages_css/User.css";
import { Link, useNavigate } from "react-router-dom";
// import { useEffect,useState } from "react";
const User = ({ setLogout, setview,userInfo }) => {
  const Navgator = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    alert("Logout Successfull");
    Navgator("/");
    setLogout(false);
    setview(true);
  };
  return (
    <div className="User_box">
      <div id="User_List">
        <div className="User_List_header">
          <div id="User_List_img">
            <img src={user} alt="img" />
          </div>
          <div id="User_List_name">
            <p>{userInfo.FirstName} {userInfo.LastName}</p>
            <p>{userInfo.Mobile}</p>
          </div>
        </div>
        <div id="User_List_Link">
          <ul>
            <Link className="User_Link">
              <li>My Appointment</li>
            </Link>
            <Link className="User_Link">
              <li>My Test</li>
            </Link>
            <Link className="User_Link">
              <li>My Medical Record</li>
            </Link>
            <Link className="User_Link">
              <li>My Feedback</li>
            </Link>
            <Link className="User_Link">
              <li>Reedeme Doc search Cah</li>
            </Link>
            <Link className="User_Link">
              <li>View/ Update Profile</li>
            </Link>
            <Link className="User_Link">
              <li>Settings</li>
            </Link>
            <Link onClick={handleLogout} className="User_Link">
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
