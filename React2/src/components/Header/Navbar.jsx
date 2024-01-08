// import React from 'react'
import "../../components_css/Header_css/Navbar.css";
import Logo from "../../assets/Header/Group 3803 (4) 3.png";
import User from "../../assets/Header/User.svg";
import { useState } from "react";
import Communications from "../../assets/category/Communications.svg";
import Medical from "../../assets/category/Medical_Records.svg";
import Online from "../../assets/category/Online.svg";
import Refer from "../../assets/category/Refer.svg";
import Set_time from "../../assets/category/Set_time.svg";
import Profile from "../../assets/category/Profile.svg";
import payment from "../../assets/category/Payment.svg";
import Refe from "../../assets/category/Refe.svg";
import Setting from "../../assets/category/Setting.svg";
import Feedback from "../../assets/category/Feedback.svg";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const[toggle,setToggle]=useState(false);
  const Navgator = useNavigate();
  const menuItem = [
    {
      path: "dashboard/communications",
      name: "Appointment",
      icon: Communications,
    },
    {
      path: "dashboard/communications",
      name: "Medicines",
      icon: Communications,
    },
    {
      path: "dashboard/communications",
      name: "Labs test",
      icon: Communications,
    },
    {
      path: "dashboard/communications",
      name: "Hospital",
      icon: Communications,
    },
    {
      path: "dashboard/communications",
      name: "Communications",
      icon: Communications,
    },
    {
      path: "dashboard/Medical_Records",
      name: "Medical Records",
      icon: Medical,
    },
    {
      path: "dashboard/Online_Consultation",
      name: "Online Consultation",
      icon: Online,
    },
    {
      path: "dashboard/Refer_Patient",
      name: "Refer Patient",
      icon: Refer,
    },
    {
      path: "dashboard/set_time_date",
      name: "Set Time/Date",
      icon: Set_time,
    },
    {
      path: "dashboard/Profile",
      name: "Profile",
      icon: Profile,
    },
    {
      path: "dashboard/Payment",
      name: "Payment",
      icon: payment,
    },
    {
      path: "dashboard/Refer_Earn",
      name: "Refer & Earn",
      icon: Refe,
    },
    {
      path: "dashboard/Settings",
      name: "Settings",
      icon: Setting,
    },
    {
      path: "dashboard/Feedback",
      name: "Feedback",
      icon: Feedback,
    },
  ];
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfull");
    Navgator("/");
  };
  return (
    <div className="navbar_body">
      <div className="navbar">
        <nav>
          <div>
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div>
            <ul className="list">
              <NavLink to='/dashboard/Appointment'>

              <li>Appointment</li>
              </NavLink>
              <li>Medicines</li>
              <li>Labs test</li>
              <li>Hospital</li>
            </ul>
          </div>

          <div>
            <div className="user_img">
              <img src={User} alt="" />
            </div>
          </div>
        </nav>
        <div className="Nav_ham" onClick={()=>setToggle(!toggle)}>
        <FaBars style={{ color: "#FFF" }}  />
        </div>
      </div>
      {toggle &&
      <div className="mobile_nav">
          {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            {/* <div className="icon">
              
              <img src={item.icon} alt="img" />
            </div> */}
            <div
            style={{color:'#ffff'}}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        {
          localStorage.getItem('token') && <NavLink onClick={handleLogout} className="link" style={{background:"none"}}>
          {/* <div className="icon"  > <IoLogInOutline/></div> */}
          <div
            style={{color:'#ffff'}}
            className="link_text"
          >
            Logout
          </div>
        </NavLink>
        }
        
      </div>
      }
      
    </div>
  );
};

export default Navbar;
