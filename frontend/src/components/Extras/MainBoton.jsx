import React from "react";
//Boton principal
export default function MainBoton({ linkBoton, textoBoton }) {
  return (
    <div className="bg-black px-4 py-2 w-fit text-white hover:text-gray-400 transition-all">
      <a href={linkBoton} className="flex gap-5">
        <p className="w-full h-full">{textoBoton}</p>
        <i className="fa-solid fa-arrow-right pt-1"></i>
      </a>
    </div>
  );
}

MainBoton.defaultProps = {
    linkBoton: "#",
    textoBoton: "TEXTO POR DEFAULT"
}