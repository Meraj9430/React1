// import React from 'react'
import { useState,useEffect } from 'react'
import '../Page_css/Appointment.css'
import Table from '../components/Table'


const Appointment = () => {
    const [userInfo,setInfo]=useState([])
    useEffect(()=>{
      docinfo();
    },[])
    const docinfo= async()=>{
        const res = await fetch('http://localhost:5000/api/userAppointment/getUserAppointment')
        try {
            const d= await res.json();
            if (d.success) {
                setInfo(d.data)
                console.log(d)
            }else{
                alert(d.error)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
      <div className='Appointment_header'>
      <Table />

      {userInfo.map((e)=>(
        <Table key={e._id} date={e.date} status={e.status} time={e.time} userAppointmentId={e.userAppointmentId} userId={e.userId} colour='#ffff' textcol='black' />
      ))}
      </div>
      
    </>
  )
}

export default Appointment
