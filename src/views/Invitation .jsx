import { useState } from "react";
import { Link } from "react-router-dom";
import { useAudio } from "./AudioContext";
import useScrollSections from "../hooks/useScrollSections";
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
  const animate = useScrollSections();

  const abrirInvitacion = () => {
    setAbierta(true);

    iniciarMusica();
  };

  return (
    <>
      {!abierta && (
        <div className="cover">
          <img
            src="/sources/boda.jpg"
            alt="Fondo"
            className="cover-img downup"
          />
          <div className="cover-content  ">
            <h2 className="title-name-text ">Ana &amp; Boris</h2>
            <div className="divider">
             <span>◆</span>
            </div>
            <h4 className="title-merried-text  ">Unimos nuestras vidas</h4>

            <Link
              className="nav-link active"
              title="Abrir Invitacion"
              to="/ayb"
            >
              <button className="btn-abrir" onClick={abrirInvitacion}>
                Ver Invitación
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
