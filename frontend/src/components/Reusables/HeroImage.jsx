import React from "react";
import Image from "../../assets/home-hero-1.webp";
import MainBoton from "./MainBoton";

export default function HeroImage({
  imgUrl,
  titulo,
  contenido,
  textoBoton,
  linkBoton,
  posicionTexto,
}) {
  return (
    <div
      className="relative w-full h-80  ilg:h-hero bg-cover bg-center text-white flex flex-col ps-10 ilg:font-extrabold"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {/* HeroContainer */}
      <div className="absolute top-0 left-0 w-full h-full bg-sombreado_white"></div>
      {/* Overlay */}
      {/* Contenido del hero */}
      <div
        className="absolute flex flex-col gap-5  ilg:gap-10 bg-sombreado_black p-2 ilg:p-10"
        style={{
          top: "20%",
          [posicionTexto === "right" ? "right" : "left"]:"5%"
        }}
      >
        <h1 className="text-2xl ilg:text-4xl">{titulo}</h1>
        <p className="text-xl font-semibold">{contenido}</p>
        <MainBoton linkBoton={linkBoton} textoBoton={textoBoton} />
      </div>
    </div>
  );
}

HeroImage.defaultProps = {
  imgUrl: Image,
  titulo: "TÍTULO POR DEFECTO",
  contenido: "CONTENIDO POR DEFECTO",
  textoBoton: "TEXTO DEL BOTÓN POR DEFECTO",
  linkBoton: "#",
  posicionTexto: "right",
};
