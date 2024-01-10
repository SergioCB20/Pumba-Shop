import React from "react";
import Image from "../../assets/home-hero-1.jpg";

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
      className="relative w-full hero-deskstop bg-cover bg-center text-white flex flex-col ps-10 font-extrabold"
      style={{ backgroundImage: `url(${imgUrl})` }}
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
              ? "37%"
              : "auto",
        }}
      >
        <h1 className="text-4xl">{titulo}</h1>
        <p className="text-xl">{contenido}</p>
        <div className="bg-black px-4 py-8 w-fit">
          <a href={linkBoton}>{textoBoton}</a>
        </div>
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
