import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://127.0.0.1:8080/api/customers";
class CustomerService {
  saveUser(user) {
    return axios.post(CUSTOMER_API_BASE_URL, user);
  }
  // getCustomerById(id) {
  //   return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  // }
}
export default new CustomerService();
