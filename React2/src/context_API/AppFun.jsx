/* eslint-disable react/prop-types */
import Appcontaxt from "./Appcontext";
// import React from 'react'

const AppFun = (props) => {
  const Z = "Md Zeeshan Ali";
  return <Appcontaxt.Provider value={{Z}}>{props.children}</Appcontaxt.Provider>;
};

export default AppFun;
