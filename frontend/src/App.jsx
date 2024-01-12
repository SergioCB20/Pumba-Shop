import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
