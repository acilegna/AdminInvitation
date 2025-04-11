import React from "react";


//recibimos funcion setCuentat y usamos prev para conocer estado anterior y calcular
const Controles = ({ setCuenta }) => {
  return (
    <div>
      <button onClick={() => setCuenta((prev) => prev + 1)}>incrementa </button>
      <button onClick={() => setCuenta((prev) => prev - 1)}>Decrementa </button>
      <button onClick={() => setCuenta(0)}>Reinicia</button>
    </div>
  );
};

export default Controles;
