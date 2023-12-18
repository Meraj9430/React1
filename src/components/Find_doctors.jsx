// import React from 'react'
import "../components_css/Find_doctors.css";
import Doc from "../assets/FindDoctors/Screenshot__87_-removebg-preview.png";
import Rec from "../assets/FindDoctors/Rectangle-removebg-preview.png";
import phon1 from "../assets/FindDoctors/Screenshot__88_-removebg-preview.png";
import phon2 from "../assets/FindDoctors/Screenshot__89_-removebg-preview.png";
import location from "../assets/location.svg";
import search from "../assets/Path 26.png";
import down  from '../assets/FindDoctors/UpArro.svg'
import { useState,useEffect } from "react";
const arr = [
  "Gynaecologist",
  "Cardiologist",
  "ENT specialist",
  "Pediatrician",
  "Dermatologist",
  "Neurologist",
  "Oncologist",
  "Orthopaedist",
  "Endocrinologist",
  "General Medicine",
  "Anaesthesiologist",
  "Dentist",
  "Nephrologist",
  "Ophthalmology",
  "Psychiatrists",
  "Pulmonologist",
  "Radiologist",
  "Geriatrician",
  "Veterinarian",
  "Allergist",
  "Audiologist",
  "Pathologist",
  "Surgeon",
  "Dietitian",
];
const Find_doctors = () => {
  const [deta, setDeta] = useState("");
  const [toggle, setToggle] = useState(false);

  let searchResult = arr.filter((item) => {
    return item.toLowerCase().includes(deta.toLowerCase());
  });
  useEffect(()=>{
    if (deta.length >= 1) {
      setToggle(true)
    }else{
      setToggle(false)
    }
  },[deta])
  
  return (
    <div className="Doc_reg_form">
      <div className="main">
        <div id="header">
          <span>FIND YOUR DOCTOR AND BOOK</span>
        </div>
      </div>
      <div id="FD_box">
        <div id="fd_item">
          <div id="fd_head">
            <div id="fd_header">
              <h3>Your Health is our Priority</h3>
            </div>
            <div id="fd_p">
              <p>24/7 access to doctors across all specialities</p>
            </div>
          </div>
          <div>
            <form className="fd_form">
              <div className="fd_input">
                <img src={location} alt="" />
                <input type="text"  placeholder='Search Location'/>

                <span>
                  <img src={down} alt="" />
                </span>
              </div>
              <div className="fd_input">
                <img src={search} alt="img" />
                <input
                  type="text"
                  value={deta}
                  onChange={(e) => setDeta(e.target.value)}
                  placeholder="Search Doctors and specialities"
                />
                <span onClick={() => setToggle(!toggle)}>
                  {toggle ? <img id="Fdup" src={down} alt="img" /> : <img  src={down} alt="img" />}
                </span>
              </div>
              <div id="toggle_box">
                {toggle &&
                   searchResult.map((e) => (
                      <p key={e} value={e} onClick={()=>{setDeta(e) ,setToggle(false)}} >
                        {e} 
                      </p>
                    ))
                  }
                  {/* <span onClick={()=>setToggle(false)}>X</span> */}
              </div>
              <button type="submit" id="fd_btn">
                Submit
              </button>
            </form>
          </div>
          <div id="fd_doc_img">
            <img src={Doc} alt="" />
          </div>
        </div>
      </div>
      <div className="fd_poster">
        <div className="left_poster">
          <p>
            Buy subscription & get experience continous care with unlimited
            consultation
          </p>
          <button>GET SUBSCRIPTION</button>
          <img src={Rec} alt="img" />
        </div>
        <div id="ridht_poster">
          <p>Download the app & get 1 points daily you hold the app</p>
          <img id="fd_phon1" src={phon1} alt="img" />
          <img id="fd_phon2" src={phon2} alt="img" />
          <button>Download App</button>
        </div>
      </div>
    </div>
  );
};

export default Find_doctors;
