import React from "react";
import FormSigin from "./Form/FormSigin";
import { FormProvider } from "./Form/FormContext";
import PumbaImg from "../../assets/logo.webp";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="flex justify-center items-center w-screen h-screen lg:text-sm bg-gradient-to-br from-white via-gray-300 to-black">
      <div className="border-black border-2 max-w-6xl lg:w-1/2 h-5/6 flex flex-col items-center bg-white px-10 pt-2" style={{minWidth: "370px"}}>
        <h1 className="text-center text-xl font-semibold">Registro</h1>
        <Link to="/">
          <img src={PumbaImg} alt="Logo de Pumba" className="w-32 mb-10" />
        </Link>
        <FormProvider>
          <FormSigin />
        </FormProvider>
      </div>
    </div>
  );
}
