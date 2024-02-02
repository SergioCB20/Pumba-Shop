import React from "react";
import { Link } from "react-router-dom";
//Boton principal
export default function MainBoton({ linkBoton, textoBoton }) {
  return (
    <div className="bg-black px-4 py-2 w-fit text-white hover:text-gray-400 transition-all">
      {linkBoton.startsWith("/") && (
        <Link to={linkBoton}>
          <div className="flex gap-5">
            <p className="w-full h-full text-xs lg:text-base">{textoBoton}</p>
            <i className="fa-solid fa-arrow-right pt-1"></i>
          </div>
        </Link>
      )}
      {!linkBoton.startsWith("/") && (
        <a href={linkBoton}>
          <div className="flex gap-5">
            <p className="w-full h-full">{textoBoton}</p>
            <i className="fa-solid fa-arrow-right pt-1"></i>
          </div>
        </a>
      )}
    </div>
  );
}

MainBoton.defaultProps = {
  linkBoton: "#",
  textoBoton: "TEXTO POR DEFAULT",
};
