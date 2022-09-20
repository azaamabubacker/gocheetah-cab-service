import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerList.css";
import CustomerService from "./API/CustomerService";

function CustomerList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getCustomers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCustomer = (e, id) => {
    e.preventDefault();
    CustomerService.deleteCustomer(id).then((res) => {
      if (users) {
        setUsers((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };

  return (
    <div>
      <button className="add-customer" onClick={() => navigate("/register")}>
        Add Customer
      </button>
      <h2>List of Customers</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone</th>

              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>

                  <td className="cursor">Edit</td>
                  <td
                    className="cursor"
                    onClick={(e, id) => deleteCustomer(e, user.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
