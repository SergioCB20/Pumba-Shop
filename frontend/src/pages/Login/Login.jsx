import React, { useState } from "react";
import FormLogin from "./FormLogin";
import PumbaImg from "../../assets/logo.webp";
import LoginImg from "../../assets/imagen_login.webp";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen lg:text-sm bg-gradient-to-br from-white via-gray-300 to-black">
      <div className="border-black border-2 max-w-6xl flex bg-white">
        <section className="lg:w-1/2 px-20 flex flex-col gap-10 py-5">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl w-fit">Bienvenido a</h1>
            <Link to="/">
              <img src={PumbaImg} alt="Logo de Pumba" className="w-32" />
            </Link>
          </div>
          <p className="h-10 text-center text-xs lg:text-sm text-gray-400">
            Inicia sesión y desbloquea todos los beneficios y funcionalidades de
            nuestra web no oficial
          </p>
          <FormLogin />
        </section>
        <section className="lg:w-1/2 hidden lg:block">
          <img src={LoginImg} alt="" className="w-full h-full" />
        </section>
      </div>
    </div>
  );
}
