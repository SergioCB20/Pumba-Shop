import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import PumbaPlus from "./pages/PumbaPlus/PumbaPlus";

const App = () => {
  useEffect(() => {
    const disableTouchScroll = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', disableTouchScroll, { passive: false });

    return () => {
      document.removeEventListener('touchmove', disableTouchScroll);
    };
  }, []);
  return (
    <div className="w-full bg-white text-xs relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/PumbaPlus" element={<PumbaPlus/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
