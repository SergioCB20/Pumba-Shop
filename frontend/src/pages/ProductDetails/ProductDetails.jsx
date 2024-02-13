import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductosContext } from "../../context/ProductosContext";
import MainBoton from "../../components/Reusables/MainBoton";

export default function ProductDetails() {
  const { cart, setCart } = useUserContext();
  const { productId } = useParams();
  const { productos } = useProductosContext();
  const [producto, setProducto] = useState(null);
  const [tallaSelected, setTallaSelected] = useState(null);
  const tallaKids = ["US-4","US-5","US-6","US-7","US-8"]
  const tallaNoKids = ["US-9","US-10","US-11","US-12","US-13"]

  useEffect(() => {
    const selectedProduct = productos.find(
      (prod) => prod.ID_producto === parseInt(productId)
    );
    setProducto(selectedProduct);
  }, [productos, productId]);

  const handleClick = () => {

    const actualizarCarrito = (productoCarrito) =>{
      if(cart.length === 0) return [...cart, productoCarrito];
      let productoRepetido = false, idx;
      for(let i=0;i<cart.length;i++)
        if(cart[i].producto.ID_producto === productoCarrito.producto.ID_producto && cart[i].tamanio === productoCarrito.tamanio){
          productoRepetido = true;
          idx = i;
        }
      if(productoRepetido){
        cart[idx].cantidad++;
        return cart;
      }else{
        return [...cart, productoCarrito];
      }
    }

    if (producto && tallaSelected) {
      const productoCarrito = {producto, tamanio: tallaSelected, cantidad: 1, descuento: 0} 
      const carritoActualizado = actualizarCarrito(productoCarrito);
      const token = localStorage.getItem("token");
      localStorage.setItem(`cart-${token}`, JSON.stringify(carritoActualizado));
      setCart(carritoActualizado);
      console.log("Producto agregado al carrito");
    }
  };

  const handleSelectSize = (size) => {
    setTallaSelected(size);
  };

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
              <p className="text-sm mt-2 mb-5">$ {producto.precio}</p>
              <ul className="grid grid-cols-4 text-center border border-black">
                {producto.genero === "niños" && tallaKids.map((size) => (
                  <li
                    key={size}
                    className={`cursor-pointer border-e-2 border-b-2 ${
                      tallaSelected === size ? "bg-gray-300" : ""
                    }`}
                    onClick={() => handleSelectSize(size)}
                  >
                    {size}
                  </li>
                ))}
                {producto.genero != "niños" && tallaNoKids.map((size) => (
                  <li
                    key={size}
                    className={`cursor-pointer border-e-2 border-b-2 ${
                      tallaSelected === size ? "bg-gray-300" : ""
                    }`}
                    onClick={() => handleSelectSize(size)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <MainBoton textoBoton="Agregar al carrito" handleClick={handleClick} />
          </>
        ) : (
          <p>Cargando producto...</p>
        )}
      </div>
    </main>
  );
}


