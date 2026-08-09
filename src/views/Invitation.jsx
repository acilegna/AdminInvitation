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
          <div className="cover-content ">
            <h2 className="title-name-text ">Ana &amp; Boris</h2>
            <div className="divider">
              <span>◆</span>
            </div>
            <h4 className="title-merried-text">Unimos nuestras vidas</h4>
             <h2 className="title-merried-text-fr">Nous unissons nos vies</h2>


            <div className="row justify-content-center mt-5">
              <div className="col-12 col-md-6 mb-4">
                <Link className="text-decoration-none" to="/AYB">
                  <div className="language-item">
                    <button className="btn-abrir" onClick={abrirInvitacion}>
                      <img
                        src="/sources/001-flag.png"
                        alt="Español"
                        className="img-pais"
                      />
                     Invitados de México <span className="btn-lang">ES </span>
                    </button>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-6">
                <Link className="text-decoration-none"/*  to="/AYB/fr" */>
                  <div className="language-item">
                    <button className="btn-abrir" /* onClick={abrirInvitacion} */>
                      <img
                        src="/sources/002-flag-1.png"
                        alt="Français"
                        className="img-pais"
                      />
                      Invités en France<span className="btn-lang">FR </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
