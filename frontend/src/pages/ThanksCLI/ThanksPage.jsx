import React, {useEffect} from "react";
import MainBoton from "../../components/Reusables/MainBoton";
import { useUserContext } from "../../context/UserContext";
export default function ThanksPage() {
  const {setCart} = useUserContext()
  useEffect(()=>{
    setCart([]);
  },[])

  return (
    <main className="flex flex-col gap-6 justify-center items-center w-screen h-screen">
      <h1 className="text-3xl font-extrabold">¡Gracias por su compra!</h1>
      <p className="w-3/4 text-justify">
        Al ser de nuestros primeros clientes{" "}
        <b>(no porque no seamos una tienda real)</b>{" "}
        No va a tener que pagar nada. <br />
        !Así que espere su producto, que le puede llegar en cualquier día!
      </p>
      <MainBoton
        linkBoton="/"
        textoBoton="Siga explorando nuestros producto!"
      />
    </main>
  );
}
