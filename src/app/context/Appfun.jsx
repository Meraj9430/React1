/* eslint-disable react/prop-types */
// import React from 'react'
import Appcontext from './Appcontext'
import { useState } from 'react'

const Appfun = (props) => {
  const[userinfo,setusetinfo]=useState([]);
    const z ="Zeeshan"
  return (
    <Appcontext.Provider value={{z,userinfo,setusetinfo}}>
      {props.children}
    </Appcontext.Provider>
  )
}

export default Appfun
