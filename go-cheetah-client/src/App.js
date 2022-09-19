import "./App.css";
import Hero from "./components/Hero";
import CustomerRegister from "./components/CustomerRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/" element={<Hero />}></Route>
          <Route path="/register" element={<CustomerRegister />}></Route>
          <Route path="/customer-profile" element={<NavBar />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
