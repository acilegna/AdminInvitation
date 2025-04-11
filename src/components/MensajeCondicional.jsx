import React, { useState } from 'react';

const MensajeCondicional = () => {
  const [mensaje, setMensaje] = useState('');
  return (
    <div>
      <input
        type='text'
        placeholder='escribe'
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      ></input>
      {/*  renderizado condicional que quiero q aparezca y q no */}
      {mensaje ? <p>tu mensaje es {mensaje}</p> : <p> aun no hay mensaje</p>}
      {mensaje && (
        <button
          onClick={() => {
            alert(mensaje);
          }}
        >
          envia
        </button>
      )}
    </div>
  );
};

export default MensajeCondicional;
