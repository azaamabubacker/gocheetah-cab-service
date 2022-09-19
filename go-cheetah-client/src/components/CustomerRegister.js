import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import CustomerService from "../services/CustomerService";

function CustomerRegister() {
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
    CustomerService.saveUser(user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create an Account!
          </h1>
        </div>
        <div className="items-center justify-center h-8 w-full my-4">
          <label htmlFor="email-address" className="sr-only"></label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="First Name"
          ></input>
        </div>
        <div className="items-center justify-center h-8 w-full my-4">
          <label htmlFor="email-address" className="sr-only"></label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="items-center justify-center h-8 w-full my-4">
          <label htmlFor="email-address" className="sr-only"></label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email Address"
          ></input>
        </div>
        <div className="items-center justify-center h-8 w-full my-4">
          <label htmlFor="email-address" className="sr-only"></label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={(e) => handleChange(e)}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Phone"
          ></input>
        </div>
        <div className="items-center justify-center h-8 w-full my-4">
          <label htmlFor="email-address" className="sr-only"></label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          ></input>
        </div>

        <div>
          <button
            onClick={addNewCustomer}
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Register Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegister;
