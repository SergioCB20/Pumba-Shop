import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductosContext } from "../../context/ProductosContext";
import MainBoton from "../../components/Reusables/MainBoton"

export default function ProductDetails() {
  const { cart, setCart } = useUserContext();
  const { productId } = useParams();
  const { productos } = useProductosContext();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const selectedProduct = productos.find(
      (prod) => prod.ID_producto === parseInt(productId)
    );
    setProducto(selectedProduct);
  }, [productos, productId]);

  const handleClick = ()=>{
    if (producto) {
      const carritoActualizado = [...cart, producto]; 
      const token = localStorage.getItem('token');
      localStorage.setItem(`cart-${token}`, JSON.stringify(carritoActualizado));
      setCart(carritoActualizado);
      console.log("producto agregado al carrito")
      console.log(cart)
    }
  }

  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col p-5 gap-5">
        {producto ? ( 
          <>
            <div className="flex w-full justify-center">
              <img
                src={producto.url_img}
                alt={`imagen del producto ${producto.nombre}`}
                className="w-1/2"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-red-700 font-semibold">
                {producto.nombreMarca}
              </p>
              <h1 className="text-lg font-bold">{producto.nombre}</h1>
              <p className="text-sm">$ {producto.precio}</p>
              {producto.genero === "niños" && (
                <div>tallas para niños</div>
              )} 
              {producto.genero != "niños" && (
                <div>tallas para no niños</div>
              )} 
            </div>
            <MainBoton textoBoton="Agregar al carrito" handleClick={handleClick}/>
          </>
        ) : (
          <p>Cargando producto...</p>
        )}
      </div>
    </main>
  );
}

