/* import Contador from './components/Contador';
import Controles from './components/Controles';
import Formulario from './components/Formulario';
import InputTexto from './components/InputTexto';
import MensajeCondicional from './components/MensajeCondicional';
import Props from './components/Props';
import { useState } from 'react';
import Sesion from './components/Sesion';
import MensajeConsola from './components/MensajeConsola';
import ContadorEfect from './components/ContadorEfect'; */
 import Invitation from './components/Invitation';
import ViewImport from './views/viewImport';
//componente Padre
//pasar datos de  padre a hijo
function App() {
  /*   const nombre = 'juanita';
  const [contador, setCuenta] = useState(0); */
  return (
    <>
      {/*  <Props nombre={nombre} />
      <hr />
      <Contador contador={contador} />
      <hr />
      <Controles setCuenta={setCuenta} />
      <hr />
      <InputTexto />
      <hr />
      <Formulario />
      <hr />
      <MensajeCondicional />
      <hr />
      <Sesion />
      <hr />
      <MensajeConsola />
      <hr />
      <ContadorEfect /> */}
{/*   <Invitation/> */}
  <ViewImport/>  
 
    </>
  );
}

export default App;
