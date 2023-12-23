// import React from 'react'
import "../../components_css/Header_css/Navbar.css";
import Logo from "../../assets/Header/Group 3803 (4) 3.png";
import User from "../../assets/Header/User.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div>
          <ul className="list">
            <li>Appointment</li>
            <li>Medicines</li>
            <li>Labs test</li>
            <li>Hospital</li>
          </ul>
          
        </div>
        <div>
            <div>
              <img src={User} alt="" />
            </div>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
