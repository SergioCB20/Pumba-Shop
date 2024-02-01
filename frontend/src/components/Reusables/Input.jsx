import React from "react";
import { useState } from "react";
//recuerda agregar si es password, el ojito
export default function Input({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error,
}) {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <label className={`flex flex-col gap-1 ${error ? "text-red-600" : ""}`}>
      {label}
      <div className="flex relative w-full">
        <input
          type={type === "password" ? (showPass ? "text" : "password") : type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`border-black border-b-2 focus:outline-none pe-5 w-full ${
            error ? "border-red-600" : ""
          }`}
        />
        {type === "password" && (
          <button type="button" onClick={handleShowPass}>
            {showPass ? (
              <i className="fa-solid fa-eye-slash" />
            ) : (
              <i className="fa-solid fa-eye" />
            )}
          </button>
        )}
      </div>
      {error && <sup className="pt-4 pb-1">{error}</sup>}
    </label>
  );
}

Input.defaultProps = {
    label :"label por defecto",
    name : "nombrePorDefecto",
    type: "text",
    value: "",
    placeholder: "placeholder por defecto",
    onChange: "",
    error: "",
}
