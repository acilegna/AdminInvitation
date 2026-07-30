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
        {/* FIN SECCION 1 */}
        {/*  SECCION 2 */}
        <div className="cont-rompe seccion">
          {/* Contenedor para las imágenes */}
          <div className="contenedor-imagenes">
            <div className="img-izquierda updown">
              <img src="/sources/1.jpg" alt="Fondo" className="image-piezas" />
            </div>

            <div className="img-centro updown">
              <img src="/sources/2.jpg" alt="Fondo" className="image-piezas" />
            </div>

            <div className="img-derecha updown">
              <img src="/sources/3.jpg" alt="Fondo" className="image-piezas" />
            </div>
          </div>
        </div>

        {/* FIN SECCION 2 */}
        {/*  SECCION 3 */}
        <div className="cont-full seccion ">
          <img
            src="/sources/IMG_1505.jpg"
            alt="Fondo"
            className="imagen-full scale"
          />

          <div className="cont-titleContador">
            <h2>
              <span className="text-time"> SAVE THE DATE</span>
            </h2>
          </div>

          <div className="time-values d-flex justify-content-center  ">
            <div className="time-box updown">
              <span className="time-number">{tiempoRestante.dias}</span>
              <div className="time-label">Días</div>
            </div>
            <div className="time-box  updown">
              <span className="time-number">{tiempoRestante.horas}</span>
              <div className="time-label">Horas</div>
            </div>
            <div className="time-box  updown">
              <span className="time-number">{tiempoRestante.minutos}</span>
              <div className="time-label">Minutos</div>
            </div>
            <div className="time-box  updown">
              <span className="time-number">{tiempoRestante.segundos}</span>
              <div className="time-label">Segundos</div>
            </div>
          </div>

          <div className="cont-date">
            <h3 className="updown">
              <span className="text-date  "> 30.11.2027</span>
            </h3>
          </div>
        </div>
        {/* FIN SECCION 3 */}

        {/*  SECCION 4 */}
        <div className="cont-full cont-sound seccion">
          <div className="imagenes-container downup">
            <img
              src="/sources/pareja.jpg"
              alt="Fondo"
              className="img-seccion-one scale"
            />
          </div>

          <div className="texto-imagen">
            <h2>
              <span className="text-present">Dress Code</span>
            </h2>
            <p className="dress-code">Formal de playa</p>
            <p className="dress-text">
              ¡Luce fabuloso(a) y ven con toda la actitud!
            </p>
          </div>
        </div>
        {/* FIN SECCION 4 */}
      </div>
    </>
  );
}
