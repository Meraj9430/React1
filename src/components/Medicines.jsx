// import React from 'react'
import "../components_css/Medicines.css";
import doc from "../assets/Medicines/doct.png";
import box from "../assets/Medicines/box.png";
import group from "../assets/Medicines/Group.svg";
import location from "../assets/location.svg";
import Medical_shop_list from "./sub_components/Medical_shop_list";
import { useState } from "react";

const Medicines = () => {
  const [deta, setdeta] = useState("");
  const [apideta, setapiDeta] = useState([]);
  const [toggle, settoggle] = useState(true);
  const handileClick = async () => {
    if (deta) {
      const res = await fetch("https://dummyjson.com/products?limit=10");
      try {
        const r = await res.json();
        setapiDeta(r.products);
        settoggle(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {toggle ? (
        <div className="container">
          <div className="main">
            <div id="header">
              <span>Find a chemist/ medical shop near by</span>
            </div>
          </div>
          <div id="main2">
            <div id="first">
              <h1 className="head">We Deliver to your Doorstep</h1>
              <p className="head_p">
                When You need them, pharamacist ensure your medicine reach you
              </p>
            </div>
            <div id="second">
              <span>Your area/ pincode</span>

              <form>
                <div id="input_box">
                  <img src={location} alt="" />
                  <span>I</span>
                  <input
                    type="text"
                    value={deta}
                    onChange={(e) => setdeta(e.target.value)}
                    placeholder="Search Location"
                  />
                </div>
              </form>
              <div id="sub" onClick={handileClick}>
                <span>Submit</span>
              </div>
            </div>
            <div id="third">
              <div>
                <img id="doct" src={doc} alt="" />
              </div>
              <div>
                <img id="group_img" src={group} alt="" />
              </div>
            </div>
          </div>
          <div id="main3">
            <div id="item1">
              <div id="buy">
                <p id="con">
                  Buy subscription & get free Delivery at home on order above
                  &#8377;149
                </p>
                <div id="btn_g">
                  <span>GET SUBSCRIPTION</span>
                </div>
              </div>
              <div>
                <img id="box_img" src={box} alt="" />
              </div>
            </div>
            <div id="item2">
              <div id="btn-or">
                <span>ORDER NOW</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Medical_shop_list apideta={apideta} header={deta} />
        </>
      )}
    </>
  );
};

export default Medicines;
