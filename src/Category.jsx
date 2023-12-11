// import React from 'react'

const Category = () => {
  return (
    <div>
      <div id="menu">
        <ul>
          <li>Find doctors</li>
          <li>Video consult</li>
          <li className="active" style={{color:"rgb(101, 158, 175)"}}>Medicines</li>
          <li>Labs test </li>
          <li>Hospital</li>
        </ul>
      </div>
      <div id="line"></div>
    </div>
  );
};

export default Category;
