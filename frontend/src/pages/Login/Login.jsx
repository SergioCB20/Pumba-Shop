import React, { useState } from "react";

export default function Login() {

    const [formData, setFormData] = useState({
        usuario: "",
        password: ""
    })

    const [loginError, setLoginError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error('Credenciales incorrectas');
          }

          const datosUsuario = await response.json();

          console.log('Usuario autenticado exitosamente');
          console.log(datosUsuario);
    
          setLoginError('');
        } catch (error) {
          console.error('Error de autenticación:', error.message);
          setLoginError('Credenciales incorrectas. Inténtalo de nuevo.');
        }
      };

  return (
    <div className="flex flex-clol justify-center items-center w-screen h-screen">
      <div className="border-black border-2 w-1/2 p-12">
        <h1 className="text-center font-bold text-2xl">Inicia Sesión</h1>
        <form onSubmit={handleLogin}>
            <label>
                Usuario
                <input type="text" name="usuario" value={formData.usuario} onChange={handleInputChange} />
            </label>
            <label>
                Contraseña
                <input type="text" name="password" value={formData.password} onChange={handleInputChange}/>
            </label>
            <button type="submit">Iniciar sesión</button>
            {loginError && <p>{loginError}</p>}
        </form>
      </div>
    </div>
  );
}
