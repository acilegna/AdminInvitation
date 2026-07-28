import { useState } from "react";
import { Link } from "react-router-dom";
import { useAudio } from "./AudioContext";

export default function Invitation() {
  return (
    <>
      <Content />
    </>
  );
}

function Content() {
  const [abierta, setAbierta] = useState(false);

  const { iniciarMusica } = useAudio();

  const abrirInvitacion = () => {
    setAbierta(true);

    iniciarMusica();
  };

  return (
    <>
      {!abierta && (
        <div className="cover">
          <img
            src="/sources/IMG_1150.jpg"
            alt="Fondo"
            className=" cover-img downup"
          />
          <div className="cover-content">
            <h2 className="title-name-text ">Ana &amp; Boris</h2>
            <h4 className="title-merried-text der">Unimos nuestras vidas</h4>

            <Link className="nav-link active" title="Importar" to="/bya">
              <button className="btn-abrir" onClick={abrirInvitacion}>
                Abrir Invitación
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
