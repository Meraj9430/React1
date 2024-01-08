/* eslint-disable react/prop-types */
// import React from 'react'
// import img from "../../assets/Home/Appoint_line.svg";

import "../../Pages_css/Appointment_page.css";
const Appointment_list = ({deta}) => {
  return (
    <div className="Appointment_list">
      <div className="appoint_body">
        <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
          <div style={{color:'#005473',fontFamily:'Roboto',fontSize:'0.875rem',fontStyle:'normal',fontWeight:'600'}}>{deta.createdAt}</div>
          <div style={{color:'#000',fontFamily:'Roboto',fontSize:'0.875rem',fontStyle:'normal',fontWeight:'600'}}>Appointment Confirmed ✅</div>
          <div style={{color:'#000',fontFamily:'Roboto',fontSize:'0.875rem',fontStyle:'normal',fontWeight:'600'}}>Your appointment ID {deta.appointmentId} </div>
          <div style={{color:'#FBBC05',fontFamily:'Roboto',fontSize:'0.875rem',fontStyle:'normal',fontWeight:'600'}}>{deta.doctorId.specialization}</div>
          <div style={{color:'#4D4E4F',fontFamily:'Roboto',fontSize:'0.775rem',fontStyle:'normal',fontWeight:'600'}}>{deta.doctorId.name}</div>
          <div style={{color:'#3F3F42',fontFamily:'Roboto',fontSize:'0.75rem',fontStyle:'normal',fontWeight:'400'}}>{deta.doctorId.city}, {deta.doctorId.state}</div>
        </div>
        <div>
          <div
            style={{
              width: "6rem",
              height: "6rem",
              overflow: "hidden",
              borderRadius: "100%",
            }}
          >
            <img src={deta.doctorId.photo} alt="" />
          </div>
          <div>{deta.doctorId.qualification}</div>
        </div>
      </div>
      <div>
        {/* <img src={img} style={{ width: "100%" }} alt="" /> */}
      </div>
      {/* <div>Booked for Ankita Gupta</div> */}
    </div>
  );
};

export default Appointment_list;
