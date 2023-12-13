/* eslint-disable react/prop-types */
// import React from 'react'
import "../../components_css/Medicines.css";
import star from "../../assets/Medicines/icons8-star-60 (1) 1.png";

// eslint-disable-next-line react/prop-types
const Medical_shop_list = ({ apideta }) => {
  const card_deta = apideta.map((e) => (
    < >
      <div key={e.id}  className="card_item">
        <div>
          <img className="card_img" src={e.thumbnail} alt="img" />
        </div>
        <div>
          <span className="medical_store_name">{e.title}</span>
        </div>
        <div>
          <span>1.2 km away from your laction</span>
        </div>
        <div id="star_box">
          <img src={star} alt="" />
          <span>{e.rating}</span>
        </div>
        <div id="card-btn">
          <span>Upload your prescription</span>
        </div>
      </div>
    </>
  ));
  return (
    <div id="shop">
      <div className="main">
        <div id="header">
          <span>Chemist/ medical shop near by</span>
        </div>
      </div>
      <div id="card-body">
        <div className="card">
            {card_deta}
        </div>
      </div>
    </div>
  );
};

export default Medical_shop_list;
