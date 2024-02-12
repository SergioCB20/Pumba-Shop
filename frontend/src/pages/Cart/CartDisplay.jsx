import React from "react";
import MainBoton from '../../components/Reusables/MainBoton';

export default function CartDisplay({ cart, nombre }) {
    const sumarProds = (arrCart,i = 0,sum = 0) =>{
        if(i === arrCart.length)return sum;
        sum +=arrCart[i].precio;
        return sumarProds(arrCart,i+1,sum);
    }
  return (
    <div className="flex flex-col gap-2 p-5 text-sm">
      <h1 className="font-bold text-xl">Hola {nombre}!</h1>
      <p>
        Bienvenido a tu carrito 🛒, aquí podras visualizar información de tu
        pedido.
        <br />
        Recuerda que tienes finalizar tu proceso de compra.
      </p>
      <span>Total de productos: {cart.length}</span>
      <ul className="flex flex-col gap-4">
        {cart.map((prod) => (
        <li key={prod.ID_producto} className="flex flex-row w-full h-32 p-5 border border-black">
            <img src={prod.url_img} alt={`imagen de producto ${prod.nombre}`} className="h-full w-2/5 me-8"/>
            <div>
                <h2>{prod.nombre.toUpperCase()}</h2>
                <p className="mb-4">TAMAÑO: WIP</p>
                <div className="flex flex-row gap-4">
                    <p>Precio: ${prod.precio}</p>
                    <p>Cantidad: 1</p>
                </div>
            </div>
        </li>
      ))}
      </ul>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold mt-10">RESUMEN DEL PEDIDO</h2>
        <div className="flex flex-col gap-2 w-full p-1">
            <div className="flex flex-row justify-between w-full">
                <p>{cart.length} productos</p>
                <p>${sumarProds(cart)}</p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <p>Entrega:</p>
                <p>Gratis</p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <p>Descuento por promoción:</p>
                <p>$0.0</p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <p className="font-bold">Total:</p>
                <p>${sumarProds(cart)}</p>
            </div>
        </div>
        <MainBoton linkBoton="/Thanks" textoBoton="PAGALO AHORA"/>
      </div>
    </div>
  );
}
