import { useInvitation } from "../hooks/useInvitation";

import useScrollSections from "../hooks/useScrollSections";

import { motion, useSpring, useScroll } from "framer-motion";
import { useAudio } from "./AudioContext";
export default function ViewInvitation() {
  const { toggleAudio, reproduciendo } = useAudio();
  /* 
  marca arrib */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#000000ff",
          zIndex: 9999, // aseguramos que esté encima de todo
        }}
      />
      <Content toggleAudio={toggleAudio} reproduciendo={reproduciendo} />
    </>
  );
}

function Content({ toggleAudio, reproduciendo }) {
  const {
    tiempoRestante,
    invitadosFamily,
    error,
    handleChangeRadio,
    handleClick,
    mensaje,
    confirmar,
    disable,
    inputValue,
    handleInput,
    seleccion,
  } = useInvitation();

  const invitados = invitadosFamily?.invitados || [];
  const adultos = invitados.filter(
    (inv) => inv.categoria.toLowerCase() === "adulto",
  );
  const ninos = invitados.filter(
    (inv) => inv.categoria.toLowerCase() === "niño",
  );
  const animate = useScrollSections();

  return (
    <>
      <div className="container-fluid section-invi">
        {/*inicio SECCION 1 */}
        <div className="cont-full cont-sound seccion">
          <div className="imagenes-container downup">
            <img
              src="/sources/pareja.jpg"
              alt="Fondo"
              className="img-seccion-one scale"
            />
          </div>
          <div className="cont-msj">
            <div className="audio-player">
              <button onClick={toggleAudio}>
                <i
                  className={`bi ${
                    reproduciendo ? "bi-pause-fill" : "bi-play-fill"
                  }`}
                ></i>
              </button>

              <span className="audio-time">
                {reproduciendo ? "Reproduciendo..." : "Pausado"}
              </span>
            </div>

            <h2 className="updown">
              <span className="text-save-date">¡Estás Invitado!</span>
            </h2>

            <h5 className="updown">
              <span className="text-msj">
                Te esperamos para celebrar juntos.
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
