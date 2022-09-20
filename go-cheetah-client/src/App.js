import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import NewRegister from "./components/NewRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomerList from "./components/CustomerList";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<HeroSection />} />
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/register" element={<NewRegister />} />
          <Route path="/customerlist" element={<CustomerList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
