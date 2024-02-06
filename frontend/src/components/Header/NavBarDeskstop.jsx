import React, { useEffect } from "react";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductosContext } from "../../context/ProductosContext";

export default function NavBarDeskstop({
  handleSearch,
  handleChange,
  categorias,
  searchText,
}) {
  const { user } = useUserContext();
  const { productos } = useProductosContext();

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex-row justify-around w-full hidden ilg:flex">
      <div className="h-full w-32 px-1 pt-3">
        <Link to="/">
          <img src={Logo} alt="logo_pumba" className="w-full" />
        </Link>
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
        {searchText && productosFiltrados.length > 0 && (
          <ul className="flex flex-col gap-2 absolute top-30 right-40 lg:right-52 max-w-30 bg-white border border-t-0 border-black mt-1 p-2 text-xs lg:text-sm lg:max-w-52">
            {productosFiltrados.map((producto) => (
              <li key={producto.ID_producto} className="w-full">
                <Link to={`/${producto.ID_producto}`}>
                  <div className="w-full flex flex-row gap-5">
                    <img src={producto.url_img} alt="" className="h-6" />
                    <p className="max-w-32">{producto.nombre}</p>
                  </div>
                  </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="ps-2 py-10 flex flex-row gap-5">
          <Link to="/Login">
            <i className="fa-solid fa-user fa-2x ps-1"></i>
            {user ? <p className="text-xs">{user.name}</p> : <p> </p>}
          </Link>
          <Link to="/Cart">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
