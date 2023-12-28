import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../components_css/Slider.css";
import Communications from "../assets/category/Communications.svg";
import Medical from "../assets/category/Medical_Records.svg";
import Online from "../assets/category/Online.svg";
import Refer from "../assets/category/Refer.svg";
import Set_time from "../assets/category/Set_time.svg";
import Profile from "../assets/category/Profile.svg";
import payment from "../assets/category/Payment.svg";
import Refe from "../assets/category/Refe.svg";
import Setting from "../assets/category/Setting.svg";
import Feedback from "../assets/category/Feedback.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const Navgator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return Navgator("/");
    }
    // getUserInfo();
  }, []);
  const menuItem = [
    {
      path: "communications",
      name: "Communications",
      icon: Communications,
    },
    {
      path: "Medical_Records",
      name: "Medical Records",
      icon: Medical,
    },
    {
      path: "Online_Consultation",
      name: "Online Consultation",
      icon: Online,
    },
    {
      path: "Refer_Patient",
      name: "Refer Patient",
      icon: Refer,
    },
    {
      path: "set_time_date",
      name: "Set Time/Date",
      icon: Set_time,
    },
    {
      path: "Profile",
      name: "Profile",
      icon: Profile,
    },
    {
      path: "Payment",
      name: "Payment",
      icon: payment,
    },
    {
      path: "Refer_Earn",
      name: "Refer & Earn",
      icon: Refe,
    },
    {
      path: "Settings",
      name: "Settings",
      icon: Setting,
    },
    {
      path: "Feedback",
      name: "Feedback",
      icon: Feedback,
    },
  ];
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("doctorId");
    alert("Logout Successfull");
    Navgator("/");
  };
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
            className="bars"
          >
            <FaBars style={{ color: "#005473" }} onClick={toggle} />
            {/* <h1 onClick={toggle}>Toggle</h1> */}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">
              
              <img style={{ color: "#005473" }} src={item.icon} alt="img" />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <NavLink onClick={handleLogout} className="link" style={{background:"none"}}>
          <div className="icon"> <IoLogInOutline/></div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Logout
          </div>
        </NavLink>
      </div>
      {/* <main>{children}</main> */}
      <Outlet />
      {/* {!localStorage.getItem("token") && } */}
    </div>
  );
};

export default Sidebar;
