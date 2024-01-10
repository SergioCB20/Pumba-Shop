import React from "react";
import HeroImage from "../../components/Extras/HeroImage";
import hero1 from "../../assets/home-hero-1.jpg";
import hero2 from "../../assets/home-hero-2.jpg";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroImage
        imgUrl={hero1}
        titulo="Aprovecha nuestras promociones 😉"
        contenido="¡Descuentos por tiempo limitado en calzados, ropa y más!"
        textoBoton="IR A LAS PROMOCIONES ⭐"
        linkBoton="#"
      />
      <HeroImage
        imgUrl={hero2}
        titulo="Revise nuestro catálogo en calzados 🤩"
        contenido="¡Las zapatillas de tus jugadores favoritos en un mismo lugar!"
        textoBoton="IR A LA TIENDA ⭐"
        linkBoton="#"
        posicionTexto="right"
      />
      <div>
        
      </div>
    </main>
  );
}
