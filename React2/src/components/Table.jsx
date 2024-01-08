/* eslint-disable react/prop-types */
// import React from 'react'
import'../Page_css/Appointment.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Appcontaxt from '../context_API/Appcontext'

const Table = ({date="Date",time="Time",userAppointmentId="Appointment Id",status="status",userId,colour="#42869E",textcol='#ffff'}) => {
  const {setAppointmenttime}=useContext(Appcontaxt)
  return (
    <div className='Appo_table_body' style={{backgroundColor:colour}}>
      <div className='Ap_table_box' style={{color:textcol}}>{date}</div>
      <div className='Ap_table_box' style={{color:textcol}}>{time}</div>
      
      <div className='Ap_table_box' style={{color:textcol}}>{userAppointmentId}</div>
      <div className='Ap_table_box' style={{color:textcol}}>{status}</div>
      {userId ?<Link onClick={()=>setAppointmenttime(time)} to={`/dashboard/user/${userId}`} className='Ap_table_box' style={{color:'blue'}}>View</Link>:<div className='Ap_table_box' style={{color:textcol}}>User info</div>}
      
      
    </div>
  )
}

export default Table
