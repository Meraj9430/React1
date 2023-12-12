// import React from 'react'
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div id="menu">
        <ul>
          <NavLink className="navlist" to="find_doctor">
            <li>Find doctors</li>
          </NavLink>
          <NavLink className="navlist" to="Video_consult">
          <li>Video consult</li>
          </NavLink>
          
          <NavLink className="navlist" to="Medicines">
            <li>Medicines</li>
          </NavLink>
          <NavLink className="navlist" to="Labs_test">
            <li>Labs test </li>
          </NavLink>
          <NavLink className="navlist" to="Hospital">
            <li>Hospital</li>
          </NavLink>
        </ul>
      </div>
      <div id="line"></div>
    </div>
  );
};

export default Category;
