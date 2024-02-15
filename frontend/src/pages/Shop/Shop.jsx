import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProductosContext } from "../../context/ProductosContext";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const location = useLocation();
  const parametrosURL = new URLSearchParams(location.search);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { productos } = useProductosContext();
  const catFilter = parametrosURL.get("type") === "cat";
  const genderFilter = parametrosURL.get("type") === "gen";
  const textFilter = parametrosURL.get("type") === "text";
  const filter = parametrosURL.get("filter");
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = [...productos];
    if (catFilter && filter) {
      filtered = filtered.filter((prod) => prod.nombreCategoria === filter);
    } else if (genderFilter && filter) {
      filtered = filtered.filter((prod) => prod.genero === filter);
    } else if (textFilter && filter) {
      filtered = filtered.filter((prod) =>
        prod.nombre.toLowerCase().includes(filter.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [location.search, productos]);

  return (
    <main>
      {filteredProducts.length > 0 ? (
        <div className="px-5">
          <h1 className="font-bold text-xl ps-1 py-5">
            Resultados de búsqueda:
          </h1>
          <ul className="grid grid-cols-2 gap-3 my-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((prod) => (
              <li
                key={prod.ID_producto}
                className="flex flex-col gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer"
                onClick={() => navigate(`/Shop/${prod.ID_producto}`)}
              >
                <div className="w-full max-h-28 md:h-64 md:max-h-none">
                  <img src={prod.url_img} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>{prod.nombre}</p>
                  <div className="flex flex-row justify-between">
                    <p>{prod.nombreMarca}</p>
                    <p>${prod.precio}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <h1 className="text-xl font-bold w-fit">
            Lo sentimos, no se encontraron productos para "{filter}"
          </h1>
        </div>
      )}
    </main>
  );
}
