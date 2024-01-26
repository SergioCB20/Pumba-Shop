import React from "react";
import { useFormContext } from "./FormContext";
import Input from "../../../components/Extras/Input";

export default function Step2() {
  const { formData, handleInputChange, nextStep, prevStep, errors } =
    useFormContext();

  return (
    <div className="flex flex-col relative gap-5  h-full">
      <h2 className="text-xl pb-5">Datos de adicionales (opcional)</h2>
      <Input
        label="Dirección"
        name="address"
        type="text"
        value={formData.address}
        placeholder="Ingrese su correo electrónico"
        onChange={handleInputChange}
        error={errors.address}
      />

      <Input
        label="Cumpleaños"
        name="birthday"
        type="text"
        value={formData.birthday}
        placeholder="dd/mm"
        onChange={handleInputChange}
        error={errors.birthday}
      />

      <div className="w-full flex justify-around absolute bottom-10">
        <button
          type="button"
          onClick={prevStep}
          className="w-fit self-center p-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="w-fit self-center p-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
