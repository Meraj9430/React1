/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
import "../components_css/Doc_Registration_form.css";
import { useState } from "react";
// import axios from "axios";
import FormData from "form-data";
import Loader from "./sub_components/Loader";
import { useNavigate } from "react-router-dom";

const arr = [
  "Dermatology",
  "Endocrinologist",
  "Gastroenterology",
  "Oncologist",
  "Pediatrician",
  "Cardiology",
  "Family Medicine",
  "Neurology",
  "Obstettrics and Gynecology",
  "Radiologists",
  "Anesthesiology",
  "Geriatrics",
  "Internal Medicine",
  "Nephrology",
  "Ophthalmology",
  "Psychiatrists",
  "Hospice and palliative medicine",
  "Pulmonologists",
  "Clinical Neurophysiology",
  "Emergency Medicine",
  "Hematology",
  "Inectious disease",
  "Microsurgery",
  "Otolaryngologists",
];

const arr2 = [
  " Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];
const option = [
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
];
const mor = [
  "5:00AM to 7:00AM",
  "7:00AM to 9:00AM",
  "9:00AM to 11:00AM",
  "11:00AM to 12:00PM",
];
const afternoon = ["12:00PM to 2:00PM", "2:00PM to 4:00PM"];
const evening = [
  "4:00 PM to 6:00PM",
  "6:00 PM to 8:00PM",
  "8:00 PM to 10:00PM",
];
const interval = [
  "10 Minutes",
  "20 Minutes",
  "30 Minutes",
  "40 Minutes",
  "50 Minutes",
  "1 Hour",
  "2 Hour",
  "3 Hour",
];
const Day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Doc_Registration_form = () => {
  const API = import.meta.env.VITE_API;
  const Navigate = useNavigate();
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
  const [pass, setPass] = useState("");
  const [day, setday] = useState([]);
  const [startTime, setStarttime] = useState("");
  const [endTime, setEndtime] = useState("");
  const [fee, setFee] = useState("");
  const [tinterval, settinterval] = useState("");
  const [morning, setMorning] = useState([]);
  const [after, setAfternoon] = useState([]);
  const [eve, setEvening] = useState([]);
  const [Photo, setPhoto] = useState(null);
  const [Photo2, setPhoto2] = useState(null);
  const [Photo3, setPhoto3] = useState(null);
  const [Photo4, setPhoto4] = useState(null);
  const [Photo5, setPhoto5] = useState(null);
  const [loader, setLoader] = useState(false);

  const handileday = (e) => {
    if (day.length <= 6) {
      const arr = [...day, e];
      setday(arr);
    }
  };
  const handile_mor = (e) => {
    const arr = [...morning, e];
    setMorning(arr);
  };
  const handile_after = (e) => {
    const arr = [...after, e];
    setAfternoon(arr);
  };
  const handile_evening = (e) => {
    const arr = [...eve, e];
    setEvening(arr);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let det = new FormData();
      setLoader(true);
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
      det.append("password", pass);
      det.append("days", day);
      det.append("start_time", startTime);
      det.append("end_time", endTime);
      det.append("fee", fee);
      det.append("interval", tinterval);
      det.append("morning", morning);
      det.append("afternoon", after);
      det.append("evening", eve);
      det.append("Photo", Photo);
      det.append("Photo2", Photo2);
      det.append("Photo3", Photo3);
      det.append("Photo4", Photo4);
      det.append("Photo5", Photo5);

      //  const res = await axios({
      //     method: "post",
      //     url: `${API}/api/doctor/addDoctor`,
      //     data: det,
      //     headers: { "Content-Type": "multipart/form-data" },
      //   })
      //   console.log(res)
      //   setLoader(false)
      //   alert(res)
      //   Navigate('/')
      const rawResponse = await fetch(`${API}/api/doctor/addDoctor`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          // "Content-Type": "multipart/form-data",
        },
        body: det,
      });
      const content = await rawResponse.json();
      if (content.success) {
        alert("Registration successful");
        Navigate("/");
        setLoader(false);
        // setSign(false);
      } else {
        alert(content.error);
        setLoader(false);
      }
      console.log(content);
    } catch (err) {
      console.log(err.status);
      setLoader(false);
      alert(err);
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
            {/* <div id="DRP_line"></div> */}
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
                  <label htmlFor="Experience">
                    Password <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      type="text"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      required
                    />
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
                    <select
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {arr.map((e, i) => (
                        <option key={i} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
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
                      required
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
                      required
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
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="">Colony/Street/Locality</label>
                  <div className="Doc_input_box">
                    <input
                      id=""
                      value={colony_locality}
                      onChange={(e) => setColony_locality(e.target.value)}
                      type="text"
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
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {arr2.map((e, i) => (
                        <option key={i} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
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
                      required
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
              <h1>Set Date/Time</h1>
              <div className="DRP_form_deta">
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Dr Fee<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <input
                      id="name"
                      type="text"
                      value={fee}
                      onChange={(e) => setFee(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Day<span>*</span>{day.map((e=>(<span style={{color:'black'}} key={e}>{e},</span>)))}
                  </label>
                  <div className="Doc_input_box">
                    <select
                      
                      onChange={(e) => handileday(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {Day.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Start Time<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      
                      onChange={(e) => setStarttime(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {option.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    End Time<span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
                      
                      onChange={(e) => setEndtime(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {option.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Mobile No">
                    Morning<span>*</span>{morning.map((e=>(<span style={{color:'black'}} key={e}>{e} , </span>)))}
                  </label>
                  <div className="Doc_input_box">
                    <select
                     
                      onChange={(e) => handile_mor(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {mor.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Email Address">
                    Afternoon <span>*</span>{after.map((e=>(<span style={{color:'black'}} key={e}>{e} , </span>)))}
                  </label>
                  <div className="Doc_input_box">
                    <select
                      
                      onChange={(e) => handile_after(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {afternoon.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Qualification">
                    Evening <span>*</span>{eve.map((e=>(<span style={{color:'black'}} key={e}>{e} , </span>)))}
                  </label>
                  <div className="Doc_input_box">
                    <select
                      
                      onChange={(e) => handile_evening(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {evening.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Qualification">
                    Time interval <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <select
    
                      onChange={(e) => settinterval(e.target.value)}
                      name=""
                      id=""
                      required
                    >
                      <option value="">Select an option</option>
                      {interval.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
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
                      required
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
                      required
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
                      required
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
                        required
                        type="file"
                        name=""
                        id="MRP"
                        onChange={(e) => setPhoto2(e.target.files[0])}
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
                      <input
                        type="file"
                        name=""
                        id="DP"
                        required
                        onChange={(e) => setPhoto3(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Email Address">
                    Govt-Issued Photo ID Proof* <span>*</span>
                  </label>
                  <div className="Doc_input_box">
                    <div>
                      <input
                        id="ID"
                        type="file"
                        name=""
                        required
                        onChange={(e) => setPhoto4(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
                <div className="Doc_box">
                  <label htmlFor="Email Address">Add Photo</label>
                  <div className="Doc_input_box">
                    <div>
                      <input
                        id="ID"
                        type="file"
                        name=""
                        onChange={(e) => setPhoto5(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="DRP_line"></div>
            <div id="DRP_btn">
              <button className="DRP_submit_btn" type="submit">
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
