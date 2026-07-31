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
        <div className="cont-full  seccion">
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
        {/*    <div className="cont-rompe seccion">
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
        </div> */}

        {/* FIN SECCION 2 */}
        {/*  SECCION 3 */}
        <div className="cont-full seccion ">
          <div className="imagenes-container downup">
            <img
              src="/sources/IMG_1505.jpg"
              alt="Fondo"
              className="img-seccion-one scale"
            />
          </div>

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
              <span className="text-date "> 30.11.2027</span>
            </h3>
          </div>
        </div>
        {/* FIN SECCION 3 */}

        {/*  SECCION 4 */}
        {/*  <div className="cont-full cont-sound seccion">
          <div className="imagenes-container downup">
            <img
              src="/sources/pareja.jpg"
              alt="Fondo"
              className="img-seccion-one scale"
            />
          </div>
          <div className="iniciales-container">
            <h3 className="inicial img ">B</h3>
            <h4 className="inicial novia downup">A</h4>
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
        </div> */}
        {/* FIN SECCION 4 */}

        {/*INICIO SECCION 5*/}
        <div className="cont-full seccion cont-centrado" id="itinerario">
          <div className="d-flex flex-column align-items-center">
            <h2 className="text-center">
              <span className="title-itinerario">Itinerario</span>
            </h2>

            <div className="">
              <div className="row ">
                <div className="col-4 icons-itinerario izqicon">
                  <img
                    src="/sources/iglesia.png"
                    alt="Fondo"
                    className="img-itinerario"
                  />
                </div>
                <div className="col-8 text-itinerario der">
                  <span className="span-text">Celebracion Religiosa</span>{" "}
                  <span className="span-hora"> 9:20 PM</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4 icons-itinerario izqicon">
                  {" "}
                  <img
                    src="/sources/brindis.png"
                    alt="Fondo"
                    className="img-itinerario3"
                  />
                </div>
                <div className="col-8 text-itinerario der">
                  <span className="span-text">Recepcion</span>{" "}
                  <span className="span-hora"> 9:20 PM</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4 icons-itinerario izqicon">
                  {" "}
                  <img
                    src="/sources/brides.png"
                    alt="Fondo"
                    className="img-itinerario"
                  />
                </div>
                <div className="col-8 text-itinerario der">
                  <span className="span-text ">Entrada Esposos</span>
                  <span className="span-hora"> 9:20 PM</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4 icons-itinerario izqicon">
                  {" "}
                  <img
                    src="/sources/cena.png"
                    alt="Fondo"
                    className="img-itinerario2"
                  />
                </div>
                <div className="col-8 text-itinerario der">
                  <span className="span-text">Cena</span>{" "}
                  <span className="span-hora"> 9:20 PM</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4 icons-itinerario izqicon">
                  {" "}
                  <img
                    src="/sources/bals.png"
                    alt="Fondo"
                    className="img-itinerario3"
                  />
                </div>
                <div className="col-8 text-itinerario der">
                  <span className="span-text">Vals Esposos</span>{" "}
                  <span className="span-hora"> 9:20 PM</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4 icons-itinerario izqicon">
                  {" "}
                  <img
                    src="/sources/damcin.png"
                    alt="Fondo"
                    className="img-itinerario"
                  />
                </div>
                <div className="col-8 text-itinerario der">
                  <span className="span-text"> A bailar</span>{" "}
                  <span className="span-hora"> 9:20 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FIN SECCION 5*/}
      </div>
    </>
  );
}
