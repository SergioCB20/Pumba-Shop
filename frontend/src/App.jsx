import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

const App = () => {
  const isLoginPage = window.location.pathname === '/Login';

  return (
    <div className="container bg-white">
      <BrowserRouter>
        {!isLoginPage && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        {!isLoginPage && <Footer />}
      </BrowserRouter>
    </div>
  );
};

export default App;
