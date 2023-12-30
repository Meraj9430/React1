/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../../components_css/auth/Login.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ close, setview, setSign }) => {
  const API = import.meta.env.VITE_API;
  const Navigate = useNavigate()
  const [input, setInput] = useState({
    FirstName: "",
    LastName: "",
    City: "",
    Mobile: "",
    Email: "",
    Password: "",
    Referral: " ",
  });
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        close();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onkeydown);
    };
  });
  const handlechang = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handileClick = () => {
    setview(true);
    setSign(false);
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const rawResponse = await fetch(`${API}/api/userSignup_login/UserSignup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const content = await rawResponse.json();
      if(content.success){
        alert("Registration successful")
        Navigate('/')
        setSign(false);
      }else{
        alert(content.error)
      }
      console.log(content)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="modalback">
        <div className="modalBody">
          <div className="modalcontant">
            <div>
              <div className="modalheader">
                <span>
                  <h5>Sign Up👋</h5>
                </span>
                <span onClick={close}> ❌</span>
              </div>
              <form className="login_form" onSubmit={onsubmit}>
                <div className="login_input">
                  <input
                    type="text"
                    value={input.FirstName}
                    name="FirstName"
                    placeholder="First Name*"
                    onChange={handlechang}
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="text"
                    name="LastName"
                    value={input.LastName}
                    placeholder="Last Name*"
                    onChange={handlechang}
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="text"
                    name="City"
                    value={input.City}
                    placeholder="City*"
                    onChange={handlechang}
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="text"
                    name="Mobile"
                    value={input.Mobile}
                    placeholder="Phone*"
                    onChange={handlechang}
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="email"
                    name="Email"
                    value={input.Email}
                    placeholder="Email*"
                    onChange={handlechang}
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="password"
                    placeholder="Password*"
                    name="Password"
                    value={input.Password}
                    onChange={handlechang}
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="text"
                    placeholder="Referral"
                    name="Referral"
                    value={input.Referral}
                    onChange={handlechang}
                  />
                </div>
                <button type="submit" className="login_btn">
                  Sing Up👋
                </button>
                <div style={{ margin: "8px 0" }}>
                  <p style={{ color: "rgba(0, 0, 0, 0.468)" }}>
                    Already have an account?
                    <span
                      onClick={handileClick}
                      style={{ color: "green", cursor: "pointer" }}
                    >
                      Log In
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
