import React, { useState } from "react";
import "./RegisterForm.css";
import CustomerService from "./API/CustomerService";

function RegisterForm() {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const addNewCustomer = (e) => {
    e.preventDefault();

    if (
      user.firstName.trim().length === 0 ||
      user.lastName.trim().length === 0 ||
      user.email.trim().length === 0 ||
      +user.phone.trim().length === 0 ||
      user.password.trim().length === 0
    ) {
      return;
    }
    CustomerService.saveUser(user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setUser({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="firstname">firstname</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="phone">phone</label>
          <input
            type="number"
            name="phone"
            value={user.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={addNewCustomer}>
          Register Now
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
