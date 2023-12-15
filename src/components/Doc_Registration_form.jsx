// import React from 'react'
import "../components_css/Doc_Registration_form.css";
import camera from '../assets/pdf.png'

const Doc_Registration_form = () => {
  return (
    <>
      <div className="Doc_reg_form">
        <div className="main">
          <div id="header">
            <span>Doctor Registration form</span>
          </div>
        </div>
        <form id="DRP_form">
        <div id="DRP_line"></div>
          <div >
            <h1>Profile</h1>
            <div className="DRP_form_deta">
              <div className="Doc_box">
                <label htmlFor="name">
                  Name <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Mobile No">
                Mobile No<span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Email Address">
                Email Address <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Qualification">
                Qualification <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Qualification">
                Specialisation <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Experience">
                Experience (years) <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="name">
                Gender <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <select name="" id="">                 
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="name">
                Age <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="name">
                Blood Group <span>*</span>
                </label>
                <div className="Doc_input_box">
                <select name="" id="">                 
                    <option value="">Select an option</option>
                    <option value="O-">O-</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="A+">A+</option>
                    <option value="B-">B-</option>
                    <option value="B+">B+</option>
                    <option value="AB-">AB-</option>
                    <option value="AB+">AB+</option>
                    
                  </select>
                </div>
              </div>
              
            </div>
          </div>
          <div id="DRP_line"></div>
          <div >
            <h1>Address</h1>
            <div className="DRP_form_deta">
              
              <div className="Doc_box">
                <label htmlFor="Email Address">
                House no./Street/Area <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Qualification">
                Colony/Street/Locality <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Experience">
                City <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="name">
                State <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              
              <div className="Doc_box">
                <label htmlFor="name">
                Country<span>*</span>
                </label>
                <div className="Doc_input_box">
                <select name="" id="">                 
                    <option value="">Select an option</option>
                    <option value="Afganistan">Afganistan</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Burma">Burma</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Yemen">Yemen</option>
                                      
                  </select>
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="name">
                Pincode<span>*</span>
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text" required />
                </div>
              </div>
              
            </div>
          </div>
          <div id="DRP_line"></div>
          <div >
            <h1>Other Information</h1>
            <div className="DRP_form_deta">
              <div className="Doc_box">
                <label htmlFor="name">
                Extra Mobile no.
                </label>
                <div className="Doc_input_box">
                  <input id="name" type="text"  />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Mobile No">
                Language<span>*</span>
                </label>
                <div className="Doc_input_box">
                  <select name="" id="">                 
                    <option value="">Select an option</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Nepali">Nepali</option>                   
                  </select>
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Email Address">
                Physical <span>*</span>
                </label>
                <div className="Doc_input_box">
                <select name="" id="">                 
                    <option value="">Select an option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>                                     
                  </select>
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Qualification">
                Virtual <span>*</span>
                </label>
                <div className="Doc_input_box">
                <select name="" id="">                 
                    <option value="">Select an option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>                                     
                  </select>
                </div>
              </div>

              
            </div>
          </div>
          <div id="DRP_line"></div>
          <div >
            <h1>Legal Documents</h1>
            <div className="DRP_form_deta">
              <div className="Doc_box">
                <label htmlFor="name">
                Medical Registration Proof <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <label htmlFor="MRP">

                <img className="pdf" src={camera} alt="img" />
                  </label>
                  <input className="D_r_p_file" type="file" name="" id="MRP" />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Mobile No">
                Degree Proof<span>*</span>
                </label>
                <div className="Doc_input_box">
                  <label htmlFor="DP">

                <img className="pdf" src={camera} alt="img" />
                  </label>
                  <input className="D_r_p_file" type="file" name="" id="DP" />
                </div>
              </div>
              <div className="Doc_box">
                <label htmlFor="Email Address">
                Govt-Issued Photo ID Proof* <span>*</span>
                </label>
                <div className="Doc_input_box">
                  <label htmlFor="ID">
                  <img className="pdf" src={camera} alt="img" />
                  </label>
                  <input className="D_r_p_file" id="ID" type="file" name=""  />
                </div>
              </div>
            </div>
          </div>
          <div id="DRP_line"></div>
            <div id="DRP_btn">
              <button className="DRP_submit_btn" type="submit"> <span>Save</span> </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Doc_Registration_form;
