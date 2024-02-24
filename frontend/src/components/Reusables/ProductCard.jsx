import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({prod}) {

  const navigate = useNavigate();

  return (
    <div
    key={prod.ID_producto}
    className="flex flex-col gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-black"
    onClick={() => navigate(`/Shop/${prod.ID_producto}`)}
  >
    <div className="w-full max-h-28 md:h-64 md:max-h-none">
      <img src={prod.url_img} alt="" className="w-full h-full" />
    </div>
    <div className="flex flex-col gap-1">
      <p>{prod.nombre}</p>
      <div className="flex flex-row justify-between">
        <p className="text-red-600">{prod.nombreMarca}</p>
        <p>${prod.precio}</p>
      </div>
    </div>
  </div>
  )
}
