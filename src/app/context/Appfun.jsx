/* eslint-disable react/prop-types */
// import React from 'react'
import Appcontext from './Appcontext'

const Appfun = (props) => {
    const z ="Zeeshan"
  return (
    <Appcontext.Provider value={{z}}>
      {props.children}
    </Appcontext.Provider>
  )
}

export default Appfun
