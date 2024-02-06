import React from "react";
import { useState, useEffect } from "react";
import NavBarDeskstop from "./NavBarDeskstop";
import NavBarMobile from "./NavBarMobile";

export default function NavBar({ categorias}) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      alert("Aún no funciona, pronto podra buscar" + " " + searchText + "!");
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="h-16 w-full max-w-screens-2xl border-black border-2 flex justify-center px-10 bg-white ilg:h-24 ilg:text-sm">
      <NavBarDeskstop
        handleSearch={handleSearch}
        handleChange={handleChange}
        categorias={categorias}
        searchText={searchText}
      />
      <NavBarMobile
        handleSearch={handleSearch}
        handleChange={handleChange}
        categorias={categorias}
        searchText={searchText}
      />
    </nav>
  );
}
