import React, { useEffect, useState } from 'react';

const ContadorEfect = () => {
  const [contador, setContador] = useState(10);
  useEffect(() => {
    console.log(contador);
  }, [contador]);
  return (
    <div>
      contador {contador}
      <button onClick={() => setContador(contador + 2)}>incrementa</button>
    </div>
  );
};

export default ContadorEfect;
