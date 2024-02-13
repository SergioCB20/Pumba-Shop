import React, { useState, useEffect } from "react";
import MainBoton from '../../components/Reusables/MainBoton';

export default function CartDisplay({ cart, nombre }) {

    const [precioProds, setPrecioProds] = useState(0);
    const [descTotal, setDescTotal] = useState(0);
    const [cantidadProds, setCantidadProds] = useState(0);

    useEffect(()=>{
        setPrecioProds(sumarProds(cart,"precio"));
        setDescTotal(sumarProds(cart,"descuento"));
        setCantidadProds(sumarProds(cart,"cantidad"));
    }, [cart]);

    const sumarProds = (arrCart, cat, i = 0, sum = 0) => {
        if (i === arrCart.length) return sum;
        if (cat === "precio") sum += arrCart[i].producto[cat] * arrCart[i].cantidad;
        if (cat === "descuento") sum += arrCart[i][cat] * arrCart[i].cantidad;
        if (cat === "cantidad") sum += arrCart[i].cantidad;
        return sumarProds(arrCart, cat, i + 1, sum);
    };
    
    return (
        <div className="flex flex-col gap-2 p-5 text-sm">
            <h1 className="font-bold text-xl">Hola {nombre}!</h1>
            <p>
                Bienvenido a tu carrito 🛒, aquí podrás visualizar información de tu
                pedido.
                <br />
                Recuerda que tienes que finalizar tu proceso de compra.
            </p>
            <span>Total de productos: {cantidadProds}</span>
            <ul className="flex flex-col gap-4">
                {cart.map((prod) => (
                    <li key={prod.ID_producto} className="flex flex-row w-full h-32 p-5 border border-black">
                        <img src={prod.producto.url_img} alt={`imagen de producto ${prod.producto.nombre}`} className="h-full w-2/5 me-8"/>
                        <div>
                            <h2>{prod.producto.nombre.toUpperCase()}</h2>
                            <p className="mb-4">TAMAÑO: {prod.tamanio}</p>
                            <div className="flex flex-row gap-4">
                                <p>Precio: ${prod.producto.precio}</p>
                                <p>Cantidad: {prod.cantidad}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-5">
                <h2 className="font-bold mt-10">RESUMEN DEL PEDIDO</h2>
                <div className="flex flex-col gap-2 w-full p-1">
                    <div className="flex flex-row justify-between w-full">
                        <p>{cantidadProds} productos</p>
                        <p>${precioProds}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <p>Entrega:</p>
                        <p>Gratis</p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <p>Descuento por promoción:</p>
                        <p>${descTotal}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <p className="font-bold">Total:</p>
                        <p>${precioProds - descTotal}</p>
                    </div>
                </div>
                <MainBoton linkBoton="/Thanks" textoBoton="PAGALO AHORA"/>
            </div>
        </div>
    );
}

