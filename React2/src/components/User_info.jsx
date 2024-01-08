// import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Appcontaxt from "../context_API/Appcontext";
import "../Page_css/Appointment.css";
const User_info = () => {
  const { id } = useParams();
  const [userinfo, setUserinfo] = useState({});
  const [UploadPrescription, setUploadPrescription] = useState(null);
  const { appointmentTime } = useContext(Appcontaxt);
  useEffect(() => {
    getUser_info();
  }, []);
  const getUser_info = async () => {
    const res = await fetch(
      `http://localhost:5000/api/userSignup_login/getUserById/${id}`
    );
    try {
      const d = await res.json();
      setUserinfo(d.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Appointment_info">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="Appointment_info_header">
          Today’s Online Appointment Booked
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className="Appointment_name" style={{ color: "#005473" }}>
          {" "}
          Patient’s Information
        </div>

        <div className="Appointment_name">{userinfo.FirstName}</div>
        <div className="Appointment_name">{userinfo.Mobile}</div>
        <div className="Appointment_name">{userinfo.City}</div>
        <div className="Appointment_name">{userinfo.Email}</div>
        <div className="Appointment_btn" style={{ background: "red" }}>
          Subscriber
        </div>
        <div className="Appointment_btn">Paid</div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <div>
          <div className="Appointment_name" style={{ color: "#005473" }}>
            Appointment Timing
          </div>
          <div className="Appointment_name">{appointmentTime}</div>
        </div>
       
      </div>
      <div>
          <div className="Doc_box">
            <label htmlFor="name">
              Confirmation <span>*</span>
            </label>
            <div className="Doc_input_box">
              <select
                // value={tog?blood_group:doctor.blood_group}
                // onChange={(e) => setBlood_group(e.target.value)}
                name=""
                id=""
                required
              >
                <option value="">Select an option</option>
                <option value="Complete">Complete</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Appointment_name" style={{color:'#005473'}}>Appointment Confirmed ✅</div>
        <div>
          <div className="Prescription_img">
            <img src={UploadPrescription} style={{width:'100%',height:'100%'}} alt="Img" />
          </div>
          <label htmlFor="file" className="Appointment_name" style={{color:'#005473',cursor:'pointer'}}>Upload Prescription</label>
          <input style={{display:'none'}} id="file" type="file" onChange={(e) => setUploadPrescription(URL.createObjectURL(e.target.files[0]))} />
        </div>
        <div className="Appointment_name" style={{color:'#005473',fontWeight:'400'}}>{userinfo.FirstName} Appointment is covered under the <span style={{color:'#C19412'}}>DOC Search Health care Bronze 1 Year Plan</span> </div>
        <div  style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
           <div id="DRP_btn">
              <button className="DRP_submit_btn" >
                <span>Proceed</span>
              </button>
            </div>

        </div>
    </div>
  );
};

export default User_info;
