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
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);

    const handleOpenSideBar = ()=>{
        setIsOpenSideBar(true);
    }
    const handleCloseSideBar = ()=>{
        setIsOpenSideBar(false);
    }

    const handleOpenSearch = ()=>{
        setIsOpenSearch(true);
    }
    const handleCloseSearch = ()=>{
        setIsOpenSearch(false);
    }
    
    const handleOpenCart = ()=>{
        setIsOpenCart(true);
    }
    const handleCloseCart = ()=>{
        setIsOpenCart(false);
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
        <button type="button" onClick={handleOpenSearch}>
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </button>
        <Link to="/Cart">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
        </Link>
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
      <div className={`absolute right-0 top-0 h-screen w-screen bg-white transition-all ${isOpenSearch?"translate-x-0":"translate-x-hiddenRight"}`}>
      <div className="border-b-2 border-black h-10 flex rounded-md flex-row pt-3 text-sm bg-slate-300">
      <button type="button" onClick={handleCloseSearch} className="px-4">
        <i class="fa-solid fa-chevron-left "></i>
      </button>
        <input
          type="text"
          name="buscador"
          placeholder="Busca algo..."
          id="buscador"
          onKeyDown={handleSearch}
          value={searchText}
          onChange={handleChange}
          className="focus:outline-none focus:border-none w-full pb-1 bg-slate-300"
        />
      </div>
      </div>
      {/* Carrito de compras */}
    </div>
  );
}
