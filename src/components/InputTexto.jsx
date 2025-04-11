import React, { useState } from "react";

const InputTexto = () => {
  const [texto, setTexto] = useState("");

  const cambio = (event) => {
setTexto(event.target.value)

  };
  return (
    <div>
      <input type="text" placeholder="escribe algo" value={texto} onChange={cambio }></input>
      <p>se escribio {texto}</p>
    </div>
  );
};

export default InputTexto;
