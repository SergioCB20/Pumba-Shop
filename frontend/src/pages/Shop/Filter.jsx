import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainBoton from "../../components/Reusables/MainBoton";
import { Player } from "@lordicon/react";
import CROSS_I from "../../animated_icons/crossIcon.json";

export default function Filter({ isDisplayed, setter, filters, setFilters }) {
  const location = useLocation();
  const crossIconRef = useRef();
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(()=>{
    resetFilters()
  },[location.search])

  const handleFilterChange = (key, value) => {
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...localFilters,
    }));
    setter(false);
  };

  const resetFilters = () => {
    setLocalFilters({
      gender: "all",
      minPrice: "0",
      maxPrice: "99999",
      marca: "all",
      category: "all",
      text:"",
      typeSort: "asc",
      sortedBy: "nombre",
    });
  };

  return (
    <div
      className={`absolute flex flex-col top-0 right-0 h-screen w-full z-50 pt-32 ps-2 bg-white transition-all text-sm ${
        isDisplayed ? "translate-x-0" : "translate-x-hiddenRight"
      }`}
    >
      <h1 className="font-bold text-xl pt-1.5 md:pt-5">FILTRAR POR:</h1>
      <div className="py-2">
        <label htmlFor="gender" className="block font-bold">
          Género:
        </label>
        <select
          id="gender"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="niños">Niños</option>
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="minPrice" className="block font-bold">
          Precio Mínimo ($):
        </label>
        <input
          type="number"
          id="minPrice"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.minPrice}
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
      </div>
      <div className="py-2">
        <label htmlFor="maxPrice" className="block font-bold">
          Precio Máximo ($):
        </label>
        <input
          type="number"
          id="maxPrice"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.maxPrice}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
      </div>
      <div className="py-2">
        <label htmlFor="marca" className="block font-bold">
          Marca:
        </label>
        <select
          id="marca"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.marca}
          onChange={(e) => handleFilterChange("marca", e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="Mike">Mike</option>
          <option value="MarcaPNG">MarcaPNG</option>
          <option value="Runner">Runner</option>
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="category" className="block font-bold">
          Categoría:
        </label>
        <select
          id="category"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="Zapatillas">Zapatillas</option>
          <option value="Gorras">Gorras</option>
          <option value="Camisetas">Camisetas</option>
          <option value="Calcetines">Calcetines</option>
        </select>
      </div>
      <h1 className="font-bold text-xl pt-5">ORDENAMIENTO:</h1>
      <div className="py-2">
        <label htmlFor="typeSort" className="block font-bold">
          Tipo:
        </label>
        <select
          id="typeSort"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.typeSort}
          onChange={(e) => handleFilterChange("typeSort", e.target.value)}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="sortedBy" className="block font-bold">
          Por:
        </label>
        <select
          id="sortedBy"
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1"
          value={localFilters.sortedBy}
          onChange={(e) => handleFilterChange("sortedBy", e.target.value)}
        >
          <option value="nombre">Nombre</option>
          <option value="precio">Precio</option>
        </select>
      </div>
      <div className="absolute bottom-0 md:-bottom-3 flex justify-around w-full mb-5">
        <MainBoton textoBoton="Aplicar" handleClick={handleFilter} />
        <button
          type="button"
          className="flex flex-row gap-3 border-2 border-black w-fit p-2 py-3 me-5"
          onClick={resetFilters}
          onMouseEnter={() => crossIconRef.current.playFromBeginning()}
        >
          <p className="pt-2 md:pt-1">RESETEAR TODO</p>
          <Player ref={crossIconRef} size={30} icon={CROSS_I} />
        </button>
      </div>
    </div>
  );
}
