/* eslint-disable react/prop-types */

// import React from 'react'
import "../../../components_css/Find_doctors.css";
import clendar from "../../../assets/FindDoctors/calendar.svg";
import Vectory from "../../../assets/FindDoctors/Vectory.svg";
import Like from "../../../assets/FindDoctors/Like.svg";
import Inr from "../../../assets/FindDoctors/INR.svg";
import { Link } from "react-router-dom";
const Doctor_info = ({deta,setComtoggle}) => {
  return (
    <>
      <div className="Doctor_info">
        <div className="doc">
          <div className="doc_info_left">
            <img
              src={deta.photo}
              alt="IMG"
            />
            <div>
              <div id="info_Doc_Name">{deta.name}</div>
              <div className="doc_info_sp">
                <span>{deta.specialization}</span>
              </div>
              <div className="info_doc_Add">{deta.city}, DOC Search</div>
              <div className="info_doc_Add">{deta.experience} Years Experience Overall</div>
            </div>
          </div>
          <div>
            <div className="info_doc_Add">Tuesday & Thursday</div>
            <div className="info_doc_Add">10:00 AM To 05:00 PM</div>
            <div className="info_doc_Add">
              
              <img src={Inr} alt="img" />
              450 Consultation fee at Clinic
            </div>
            <div className="info_doc_like">
             
              <span>
                <img src={Like} alt="img" />
              </span>
              <span className="ellips">
                <p>98%</p>
              </span>
              <p className="info_doc_Add">120+ Patient Stories</p>
            </div>
          </div>
        </div>
        <div className="doc_info_right">
          <div className="D_I">
            
            <span>
              <img src={clendar} alt="img" />
            </span>
            <span className="info_today">Available Today</span>
          </div>
          <Link style={{textDecoration:'none'}} to={`/Book_Appointment/${deta._id}`}>
          <div className="info_btn">
            <div>
              <p className="info_Appointment">Book Appointment</p>
              <p className="info_notbook">No Booking Fee</p>
            </div>
            <div>
              <img src={Vectory} alt="" />
            </div>
          </div>
          </Link>
          <div className="info_back_btn">

          <div className="info_back" onClick={()=>setComtoggle(true)}>
            <span>Back</span>
          </div>
          </div>
        </div>
      </div>
      <div id="DRP_line"></div>
    </>
  );
};

export default Doctor_info;
