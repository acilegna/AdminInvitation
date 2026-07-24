import { useInvitation } from "../hooks/useInvitation";
//import { useDatosInvitados } from "../hooks/useDatosInvitados";
import useScrollSections from "../hooks/useScrollSections";

import { motion, useSpring, useScroll } from "framer-motion";

export default function ViewInvitation() {
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

      <Content />
    </>
  );
}

function Content() {
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
    <div className="container-fluid section-invi">
      <div className="cont-full seccion">
        <div className="imagenes-container downup">
          <img src="/sources/pareja.jpg" alt="Fondo" className="imagenes" />
        </div>
        <div className="couple-name">
          <h2 className="title-name-text ">Ana &amp; Boris</h2>
          <h4 className="title-merried-text der">Unimos nuestras vidas</h4>
        </div>
      </div>
      {/* FIN SECCION 1 */}
      <div className="cont-full cont-sound seccion">
        <audio id="audio" controls loop>
          <source
            src="https://acilegna.github.io/audio.github.io/noc.mp3"
            type="audio/mp3"
          />
        </audio>

        <div className="cont-msj">
          <h2>
            <span className="text-save-date">Estás Invitado!</span>
          </h2>
          <h5 className="mt-4 updown">
            <span className="text-msj">
              Queremos que seas parte de este momento tan especial
            </span>
          </h5>
        </div>
      </div>
      {/* FIN SECCION 2 */}
      <div className="cont-full seccion cont-centrado">
        <div className="d-flex flex-column align-items-center">
          {/*   <h2 className="text-center text-where"> ¿Cuándo y Dónde? </h2> */}
          <div className="iniciales-container">
            <h3 className="inicial img ">B</h3>
            <h4 className="inicial novia downup">A</h4>
          </div>

          {/* Contenedor para las imágenes */}
          <div className="d-flex justify-content-center align-items-center flex">
            <div className="col lados">
              {" "}
              <img src="/sources/z1.jpg" alt="Fondo" className="image" />
            </div>
            <div className="col updown">
              <img src="/sources/z2.jpg" alt="Fondo" className="image" />
            </div>
            <div className="col lados">
              {" "}
              <img src="/sources/z3.jpg" alt="Fondo" className="image" />
            </div>
          </div>
          {/*      Contenedor para la fecha */}
          <div className="cont-date">
            <h3 className="text-date updown">10.12.2026</h3>
          </div>
        </div>
      </div>
      {/* FIN SECCION 3*/}
      <div className="cont-full seccion ">
        <img src="/sources/11.jpg" alt="Fondo" className="imagen-full scale" />
        <div className="fondo-imagen imagen-full"></div>

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
      </div>
      {/* FIN SECCION 4*/}

      <div className="cont-full seccion cont-centrado">
        <img
          src="/sources/pareja.jpg"
          alt="Fondo"
          className="imagen-full scale"
        />
        <div className="fondo-imagen imagen-full"></div>

        <div className="d-flex flex-column align-items-center">
          <h2>
            <span className="text-present">Sugerencias de regalo</span>
          </h2>
          <div className="row downup">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6  d-flex flex-column align-items-center">
              <i className="bi bi-gift"></i>
              <h4>
                <span className="text-present-place">Liverpool</span>
              </h4>
              <i className="bi  bi-binoculars">Ver regalos</i>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6  d-flex flex-column align-items-center">
              <i className="bi bi-gift"></i>
              <h4>
                <span className="text-present-place">Amazon</span>
              </h4>
              <i className="bi  bi-binoculars">Ver regalos</i>
            </div>
          </div>
        </div>
      </div>
      {/* FIN SECCION 5*/}

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
                <span>Celebracion Religiosa</span>{" "}
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
                <span className=" ">Recepcion</span>{" "}
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
                <span className=" ">Entrada Esposos</span>
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
                <span className=" ">Cena</span>{" "}
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
                <span className=" ">Vals Esposos</span>{" "}
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
                <span className=" "> A bailar</span>{" "}
                <span className="span-hora"> 9:20 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIN SECCION 6*/}
      {/*INICIO SECCION 7*/}

      <div className="cont-full seccion  cont-confirmation">
        <h2 className="text-confirmation text-center">
          {" "}
          Confirma tu asistencia{" "}
        </h2>
        <p className="text-msj-confirmation downup text-center">
          {" "}
          Por favor danos tu respuesta antes del  <strong>  30-04-2027.</strong> {" "}
           
        </p>
        <div className="reservation-card">
          <div className="row align-items-center">
            {/* Icono */}
            <div className="col-md-2 text-center">
              <div className="reservation-icon">
                <i className="bi bi-building"></i>
              </div>
            </div>

            {/* Texto */}
            <div className="col-md-6">
              <h3 className="reservation-title">
                1. Realiza la reservación de tu habitación
              </h3>

              <p className="reservation-description">
                Al finalizar recibirás tu
                <strong> ID de invitación</strong>, el cual necesitarás para
                confirmar tu asistencia.
              </p>
            </div>

            {/* Botón */}
            <div className="col-md-4 text-center">
              <a
                href="https://tu-link-de-reservacion.com"
                target="_blank"
                rel="noreferrer"
                className="btn-reservar"
              >
                <i className="bi bi-calendar2-check me-2"></i>
                Reservar ahora
              </a>

              <div className="reservation-note">
                <i className="bi bi-shield-lock"></i>
                Sitio seguro de reservación
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="text-center">
          <h3 className="step-title"> 2. ¿Ya tienes tu ID de invitación?</h3>

          <p className="step-description">
            Ingresa tu ID para confirmar tu asistencia.
          </p>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="search-box">
              <input
                id="search"
                type="search"
                className="form-control"
                placeholder="Ingresa tu ID de invitación"
                value={inputValue}
                onChange={handleInput}
              />

              <button className="btn-search" onClick={handleClick}>
                <i className="bi bi-search me-2"></i>
                Buscar
              </button>
            </div>
            {mensaje && (
              <h5 className="text-success text-center ">{mensaje}</h5>
            )}
            {error && <h5 className="text-danger text-center mt-3">{error}</h5>}
          </div>
        </div>
        <hr />

        {(adultos.length > 0 || ninos.length > 0) && (
          <div className="confirmation-section">
            <h2 className="confirmation-title">3. Confirma tu asistencia</h2>

            <p className="confirmation-subtitle">
              Selecciona Sí o No para cada invitado de tu familia.
            </p>
          </div>
        )}
        <div className="confir text-center">
          <div className="row justify-content-evenly">
            {adultos.length > 0 && (
              <>
                <div className="col-12 col-md-5">
                  <div className="grupo-card">
                    <h4 className="text-center clasificacion txt-clasificacion">Adultos</h4>
                    {adultos.map((invitadosFamily) => (
                      <div
                        key={invitadosFamily.id}
                        className="mb-2 invitado-fila"
                      >
                        <div className="row">
                          <div className="col-12 col-md-8 ">
                            <strong className="me-3 mb-2 invitado-nombre">
                              {invitadosFamily.name} {invitadosFamily.apellido}
                            </strong>
                          </div>
                          <div className="col-12 col-md-4 invitado-opciones ">
                            <div className="form-check form-check-inline ">
                              <input
                                className="form-check-input radio-si"
                                type="radio"
                                name={invitadosFamily.id}
                                id={invitadosFamily.id}
                                value="Si"
                                onChange={handleChangeRadio}
                              />
                              <label
                                className="form-check-label label-si"
                                htmlFor={`si-${invitadosFamily.id}`}
                              >
                                Sí
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input radio-no"
                                type="radio"
                                name={invitadosFamily.id}
                                id={invitadosFamily.id}
                                value="No"
                                onChange={handleChangeRadio}
                              />
                              <label
                                className="form-check-label label-no"
                                htmlFor={`no-${invitadosFamily.id}`}
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {ninos.length > 0 && (
              <>
                <div className="col-12 col-md-5">
                  <div className="grupo-card">
                    <h4 className="text-center clasificacion txt-clasificacion">Niños</h4>
                    {ninos.map((invitadosFamily) => (
                      <div
                        key={invitadosFamily.id}
                        className="mb-2 invitado-fila"
                      >
                        <div className="row">
                          <div className="col-12 col-md-8 ">
                            <strong className="me-3 mb-2 invitado-nombre">
                              {invitadosFamily.name} {invitadosFamily.apellido}
                            </strong>
                          </div>
                          <div className="col-12 col-md-4 invitado-opciones">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input radio-si"
                                type="radio"
                                name={invitadosFamily.id}
                                id={invitadosFamily.id}
                                value="Si"
                                onChange={handleChangeRadio}
                              />
                              <label
                                className="form-check-label label-si"
                                htmlFor={`si-${invitadosFamily.id}`}
                              >
                                Sí
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input radio-no"
                                type="radio"
                                name={invitadosFamily.id}
                                id={invitadosFamily.id}
                                value="No"
                                onChange={handleChangeRadio}
                              />
                              <label
                                className="form-check-label label-no"
                                htmlFor={`no-${invitadosFamily.id}`}
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {(adultos.length > 0 || ninos.length > 0) && (
              <div className="text-center my-4">
                <button
                  className="btn px-4  news"
                  onClick={confirmar}
                  disabled={disable}
                >
                  <i className="bi bi-check2-circle me-2"></i>
                  Confirmar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FIN SECCION 7*/}
      {/* <footer>
        <p className="text-center">
          &copy; 2025 Invitacion B&A | Creado por Entheosmultimedia
        </p>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark ">
       
      </footer> */}

      <footer className="d-flex flex-wrap justify-content-between align-items-center    border-top bg-dark ">
        <div className="col-md-4 d-flex align-items-center p-3 mb-2 bg-dark text-white">
          <span className="mb-3 mb-md-0 ">
            © 2027 Invitacion B&A | Entheosmultimedia
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex p-3 mb-2">
          <li className="ms-3">
            <a
              className="text-white"
              href="https://www.instagram.com/entheosmultimedia?igsh=MTA3Nmp4cXJza3B3eg=="
              aria-label="Instagram"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-white"
              href="https://www.facebook.com/Enthe0sMultimedia"
              aria-label="Facebook"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
