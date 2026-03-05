import React from "react";
import "./LoginPage.css";
import logo from "../assets/logo.jpeg";

function LoginPage() {
  return (
    <div className="login-wrapper">
      {/* PAGE TITLE */}
      <div className="login-header">
        <h1>LOGIN</h1>
      </div>

      {/* LOGIN CARD */}
      <div className="login-container">
        <div className="login-card">
          <img src={logo} alt="logo" className="login-logo" />

          <label>USERNAME</label>
          <input type="text" placeholder="Username" />

          <label>PASSWORD</label>
          <input type="password" placeholder="Password" />

          <div className="captcha-section">
            <img
              src="https://dummyimage.com/120x40/ffffff/000&text=QVP2Y2"
              alt="captcha"
              className="captcha-img"
            />

            <button className="refresh-btn">⟳</button>
          </div>

          <input type="text" placeholder="Enter CAPTCHA" />

          <button className="login-btn">LOG IN</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
