import React from 'react'
import img from '../../../assets/image 65.png'
import { Link } from 'react-router-dom'
const No_Appoinment = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'500px'}}>
      <div style={{ alignItems:'center', display:"flex",flexDirection:'column',gap:'1.5rem'}}>

      <img src={img} alt="" />
      <p style={{color:'#000',fontFamily:'Inter',fontWeight:'500',fontSize:'1.5rem',fontStyle:'normal'}}>Sorry, you don't have any appointments</p>
      <Link to='/find_doctor' >
            <div style={{width:"22.3125rem",height:'4.25rem',background:'#005473',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontFamily:'Inter',fontWeight:'400',fontSize:'1.8rem',fontStyle:'normal',borderRadius:'1.25rem'}}>
            Book an Appoinment
            </div>
      </Link>
      
      </div>
    </div>
  )
}

export default No_Appoinment
