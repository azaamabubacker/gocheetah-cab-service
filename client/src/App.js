import "./App.css";
import Hero from "./components/Hero";
import CustomerRegister from "./components/CustomerRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/" element={<Hero />}></Route>
          <Route path="/register" element={<CustomerRegister />}></Route>
          <Route path="/nav" element={<NavBar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
