/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../../components_css/auth/Login.css";

const Login = ({ close, setview, setSign }) => {
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
              <form className="login_form">
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
