// import React from 'react'
import "../components_css/Medicines.css";
import doc from '../assets/Medicines/doct.png'
import box from '../assets/Medicines/box.png'
import group from '../assets/Medicines/Group.svg'
import location from '../assets/location.svg'

const Medicines = () => {
  return (
    <>
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
                    <input type="text" placeholder="Search Location" />
                </div>
            </form>
            <div id="sub"><span>Submit</span></div>
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
                    <p id="con">Buy subscription & get free Delivery at home on order above &#8377;149</p>
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
    </>
  );
};

export default Medicines;
