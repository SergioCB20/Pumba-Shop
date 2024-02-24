import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lordicon/react";
import { useProductosContext } from "../../context/ProductosContext";
import ProductCard from "../../components/Reusables/ProductCard";
import Filter from "./Filter";

import COMPARE_I from "../../animated_icons/compareIcon.json";

export default function Shop() {
  const location = useLocation();
  const parametrosURL = new URLSearchParams(location.search);
  const filterType = parametrosURL.get("type");
  const filter = parametrosURL.get("filter");

  const compareIconRef = useRef();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "0",
    maxPrice: "99999",
    gender: "all",
    marca: "all",
    text:"",
    typeSort: "asc",
    sortedBy: "nombre",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { productos } = useProductosContext();

  function bubbleSortProds(arr, campo, dir = "asc") {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        //asc
        if (arr[j][campo] > arr[j + 1][campo] && dir === "asc") {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        //desc
        if (arr[j][campo] < arr[j + 1][campo] && dir === "desc") {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  useEffect(() => {
    setFilters({
      category: "all",
      minPrice: "0",
      maxPrice: "99999",
      gender: "all",
      marca: "all",
      text:"",
      typeSort: "asc",
      sortedBy: "nombre",
    });
    let filtered = [...productos];
    if (filterType && filter) {
      const lowerCaseFilter = filter.toLowerCase();

      if (filterType === "cat") {
        setFilters((prevFilters) => ({
          ...prevFilters,
          category: lowerCaseFilter,
        }));
      } else if (filterType === "gen") {
        setFilters((prevFilters) => ({
          ...prevFilters,
          gender: lowerCaseFilter,
        }));
      } else if (filterType === "text") {
        setFilters((prevFilters)=>({
          ...prevFilters,
          text:filter
        }))
      }
    }

    setFilteredProducts(filtered);
  }, [location.search,productos]);

  useEffect(() => {
    const newProductsDisplayed = productos.filter((prod) => {
      const categoryFilter =
        filters.category === "all" ||
        prod.nombreCategoria.toLowerCase() === filters.category.toLowerCase();
      const marcaFilter =
        filters.marca === "all" ||
        prod.nombreMarca.toLowerCase() === filters.marca.toLowerCase();
      const priceFilter =
        prod.precio >= parseInt(filters.minPrice) &&
        prod.precio <= parseInt(filters.maxPrice);
      const genderFilter =
        filters.gender === "all" ||
        prod.genero.toLowerCase() === filters.gender.toLowerCase();
      const textFilter = 
        prod.nombre.toLowerCase().includes(filters.text.toLocaleLowerCase());

      return categoryFilter && marcaFilter && priceFilter && genderFilter && textFilter;
    });

    const sortedProducts = bubbleSortProds(
      newProductsDisplayed,
      filters.sortedBy,
      filters.typeSort
    );

    setFilteredProducts(sortedProducts);
  }, [filters]);

  return (
    <main>
      {filteredProducts.length > 0 ? (
        <div className="px-5 md:text-base">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-xl ps-1 md:ps-5 pt-7">
              Resultados de búsqueda:
            </h1>
            <button
              type="button"
              className="flex flex-row items-center gap-3 mt-5 me-5 p-3 w-fit h-fit md:border-black md:border-2"
              onMouseEnter={() => compareIconRef.current.playFromBeginning()}
              onClick={() => setIsFilterOpen(true)}
            >
              <p className="hidden md:block">Filtrar y ordenar</p>
              <div className="-translate-y-1 md:translate-y-0">
                <Player ref={compareIconRef} size={35} icon={COMPARE_I} />
              </div>
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-3 my-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} prod={prod} />
            ))}
          </ul>
          <Filter
            isDisplayed={isFilterOpen}
            setter={setIsFilterOpen}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <h1 className="text-xl font-bold w-fit">
            Lo sentimos, no se encontraron resultados
          </h1>
        </div>
      )}
    </main>
  );
}
