/* eslint-disable react/prop-types */
import Appcontaxt from "./Appcontext";
import { useState } from "react";
// import React from 'react'

const AppFun = (props) => {
  const [appointmentTime,setAppointmenttime]=useState('')
  const Z = "Md Zeeshan Ali";
  return <Appcontaxt.Provider value={{Z,appointmentTime,setAppointmenttime}}>{props.children}</Appcontaxt.Provider>;
};

export default AppFun;
