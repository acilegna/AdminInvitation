import React, { useEffect } from 'react';

const MensajeConsola = () => {
  useEffect(() => {
    console.log('este es el mensaje');
  }, []);
  return <div>mira la consola para ver msj</div>;
};

export default MensajeConsola;
