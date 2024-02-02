import React from "react";
import { useEffect, useState } from "react";

export default function HeaderPromo({ ofertas }) {
  const [currentClass, setCurrentClass] = useState(0);

  const rotateClasses = () => {
    setCurrentClass((prevClass) => (prevClass + 1) % ofertas.length);//hace que el valor de currentClass ocile entre 0 y la cantidad de ofertas
  };

  useEffect(() => {
    const intervalId = setInterval(rotateClasses, 4000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-full bg-black h-10 flex justify-center font-semibold ilg:text-sm">
      <div className="flex justify-center items-center min-w-80 w-full h-full relative">
        {ofertas.map((oferta, idx) => (
          <p
            key={idx}
            className={`absolute py-2 px-2 text-center transition-all text-white ${currentClass === idx ? "block" : "hidden"}`}
          >
            {oferta}
          </p>
        ))}
      </div>
    </div>
  );
}
