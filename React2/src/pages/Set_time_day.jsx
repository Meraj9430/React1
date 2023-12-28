// import React from 'react'
import "../Page_css/Set_time_day.css";
import { useState, useContext } from "react";
import Appcontaxt from "../context_API/Appcontext";
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

const Set_time_day = () => {
  const api = import.meta.env.VITE_API;
  const [day, setday] = useState([]);
  const [startTime, setStarttime] = useState("");
  const [endTime, setEndtime] = useState("");
  const [fee, setFee] = useState("");
  const [morning, setMorning] = useState([]);
  const [after, setAfternoon] = useState([]);
  const [eve, setEvening] = useState([]);
  const { Z } = useContext(Appcontaxt);
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

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/api/timeSlot/addDoctor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          doctorId:localStorage.getItem('doctorId'),
          days: day,
          start_time: startTime,
          end_time: endTime,
          fee: fee,
          morning: morning,
          afternoon: after,
          evening: eve,
        }),
      });
      const deta = await res.json();
      console.log(deta);
      if (deta.success) {
        alert(`Logged in Successfully `);
      } else {
        alert(`${deta.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div id="Set_t_d">
        <div>
          <p className="set_header">Select working days (7 days selected){Z}</p>
          <div id="set_day_btn">
            <div className="day_btn" onClick={() => handileday("MON")}>
              <span>MON</span>
            </div>
            <div className="day_btn" onClick={() => handileday("TUE")}>
              <span>TUE</span>
            </div>
            <div className="day_btn" onClick={() => handileday("WED")}>
              <span>WED</span>
            </div>
            <div className="day_btn" onClick={() => handileday("THU")}>
              <span>THU</span>
            </div>
            <div className="day_btn" onClick={() => handileday("FRI")}>
              <span>FRI</span>
            </div>
            <div className="day_btn" onClick={() => handileday("SAT")}>
              <span>SAT</span>
            </div>
            <div className="day_btn" onClick={() => handileday("SUN")}>
              <span>SUN</span>
            </div>
          </div>
          <div className="select_day">
            {day.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>

          <p className="set_header">Morning Time slots</p>
          <div className="select_day">
            {morning.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>
          <p className="set_header">Afternoon Time slots</p>
          <div className="select_day">
            {after.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>
          <p className="set_header">Evening Time slots</p>
          <div className="select_day">
            {eve.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="set_header">Select working hours</p>
          <div className="set_day_time_form">
            <div className="set_time_select">
              <select onChange={(e) => setStarttime(e.target.value)} id="">
                <option value="">Select Time</option>
                {option.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>

            <p>To</p>
            <div className="set_time_select">
              <select onChange={(e) => setEndtime(e.target.value)}>
                <option value="">Select Time</option>
                {option.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
            <div className="set_time_select">
              <select onChange={(e) => setEndtime(e.target.value)}>
                <option value="">Time interval</option>
                {interval.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
            <div className="set_time_select">
              <input
                type="text"
                placeholder="Dr Fee"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>
          </div>
          <div className="set_day_time_form">
            <div className="set_time_select">
              <select onChange={(e) => handile_mor(e.target.value)}>
                <option value="">Morning</option>
                {mor.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
            <div className="set_time_select">
              <select onChange={(e) => handile_after(e.target.value)}>
                <option value="">Afternoon</option>
                {afternoon.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
            <div className="set_time_select">
              <select onChange={(e) => handile_evening(e.target.value)}>
                <option value="">Evening</option>
                {evening.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="set_day_time_form">
            <button onClick={handlesubmit} className="set_save_btn">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Set_time_day;
