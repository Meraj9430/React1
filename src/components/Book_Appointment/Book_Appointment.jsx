// import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import clendar from "../../assets/FindDoctors/calendar.svg";
// import Vectory from "../../assets/FindDoctors/Vectory.svg";
import Like from "../../assets/FindDoctors/Like.svg";
import Inr from "../../assets/FindDoctors/INR.svg";
const morning = ["10:00 AM", "11:10 AM", "11:20 AM", "11:50 AM"];
const afternoon = ["01:20 PM", "02:40 PM", "03:20 PM", "03:40 PM", "04:20 PM"];
const eve = ["04:20 PM", "04:40 PM", "05:20 PM", "05:40 PM", "06:20 PM"];

const Book_Appointment = () => {
  const { id } = useParams();
  const API = import.meta.env.VITE_API;
  const [docInfo, setDocInfo] = useState([]);

  useEffect(() => {
    featchdeta();
  }, []);

  const featchdeta = async () => {
    const res = await fetch(`${API}/api/doctor/getDoctorById/${id}`);
    try {
      const de = await res.json();
      console.log(de);
      setDocInfo(de.result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="Doctor_info">
        <div className="doc">
          <div className="doc_info_left">
            <img src={docInfo.photo} alt="IMG" />
            <div>
              <div id="info_Doc_Name">{docInfo.name}</div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="doc_info_sp">
                  <span>{docInfo.specialization}</span>
                </div>
                <div className="doc_info_sp" style={{ background: "#5A5959" }}>
                  <span>Profile is claimed</span>
                </div>
              </div>

              <div className="info_doc_Add">{docInfo.city}, DOC Search</div>
              <div className="info_doc_Add">
                {docInfo.experience} Years Experience Overall
              </div>
            </div>
          </div>
          <div>
            <div className="info_doc_Add">{docInfo.days}</div>
            <div className="info_doc_Add">
              {docInfo.start_time} To {docInfo.end_time}
            </div>
            <div className="info_doc_Add">
              <img src={Inr} alt="img" />
              {docInfo.fee} Consultation fee at Clinic
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
            <div className="info_doc_Add">
              <div className="doc_info_btn">Trusted Healthcare</div>
              <div className="doc_info_btn">{docInfo.mobile}</div>
              <div className="doc_info_btn">
                {docInfo.house_street_no} {docInfo.colony_locality}
              </div>
              <div className="doc_info_btn">{docInfo.email}</div>
            </div>
          </div>
        </div>
        <div className="doc_info_right">
          {/* <div className="D_I">
            <span>
              <img src={clendar} alt="img" />
            </span>
            <span className="info_today">Available Today</span>
          </div> */}
          <div className="pick_time">
          <div className="info_doc_Add">Pick a time slot</div>
            {/* <div id="DRP_line"></div> */}
            <div className="doc_info_btn" style={{ width: "100%" }}>
              Clinic Appointment Fee :-
              {docInfo.fee}
            </div>
            <div
              className="info_doc_Add"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "1rem",
              }}
            >
              <div id="info_Doc_Name">{docInfo.name}</div>
              <img src={Inr} alt="img" />
              {docInfo.fee}
            </div>
            <div id="DRP_line"></div>
            
            
            <div className="info_doc_Add">Morning ({morning.length}Slots)</div>
            <div className="slots">
              {
                morning.map((e)=>(<div className="slots_btn" key={e}>{e}</div>))
              }
            </div>
            <div id="DRP_line"></div>
            <div className="info_doc_Add">Afternoon ({afternoon.length}Slots)</div>
            <div className="slots">
              {
                afternoon.map((e)=>(<div className="slots_btn" key={e}>{e}</div>))
              }
            </div>
            <div id="DRP_line"></div>
            <div className="info_doc_Add">Evening ({eve.length}Slots)</div>
            <div className="slots">
              {
                eve.map((e)=>(<div className="slots_btn" key={e}>{e}</div>))
              }
            </div>
            <div className="slot_book">Book Now</div>
          </div>

          <Link style={{ textDecoration: "none" }} to={`/find_doctor`}>
            <div className="info_back_btn">
              <div className="info_back">
                <span>Back</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Book_Appointment;
