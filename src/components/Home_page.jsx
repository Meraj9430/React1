// import React from 'react'
import circle from "../assets/Home/Rectangle170.png";
import doctor from "../assets/Home/doctor.png";
import Dentist from "../assets/Home/image48.png";
import Orthopaedic from "../assets/Home/image44.png";
import Oncology from "../assets/Home/image45.png";
import Dermatology from "../assets/Home/image46.png";
import Cardiology from "../assets/Home/image42.png";
import Gastroenterology from "../assets/Home/image43.png";
import Neurology from "../assets/Home/image40.png";
import Pediatrics from "../assets/Home/image47.png";
import slider1 from "../assets/Home/Group 3065.png";
import slider2 from "../assets/Home/Group 3066.png";
import slider3 from "../assets/Home/Group 3067.png";
// import doc2 from "../assets/Home/image37.png";
// import doc from "../assets/Home/image50.png";
import "../components_css/Home_page.css";
// import { useEffect,useState } from "react";
import Crousel from "./sub_components/Crousel";

const Home_page = () => {
  // const [IM,setIMG]=useState([])
  // const API = import.meta.env.VITE_API;
  // useEffect(()=>{
  //   fetch(`${API}/api/image/getImage`).then(res => setIMG(res.data)).catch(err => console.log(err))
  // },[])
  // const IMG = [
  //   {
  //     img: slider1,
  //   },
  //   {
  //     img: slider2,
  //   },
  //   {
  //     img: slider3,
  //   },
  // ];
  return (
    <>
      <div className="Home_page">
        <div style={{width:"100%",display:'flex',alignItems:'center',justifyContent:'center'}}>

        
        <div className="Home_header">
          <div className="Header_left">
            <div className="H_L_T">
              <p>
                We are <span style={{ color: "#FBBC05" }}>providing</span> the
                best <span style={{ color: "#000" }}>health</span> services
              </p>
            </div>
            <div className="H_L_p">
              Always caring about your health, Find your doctors and make an
              appointment
            </div>
            <div className="Home_h_btn">
              <span>Signup today</span>
            </div>
          </div>
          <div className="Header_right">
            <div className="Headerimg">
              <img src={circle} alt="IMG" />
            </div>
            <div className="Headerimg2">
              <img src={doctor} alt="IMG" />
            </div>
          </div>
        </div>
        </div>
        <div className="header_box">
          <div className="Header_item">
            <div className="home_online">
              Consult online doctors for any health concern
            </div>
            <div className="header_item_box">
              <div className="H_I_B">
                <img src={Dentist} alt="" />
                <p>Dentist</p>
              </div>
              <div className="H_I_B">
                <img src={Orthopaedic} alt="" />
                <p>Orthopaedic</p>
              </div>
              <div className="H_I_B">
                <img src={Oncology} alt="" />
                <p>Oncology</p>
              </div>
              <div className="H_I_B">
                <img src={Dermatology} alt="" />
                <p>Dermatology</p>
              </div>
            </div>
            <div className="header_item_box">
              <div className="H_I_B">
                <img src={Cardiology} alt="" />
                <p>Cardiology</p>
              </div>
              <div className="H_I_B">
                <img src={Gastroenterology} alt="Gastroenterology" />
                <p>Gastroenterology</p>
              </div>
              <div className="H_I_B">
                <img src={Neurology} alt="Neurology" />
                <p>Neurology</p>
              </div>
              <div className="H_I_B">
                <img src={Pediatrics} alt="Pediatrics" />
                <p>Pediatrics</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Crousel img={slider1} img2={slider2} img3={slider3}/> */}

        <div className="home_container">
          <Crousel img={slider1} img2={slider2} img3={slider3} />
        </div>

        {/* <img src={IM[0].photo} alt="" /> */}
      </div>
    </>
  );
};

export default Home_page;
