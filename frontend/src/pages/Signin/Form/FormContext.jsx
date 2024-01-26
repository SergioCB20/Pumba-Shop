import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
    name: "",
    surname: "",
    gender: "",
    user_type: 0,
    phone_number: "",
    address: "",
    birthday: "",
  });

  const [errors, setErrors] = useState({});

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };


  const contextValue = {
    formData,
    setFormData,
    handleInputChange,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    errors,
    setErrors
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};