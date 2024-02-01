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
      className="relative w-full bg-cover bg-center text-white flex flex-col ps-10 font-extrabold"
      style={{ backgroundImage: `url(${imgUrl})`,height:"900px" }}
    >
      {/* HeroContainer */}
      <div className="absolute top-0 left-0 w-full h-full bg-sombreado_white"></div>
      {/* Overlay */}
      {/* Contenido del hero */}
      <div
        className="absolute flex flex-col gap-10 bg-sombreado_black p-10"
        style={{
          top: "20%",
          [posicionTexto === "right" ? "right" : "left"]:
            posicionTexto === "right"
              ? "5%"
              : posicionTexto === "center"
              ? "400px"
              : "auto",
        }}
      >
        <h1 className="text-4xl">{titulo}</h1>
        <p className="text-xl">{contenido}</p>
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
  posicionTexto: "left",
};
