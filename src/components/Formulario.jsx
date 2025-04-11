import { useState } from 'react';

//Manejo eventos formulario
const Formulario = () => {
  const [formData, setFormData] = useState({ nombre: '', apellido: '' });

  const manejarCambio = (event) => {
    //capturar valor de cada input agregando name de input
    const { name, value } = event.target;
    // ejecutar funcion q se encarga de realizar el cambio preguntando el estado previo name=nombre value=lo q se asigna ejemplo  nombre:jose
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const manejarSubmit = (evento) => {
    //no borrar formulario  no recargar
    evento.preventDefault();
    alert(formData.nombre);
  };
  return (
    <form onSubmit={manejarSubmit}>
      <input
        type='text'
        name='nombre'
        placeholder='escribe'
        value={formData.name}
        onChange={manejarCambio}
      ></input>

      <input
        type='text'
        name='apellido'
        placeholder='escribe'
        value={formData.apellido}
        onChange={manejarCambio}
      ></input>
      <p>
        nombre {formData.nombre} {formData.apellido}
      </p>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Formulario;
