import { useState } from "react";
import React from "react";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

export default function NavBarMobile({
  handleSearch,
  handleChange,
  categorias,
  searchText,
}) {

    const [isOpenSideBar, setIsOpenSideBar] = useState(false);


    const handleOpenSideBar = ()=>{
        setIsOpenSideBar(true);
    }
    const handleCloseSideBar = ()=>{
        setIsOpenSideBar(false);
    }
  return (
    <div className="flex flex-row justify-around w-full ilg:hidden">
      <button type="button" onClick={handleOpenSideBar}>
        <i className="fa-solid fa-bars fa-2x"></i>
      </button>
      <div className="h-full w-20 ps-1 pt-3">
        <img src={Logo} alt="logo_pumba" className="w-full" />
      </div>
      <div className="ps-2 py-5 flex flex-row gap-10">
        <Link to="/Login">
          <i className="fa-solid fa-user fa-2x "></i>
        </Link>
        <button type="button">
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </button>
        <button type="button">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
        </button>
      </div>
      {/* SideBar */}
      <div className={`absolute inset-0 h-screen w-screen transition-all ${isOpenSideBar?"translate-x-0":"translate-x-hiddenLeft"}`}>
        <button type="button" onClick={handleCloseSideBar} className="absolute inset-x-5 pt-5">
            <i className="fa-solid fa-x fa-2x"></i>
        </button>
        <ul className="flex flex-col justify-around items-center h-full bg-white">
          {categorias.map((categoria, idx) => (
            <a href="#">
            <li key={idx} className="font-bold text-center">
              {categoria.toUpperCase()}
            </li>
            </a>
          ))}
        </ul>
      </div>
      {/* Buscador */}
      {/* Carrito de compras */}
    </div>
  );
}
