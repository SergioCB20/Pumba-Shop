import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainBoton from "../Reusables/MainBoton";
import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";

const shine = keyframes`
0% {
  background-position: 100% 0;
}
100% {
  background-position: -100% 0;
}`;

const Spamer = styled.span`
  background-image: linear-gradient(90deg, transparent, black, transparent);
  background-size: 200% 100%;
  background-clip: text;
  color: transparent;
  animation: ${shine} 2s linear infinite;
`;

const Footer = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(
      location.pathname === "/Login" || location.pathname === "/Signin"
    );
  }, [location.pathname]);

  return (
    <footer className={isLogin ? "hidden" : ""}>
      <div className="w-full h-15 lg:h-32 bg-yellow-400 font-semibold text-xs lg:text-xl flex flex-row place-items-center justify-around">
        <p className="ps-5">
          SUBSCRIBETE A
          <Spamer>
            <Link to="/PumbaPlus"> PUMBAPLUS </Link>
          </Spamer>
          Y DISFRUTA DE DESCUENTOS EXCLUSIVOS
        </p>
        <MainBoton textoBoton="Subscribete Ahora" linkBoton="/PumbaPlus" />
      </div>
      <div className="w-full h-32 lg:h-40 lg:text-base text-white bg-slate-600 font-semibold flex place-items-center justify-center">
        <p>©Copyright: Sergio Chumbimuni Bustamante - Frontend Developer</p>
      </div>
    </footer>
  );
};
export default Footer;
