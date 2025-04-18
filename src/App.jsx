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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


import ViewConfirmacion from './views/ViewConfirmacion';
import ViewPanel from './views/ViewPanel';
 
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
  {/* <ViewImport/> */}  
 {/*  <ViewConfirmacion/> */}
   <ViewPanel/>  
 
 
    </>
  );
}

export default App;
