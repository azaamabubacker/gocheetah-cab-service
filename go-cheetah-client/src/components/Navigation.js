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

  const navigateToCustomerList = () => {
    navigate("/customerlist");
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
            <a href="#" onClick={navigateToRegister}>
              Sign In
            </a>
          </li>
          <li>
            <a href="#" onClick={navigateToCustomerList}>
              Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
