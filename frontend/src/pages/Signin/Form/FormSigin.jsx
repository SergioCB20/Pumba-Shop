import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormContext } from "./FormContext";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function FormSigin() {
  const [signinError, setSigninError] = useState("");
  const navigate = useNavigate();
  const { currentStep, formData, errors, setErrors } = useFormContext();

  const validateForm = () => {
    // Reiniciar los errores
    setErrors({});

    let newErrors = {};
    const phoneRegex = /^\s*\+(\d{1,4})?[-\s\d]+\d{1,}\s*$/;
    const dateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])$/;

    if (formData.password !== formData.repeatedPassword) {
      newErrors.repeatedPassword = "Las contraseñas no coinciden";
    }

    console.log(
      "phoneRegex.test(phoneNumberString):",
      phoneRegex.test(formData.phone_number)
    );
    console.log(
      "dateRegex.test(birthdayString):",
      dateRegex.test(formData.birthday)
    );

    if (
      !phoneRegex.test(formData.phone_number.trim())
    ) {
      newErrors.phone_number = "Ingrese el número en el formato adecuado";
    }

    if (!dateRegex.test(formData.birthday) && formData.birthday.trim() !== "") {
      newErrors.birthday = "Ingrese la fecha en el formato adecuado";
    }

    Object.keys(formData).forEach((fieldName) => {
      if (
        fieldName !== "birthday" &&
        fieldName !== "address" &&
        typeof formData[fieldName] === "string" &&
        formData[fieldName].trim() === ""
      ) {
        console.log(`El campo ${fieldName} está incompleto`);
        newErrors[fieldName] = "Este campo es obligatorio";
      }
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSigninError("Hay errores en el formulario, revise donde han sido");
      console.log(errors);
      return;
    }

    //preparar el objeto para el fetch
    const formDataToSend = { ...formData };
    delete formDataToSend.repeatedPassword;

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (!response.ok) {
        console.log(formDataToSend);
        throw new Error();
      }

      const datosUsuario = await response.json();
      console.log("Usuario creado exitosamente");
      console.log(datosUsuario);
      setSigninError("");
      navigate("/Login");
    } catch (error) {
      setSigninError("Error en el servidor, intente más tarde");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-full w-5/6"
    >
      <div className="h-full w-full">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {{ signinError } && (
          <p className="text-center text-red-600 text-bold mt-2 bg-white ">
            {signinError}
          </p>
        )}
      </div>
    </form>
  );
}
