/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../../components_css/auth/Login.css";

const Signup = ({ close,setview,setSign }) => {
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
    setview(true);
    setSign(false);
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
            <form className="login_form">
            <div className="login_input">
                  <input type="email" placeholder="Enter Your Name" required />
                </div>
                <div className="login_input">
                  <input type="email" placeholder="Enter Your Phone" required />
                </div>
                <div className="login_input">
                  <input type="email" placeholder="Enter Your City" required />
                </div>
                <div className="login_input">
                  <input type="email" placeholder="Enter Your Email" required />
                </div>
                <div className="login_input">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    required
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
