/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../../components_css/auth/Login.css";

const Login = ({ close, setview, setSign }) => {
  const API = import.meta.env.VITE_API;
  const [input, setInput] = useState({
    Email: "",
    Password: "",
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
  const handileClick = () => {
    setview(false);
    setSign(true);
  };
  const handlechang = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formsubmit = async (e) => {
    e.preventDefault();
    // console.log(data)
    // dispatch(UserAuth(data))
    const res = await fetch(`${API}/api/userSignup_login/Userlogin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: input.Email,
        Password: input.Password,
        // expiresInMins: 60, // optional
      }),
    });
    const deta = await res.json();
    console.log(deta);
    localStorage.setItem("token", deta.user.token);
    localStorage.setItem("userId", deta.user.userId);
    setview(false);
    alert(`Logged in Successfully`);
    // if (deta.success) {
    //   localStorage.setItem("token", deta.user.token);
    //   localStorage.setItem("userId", deta.user.userId);
    //   setview(false);
    //   alert(`Logged in Successfully`);
    // }else{
    //   // alert(`${deta.error}`);
    // }

    
   
    // setLogout(true)
    
    // console.log(deta)
    // localStorage.setItem("token", deta.user.token);
    // localStorage.setItem("userId", deta.user.userId);

    // Navigate("dashboard");
    // getUserInfo()
    // dispatch(addUser(deta))
  };
  return (
    <div>
      <div className="modalback">
        <div className="modalBody">
          <div className="modalcontant">
            <div>
              <div className="modalheader">
                <span>
                  <h5>Hi, Welcome Back! 👋</h5>
                </span>
                <span onClick={close}> ❌</span>
              </div>
              <form className="login_form" onSubmit={formsubmit}>
                <div className="login_input">
                  <input
                    type="email"
                    name="Email"
                    value={input.Email}
                    onChange={handlechang}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="login_input">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    required
                    name="Password"
                    value={input.Password}
                    onChange={handlechang}
                  />
                </div>
                <button type="submit" className="login_btn">
                  Login
                </button>
                <div style={{ margin: "8px 0" }}>
                  <p style={{ color: "rgba(0, 0, 0, 0.468)" }}>
                    Don’t have an account?
                    <span
                      onClick={handileClick}
                      style={{ color: "green", cursor: "pointer" }}
                    >
                      Sign Up
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

export default Login;
