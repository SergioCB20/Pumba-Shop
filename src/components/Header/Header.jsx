import React from "react";
import HeaderPromo from "./Header_Promo";
import NavBar from "./NavBar";

const Header = () => {
  const ofertas = [
    "50% de descuento en zapatillas seleccionadas",
    "2x1 en camisetas de selecciones nacionales de fútbol",
    "Obtén tu cupón de descuento para tu compra",
    "30% de descuento en polos para niños",
    "Disfruta de más beneficios adquiriendo PumbaPLUS",
  ];

  const categorias = [
    "Promociones",
    "Vestimenta",
    "Hombres",
    "Mujeres",
    "Niños",
    "Calzado",
  ];
  return (
    <header className="fixed inset-x-18 inset-y-0">
      <HeaderPromo ofertas={ofertas} />
      <NavBar categorias={categorias} />
    </header>
  );
};
export default Header;
