import React from 'react'
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

export default function NavBarDeskstop({handleSearch, handleChange,categorias,searchText}) {
  return (
    <div className="flex-row justify-around w-full hidden ilg:flex">
    <div className="h-full w-32 px-1 pt-3">
      <img src={Logo} alt="logo_pumba" className="w-full" />
    </div>
    <ul className="grid self-end pb-5 w-3/4 lg:w-1/2  items-center">
      <div className="flex flex-row justify-around font-medium">
        {categorias.map((categoria, idx) => (
          <li key={idx} className="hover:font-bold">
            <a href="#">{categoria.toUpperCase()}</a>
          </li>
        ))}
      </div>
    </ul>
    <div className="flex flex-row gap-5">
      <div className="border-2 border-black h-10 self-end mb-4 hidden rounded-md flex-row pt-3 text-xs ilg:flex lg:text-sm ilg:w-32 lg:w-64">
        <i className="fa-solid fa-magnifying-glass px-4"></i>
        <input
          type="text"
          name="buscador"
          placeholder="Busca algo..."
          id="buscador"
          onKeyDown={handleSearch}
          value={searchText}
          onChange={handleChange}
          className="focus:outline-none focus:border-none h-3/4 w-20 lg:w-full"
        />
      </div>
      <div className="ps-2 py-10 flex flex-row gap-5">
        <Link to="/Login">
          <i className="fa-solid fa-user fa-2x "></i>
        </Link>
        <Link to="/Cart">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
        </Link>
      </div>
    </div>
  </div>
  )
}
