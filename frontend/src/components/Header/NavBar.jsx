import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";

export default function NavBar({ categorias }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      alert("Aún no funciona, pronto podra buscar" + searchText + "!");
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="h-24 w-full border-black border-2 flex flex-row px-10 bg-white">
      <div className="h-full w-32 px-1 pt-3">
        <img src={Logo} alt="logo_pumba" className="w-full" />
      </div>
      <ul className="grid self-end pb-5 ps-5 w-8/12 justify-items-center">
        <div className="flex flex-row gap-12 font-medium">
          {categorias.map((categoria, idx) => (
            <li key={idx} className="hover:font-bold">
              <a href="#">{categoria.toUpperCase()}</a>
            </li>
          ))}
        </div>
      </ul>
      <div className="w-68 border-2 border-black h-10 self-end mb-3 rounded-md flex flex-row pt-3">
        <i className="fa-solid fa-magnifying-glass px-4"></i>
        <input
          type="text"
          name="buscador"
          placeholder="Busca algo..."
          id="buscador"
          onKeyDown={handleSearch}
          value={searchText}
          onChange={handleChange}
          className="focus:outline-none focus:border-none h-3/4"
        />
      </div>
      <div className="p-10">
      <Link to="/Login"><i className="fa-solid fa-user fa-2x"></i></Link>
      </div>
    </nav>
  );
}
