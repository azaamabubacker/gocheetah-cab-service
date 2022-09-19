import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="main_head">
      <div className="nav">
        <h1 onClick={navigateHome} className="logo">
          GC.
        </h1>
        <ul>
          <li>
            <a href="#" onClick={navigateToRegister}>
              Register
            </a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
