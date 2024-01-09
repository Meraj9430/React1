// import React from 'react'
import { useState,useEffect } from "react";
import '../../Pages_css/Appointment_page.css'
import No_Appoinment from "../../components/sub_components/sub2_components/No_Appoinment";
import Appointment_list from "../../components/sub_components/Appointment_list";

const My_Appointment = () => {
  const API = import.meta.env.VITE_API;
  const [Appointment, setAppointment] = useState([]);
  useEffect(()=>{
    appoint_List()
  },[])
  const appoint_List = async ()=>{
    const res =await fetch(`${API}/api/doctorUserAppointment/getAppointment`)
    try {
      const d =await res.json()
      if (d.success) {
        console.log(d.data)
        setAppointment(d.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  if (Appointment.length === 0) {
    return <No_Appoinment/>;
  }
  return <div className="ygyggy">
    <div className="Appointment_box">
      <div className="Appointment_len">
      {Appointment.length} APPOPIMENTS
      </div>
      <div id='app_line'></div>
      {Appointment.map((e)=>(

      <Appointment_list key={e._id} deta={e}/>
      ))}
      {/* <Appointment_list/>
      <Appointment_list/> */}
    </div>
  </div>;
};

export default My_Appointment;
