import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/home";
import { CartPage } from "./pages/cart";
import { ThankYouPage } from "./pages/thankyou";
import Navbar from "./pages/navbar";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/thankyou" element={<ThankYouPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
