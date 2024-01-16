import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container bg-white">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
