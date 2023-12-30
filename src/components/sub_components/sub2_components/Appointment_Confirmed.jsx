/* eslint-disable react/prop-types */
// import React from 'react'
import "../../../components_css/Book_Appointment_css/Appointment_Confirmed.css";
import Vectory from "../../../assets/FindDoctors/calendar.svg";
import Time from "../../../assets/FindDoctors/Time.svg";
import Conf from "../../../assets/FindDoctors/Conf.svg";
import { useState } from "react";

const Appointment_Confirmed = ({
  appointmentId,
  docInfo,
  time,
  date,
  setToggle,
}) => {
    const[viewNumber,setviewNumber]=useState(false);

  return (
    <div>
      <div className="modalback">
        <div className="modalBody">
          <div className="modalcontant">
            <div>
              <div className="modalheader">
                <span>
                  <h5>Appointment Confirmed ✅ </h5>
                </span>
                {/* <span onClick={close}> ❌</span> */}
              </div>
              <div className="appoint_card">
                <div className="appoint_card_head">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img
                      src={Vectory}
                      style={{ width: " 0.6875rem", height: "0.6875rem" }}
                      alt=""
                    />
                    <span className="appoint_card_date"> {date}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img src={Time} alt="" />
                    <span className="appoint_card_date"> {time}</span>
                  </div>
                </div>
                <div className="appoint_info">
                  <div className="appoint_doc_img">
                    <img
                      src={docInfo.photo}
                      alt=""
                      style={{ width: "4.09713rem", height: "4.09713rem" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <p className="appoint_doc_name">{docInfo.name}</p>
                    <p className="appoint_doc_name">{docInfo.qualification}</p>
                    <p className="appoint_doc_dipt">{docInfo.specialization}</p>
                    <p className="appoint_doc_address">
                      {docInfo.city}, {docInfo.state}{" "}
                    </p>
                    <p className="appoint_doc_address">
                      {docInfo.experience} years experience{" "}
                    </p>
                  </div>
                </div>
                <div className="appoint_card_head">
                  <div className="appoint_card_call" onClick={()=>setviewNumber(!viewNumber)}>Call Now</div>
                  <div className="appoint_card_call">Get Direction</div>
                </div>
               
                
              </div>
              <div className="appoint_msg">
                <p className="appoint_succmsg">
                  {" "}
                  <img src={Conf} alt="" /> Appointment Confirmed
                </p>
                <p className="appoint_msg_p">
                  Your appointment ID {appointmentId}
                </p>
                {viewNumber && <p className="appoint_msg_p">
                  Call Now {docInfo.mobile}
                </p>}
                
                <p className="appoint_msg_p">
                  We have sent you an SMS with details
                </p>
                <p className="appoint_msg_p">
                  Your Appointment is covered under the{" "}
                  <span style={{ color: "#FBBC05" }}>
                    Doc Search Health care Bronze 1 Year plan
                  </span>{" "}
                </p>
                <p className="appoint_msg_p">
                  Verified consultation fee of{" "}
                  <span style={{ color: "#FBBC05" }}>₹{docInfo.fee}</span>{" "}
                </p>
                <div
                  className="appoint_card_call"
                  onClick={() => setToggle(false)}
                >
                  Close ❌
                </div>
              </div>
              {/* <button type="submit" className="login_btn">
                Back
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment_Confirmed;
