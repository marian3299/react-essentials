import { useState } from "react";

export default function Form() {

  const [formData, setFormData] = useState({
    username:'',
    email:'ejemplo@ejemplo.com',
    password:''
  })


  const [formErrors, setFormErrors] = useState({
    username:'',
    email:'',
    password:''
  })



  const procesarCambio = (e) => {
    const { name, value } = e.target;
    setFormData( (prevFormData) => ({
      ...prevFormData,
      [name]:value
    }) )


    setFormErrors( (prevFormErrors) => ({
      ...prevFormErrors,
      [name]:''
    }) )


  }

  const procesarSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const newFormErrors = {};

    if(formData.username.trim()  === ''){
      newFormErrors.username = "El usuario es requerido";
    }

    if(formData.email.trim()  === ''){
      newFormErrors.email = "El email es requerido";
    }

    if(formData.password.trim()  === ''){
      newFormErrors.password = "La contraseña es requerido";
    }

    if(Object.keys(newFormErrors).length > 0){
      setFormErrors(newFormErrors);
    }else{
      console.log("Form valido. Datos:", formData);
    }

  }



  return (
    <div>
      <form autoComplete="off" onSubmit={procesarSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input 
            type="text" 
            id="username" 
            name="username"
            value={formData.username}
            onChange={procesarCambio}
          />
          {formErrors.username && <span>{formErrors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={procesarCambio} 
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            value={formData.password}
            onChange={procesarCambio}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
