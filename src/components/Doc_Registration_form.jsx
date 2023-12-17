// import React from 'react'
import "../components_css/Doc_Registration_form.css";
import camera from "../assets/pdf.png";
import { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import Loader from "./sub_components/Loader";

// const arr = [
//   "Gynaecologist",
//   "Cardiologist",
//   "ENT specialist",
//   "Pediatrician",
//   "Dermatologist",
//   "Neurologist",
//   "Oncologist",
//   "Orthopaedist",
//   "Endocrinologist",
//   "General Medicine",
//   "Anaesthesiologist",
//   "Dentist",
//   "Nephrologist",
//   "Ophthalmology",
//   "Psychiatrists",
//   "Pulmonologist",
//   "Radiologist",
//   "Geriatrician",
//   "Veterinarian",
//   "Allergist",
//   "Audiologist",
//   "Pathologist",
//   "Surgeon",
//   "Dietitian",
// ];

const Doc_Registration_form = () => {
  const API = import.meta.env.VITE_API;
  // const [toggle,settoggle]=useState(false)
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [house_street_no, setHouse_street_no] = useState("");
  const [colony_locality, setColony_locality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [extra_mobile, setExtra_mobile] = useState("");
  const [languages, setLanguages] = useState("");
  const [physical_info, setPhysical_info] = useState("");
  const [virtual, setVirtual] = useState("");
  const [Photo, setPhoto] = useState(null);
  const [loader, setLoader] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(
      name,
      email,
      mobile,
      qualification,
      specialization,
      experience,
      gender,
      age,
      blood_group,
      house_street_no,
      colony_locality,
      city,
      state,
      country,
      pincode,
      extra_mobile,
      languages,
      physical_info,
      virtual,
      Photo
    );
    const det = new FormData();
    setLoader(true)
    det.append("name", name);
    det.append("mobile", mobile);
    det.append("email", email);
    det.append("qualification", qualification);
    det.append("specialization", specialization);
    det.append("experience", experience);
    det.append("gender", gender);
    det.append("age", age);
    det.append("blood_group", blood_group);
    det.append("house_street_no", house_street_no);
    det.append("colony_locality", colony_locality);
    det.append("city", city);
    det.append("state", state);
    det.append("country", country);
    det.append("pincode", pincode);
    det.append("extra_mobile", extra_mobile);
    det.append("languages", languages);
    det.append("physical_info", physical_info);
    det.append("virtual", virtual);
    det.append("Photo", Photo);
    try {
     const res = await axios({
        method: "post",
        url: `${API}/api/doctor/addDoctor`,
        data: det,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log(res)
      setLoader(false)
      alert("Registration Successful")
    } catch (error) {
      console.log(error)
      setLoader(false)
      alert(error.message)
    }

    
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="Doc_reg_form">
          <div className="main">
            <div id="header">
              <span>Doctor Registration form</span>
            </div>
          </div>
          <form id="DRP_form" onSubmit={submitForm}>
            <div id="DRP_line"></div>
            <div>
              <h1>Profile</h1>
              <div className="DRP_form_deta">
                <div className="Doc_box">
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Mobile No<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      id="name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Email Address">
                    Email Address <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id=""
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Experience">
                    Profile Image <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <div>
                      <input
                        type="file"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Qualification">
                    Qualification <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id=""
                      type="text"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Qualification">
                    Specialisation <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id="name"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Experience">
                    Experience (years) <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id="name"
                      type="text"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="name">
                    Gender <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      name=""
                      id=""
                    >
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
                    <input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      id="name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="name">
                    Blood Group <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      value={blood_group}
                      onChange={(e) => setBlood_group(e.target.value)}
                      name=""
                      id=""
                    >
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
            <div>
              <h1>Address</h1>
              <div className="DRP_form_deta">
                <div className="Doc_box">
                  <label htmlFor="Email Address">
                    House no./Street/Area <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id=""
                      value={house_street_no}
                      onChange={(e) => setHouse_street_no(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="">
                    Colony/Street/Locality <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id=""
                      value={colony_locality}
                      onChange={(e) => setColony_locality(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Experience">
                    City <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="name">
                    State <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id="name"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="Doc_box">
                  <label htmlFor="name">
                    Country<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      name=""
                      id=""
                    >
                      <option value="">Select an option</option>
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
                    <input
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      id="name"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="DRP_line"></div>
            <div>
              <h1>Other Information</h1>
              <div className="DRP_form_deta">
                <div className="Doc_box">
                  <label htmlFor="name">Extra Mobile no.</label>
                  <div className="Doc_input_box">
                    <input
                      id="name"
                      type="text"
                      value={extra_mobile}
                      onChange={(e) => setExtra_mobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Language<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      value={languages}
                      onChange={(e) => setLanguages(e.target.value)}
                      name=""
                      id=""
                    >
                      <option value="">Select an option</option>
                      <option value="Any">Any</option>
                      <option value="Urdu">Urdu</option>
                      <option value="Hindi">Hindi</option>
                      <option value="English">English</option>
                      <option value="Serbian">Serbian</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Nepali">Nepali</option>
                      <option value="Maithili">Maithili</option>
                      <option value="Bhojpuri">Bhojpuri</option>
                      <option value="Magahi">Magahi</option>
                      <option value="Vajjika">Vajjika</option>
                      <option value="Angika">Angika</option>
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Email Address">
                    Physical <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      value={physical_info}
                      onChange={(e) => setPhysical_info(e.target.value)}
                      name=""
                      id=""
                    >
                      <option value="">Select an option</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Qualification">
                    Virtual <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      value={virtual}
                      onChange={(e) => setVirtual(e.target.value)}
                      name=""
                      id=""
                    >
                      <option value="">Select an option</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div id="DRP_line"></div>
            <div>
              <h1>Legal Documents</h1>
              <div className="DRP_form_deta">
                <div className="Doc_box">
                  <label htmlFor="name">
                    Medical Registration Proof <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <div>

                    <input
                    
                      type="file"
                      name=""
                      id="MRP"
                      />
                      </div>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Degree Proof<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                   <div>

                    <input  type="file" name="" id="DP" />
                   </div>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Email Address">
                    Govt-Issued Photo ID Proof* <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <div>

                    <input  id="ID" type="file" name="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="DRP_line"></div>
            <div id="DRP_btn">
              <button
                className="DRP_submit_btn"
                type="submit"
              >
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Doc_Registration_form;
