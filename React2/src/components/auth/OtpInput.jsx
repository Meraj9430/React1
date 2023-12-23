/* eslint-disable react/prop-types */
import {useState,useRef} from 'react'

const OtpInput = ({outlength}) => {
    const [otp,setOtp]= useState(Array(outlength).fill(''))
    const inputRefs = useRef([])

    const handileOutchange = (index,value)=>{
        const newOtp=[...otp]
        newOtp[index]=value
        setOtp(newOtp)

        //Automatically focus on the next input box
        if (value !=='' && index < outlength -1) {
            inputRefs.current[index +1].focus();
        }
    }
  return (
    <div className='otp'>
        {
            otp.map((digit,index)=>(

                <input key={index} type="text" maxLength='1' value={digit} onChange={(e)=>handileOutchange(index,e.target.value)} ref={(ref)=>(inputRefs.current[index]=ref)}/>
            ))
        }
    </div>
  )
}

export default OtpInput
