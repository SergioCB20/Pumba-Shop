import React from "react";
import { useFormContext } from "./FormContext";
import Input from "../../../components/Extras/Input";

export default function Step3() {
  const { formData, handleInputChange, prevStep, errors } = useFormContext();

  return (
    <div className="flex flex-col relative gap-5 h-full">
      <h2 className="text-xl pb-5">Datos de cuenta</h2>
      <Input
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        placeholder="Ingrese su correo electrónico"
        onChange={handleInputChange}
        error={errors.email}
      />

      <Input
        label="Contraseña *"
        name="password"
        type="password"
        value={formData.password}
        placeholder="Ingrese su contraseña"
        onChange={handleInputChange}
        error={errors.password}
      />

      <Input
        label="Repetir Contraseña *"
        name="repeatedPassword"
        type="password"
        value={formData.repeatedPassword}
        placeholder="Ingrese nuevamente la contraseña"
        onChange={handleInputChange}
        error={errors.repeatedPassword}
      />

      <div className="flex justify-around absolute bottom-10 w-full">
        <button
          type="button"
          onClick={prevStep}
          className="w-fit self-center p-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
        >
          Anterior
        </button>
        <button
          type="submit"
          className="w-fit self-center p-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}
