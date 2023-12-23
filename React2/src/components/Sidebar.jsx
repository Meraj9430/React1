import  { useState } from 'react';
import {
    FaBars,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../components_css/Slider.css'
import Communications from '../assets/category/Communications.svg'
import Medical from '../assets/category/Medical_Records.svg'
import Online from '../assets/category/Online.svg'
import Refer from '../assets/category/Refer.svg'
import { Outlet } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"communications",
            name:"Communications",
            icon:Communications
        },
        {
            path:"Medical_Records",
            name:"Medical Records",
            icon:Medical
        },
        {
            path:"Online_Consultation",
            name:"Online Consultation",
            icon:Online
        },
        {
            path:"Refer_Patient",
            name:"Refer Patient",
            icon:Refer
        },
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
                       <FaBars style={{color:'#005473'}} onClick={toggle}/>
                       {/* <h1 onClick={toggle}>Toggle</h1> */}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon"> <img src={item.icon} alt="img" /></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           {/* <main>{children}</main> */}
           <Outlet/>
        </div>
    );
};

export default Sidebar;