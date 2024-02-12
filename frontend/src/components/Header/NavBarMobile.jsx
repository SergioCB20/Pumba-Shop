import { useState, useEffect, useRef } from "react";
import React from "react";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductosContext } from "../../context/ProductosContext";

export default function NavBarMobile({
  handleSearch,
  categorias,
}) {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [productosMostrados, setProductosMostrados] = useState([])
  const { user } = useUserContext();
  const {productos} = useProductosContext();
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    
    let productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTextValue.toLowerCase())
    );
    
    let mostrar = productosFiltrados.slice(0, 5);
    setProductosMostrados(mostrar);
  };

  
  const handleOpenSideBar = () => {
    setIsOpenSideBar(true);
  };
  const handleCloseSideBar = () => {
    setIsOpenSideBar(false);
  };

  const handleOpenSearch = () => {
    setIsOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setIsOpenSearch(false);
  };

  return (
    <div className="flex flex-row justify-around w-full ilg:hidden">
      <button type="button" onClick={handleOpenSideBar}>
        <i className="fa-solid fa-bars fa-2x"></i>
      </button>
      <div className="h-full w-20 ps-1 pt-3">
        <Link to="/">
          <img src={Logo} alt="logo_pumba" className="w-full" />
        </Link>
      </div>
      <div className="ms-2 py-5 flex flex-row gap-5">
        <Link to="/Login">
          <div className="flex flex-col items-center">
          <i className="fa-solid fa-user fa-2x "></i>
          {user ? <p className="text-xs ">{user.name}</p> : <p> </p>}
          </div>
        </Link>
        <button type="button" onClick={handleOpenSearch}>
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </button>
        <Link to="/Cart">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
        </Link>
      </div>
      {/* SideBar */}
      <div
        className={`absolute inset-0 h-screen w-screen transition-all ${
          isOpenSideBar ? "translate-x-0" : "translate-x-hiddenLeft"
        }`}
      >
        <button
          type="button"
          onClick={handleCloseSideBar}
          className="absolute inset-x-5 pt-5"
        >
          <i className="fa-solid fa-x fa-2x"></i>
        </button>
        <ul className="flex flex-col justify-around items-center h-full bg-white">
          {categorias.map((categoria, idx) => (
            <a href="#" key={idx}>
              <li className="font-bold text-center">
                {categoria.toUpperCase()}
              </li>
            </a>
          ))}
        </ul>
      </div>
      {/* Buscador */}
      <div
        className={`absolute right-0 top-0 h-screen w-screen bg-white transition-all ${
          isOpenSearch ? "translate-x-0" : "translate-x-hiddenRight"
        }`}
      >
        <div className="border-b-2 border-black h-10 flex rounded-md flex-row pt-3 text-sm bg-slate-300">
          <button type="button" onClick={handleCloseSearch} className="px-4">
            <i className="fa-solid fa-chevron-left "></i>
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
        <ul className="ps-5">
        {searchText && productosMostrados.length > 0 && productosMostrados.map((producto) => (
          <li key={producto.ID_producto} className="w-full text-base">
          <Link to={`/tienda/${producto.ID_producto}`} onClick={()=>setIsOpenSearch(false)}>
            <div className="w-full flex flex-row gap-14">
              <img src={producto.url_img} alt="" className="h-6" />
              <p className="max-w-full">{producto.nombre}</p>
            </div>
          </Link>
        </li>
        ))}
      </ul>
      </div>
      {/* Carrito de compras */}
    </div>
  );
}
