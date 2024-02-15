import React, {useEffect} from "react";
import MainBoton from "../../components/Reusables/MainBoton";
import { useUserContext } from "../../context/UserContext";
export default function ThanksPage() {
  const {setCart} = useUserContext()
  useEffect(()=>{
    const token = localStorage.getItem("token");
    localStorage.setItem(`cart-${token}`, []);
    setCart([]);
  },[])

  return (
    <main className="flex flex-col gap-6 justify-center items-center w-screen h-screen md:text-base">
      <h1 className="text-3xl font-extrabold">¡Gracias por su compra!</h1>
      <p className="w-3/4 text-justify md:w-fit">
        Al ser de nuestros primeros clientes{" "}
        <b>(no porque no seamos una tienda real)</b>{" "}
        No va a tener que pagar nada. <br />
        !Así que espere su pedido, que le puede llegar en cualquier día y hora!
      </p>
      <MainBoton
        linkBoton="/"
        textoBoton="Siga explorando nuestros productos!"
      />
    </main>
  );
}
