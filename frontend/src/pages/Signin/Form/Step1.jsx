import React from "react";
import { useFormContext } from "./FormContext";
import Input from "../../../components/Extras/Input";

export default function Step1() {
  const { formData, handleInputChange, nextStep, errors } = useFormContext();

  return (
    <div className="flex flex-col relative gap-4 h-full">
      <h2 className="text-xl pb-2">Datos personales</h2>
      <Input
        label="Nombre *"
        name="name"
        type="text"
        value={formData.name}
        placeholder="Ingrese su nombre"
        onChange={handleInputChange}
        error={errors.name}
      />

      <Input
        label="Apellidos *"
        name="surname"
        type="text"
        value={formData.surname}
        placeholder="Ingrese sus Apellidos"
        onChange={handleInputChange}
        error={errors.surname}
      />

      <Input
        label="Número telefónico (incluyendo código de país) *"
        name="phone_number"
        type="tel"
        value={formData.phone_number}
        placeholder="Ejm: +51 964844541"
        onChange={handleInputChange}
        error={errors.phone_number}
      />

      <label
        className={`flex flex-col gap-1 ${errors.gender ? "text-red-600" : ""}`}
      >
        Género *
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className={`border-black border-b-2 focus:outline-none  w-full ${
            errors.gender ? "border-red-600" : ""
          }`}
        >
          <option value="">Seleccione un género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="dinosaurio">Dinosaurio</option>
        </select>
        {errors.gender && <sup className="pt-4">{errors.gender}</sup>}
      </label>

      <button
        type="button"
        onClick={nextStep}
        className="w-fit self-center p-10 border-2 border-black bg-slate-400 py-2 absolute bottom-3 rounded-lg hover:bg-slate-500 transition-all duration-300"
      >
        Siguiente
      </button>
    </div>
  );
}
