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
              <span className="text-time"> APARTA LA FECHA</span>
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

        <div className="cont-dresscode seccion">
          <div className="dress-content ">
            <div className="row mt-1 align-items-center">
              <div className="col-12 text-center">
                <h2 className="mb-0">
                  <span className="dress-code">Codigo de Vestimenta</span>
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <a
                  href="https://pin.it/7apilk5ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-estilo text-present 
izqicon"
                >
                  Ver estilo sugerido
                </a>
              </div>
            </div>
            <div className="row mt-2 align-items-center">
              <div className="col-12 col-md-4 text-center order-3 order-md-3 caballero 
izqicon">
                <img
                  src="/sources/009-man.png"
                  alt="Caballero"
                  className="dress-icon"
                />
                <h3 className="text-tipo">Caballero</h3>
                <div className="lineadiv">
                  <span>♡</span>
                </div>
                <ul className="list-unstyled">
                  <li>Camisa de lino o algodón</li>
                  <li>Pantalón de vestir</li>
                  <li>Mocasines o zapatos</li>
                  <li>Sin corbata </li>
                </ul>
              </div>

              <div className="col-12 col-md-4 order-1 order-md-2 ">
                <img
                  src="/sources/vestido.png"
                  alt="Fondo"
                  className="img-seccion-dress scale"
                />
              </div>

              <div className="col-12 col-md-4 text-center order-2 order-md-1 dama 
izqicon">
                <img
                  src="/sources/001-woman.png"
                  alt="Caballero"
                  className="dress-icon"
                />
                <h3 className="text-tipo">Dama</h3>
                <div className="lineadiv">
                  <span>♡</span>
                </div>
                <ul className="list-unstyled">
                  <li>Vestido largo o midi</li>
                  <li>Sandalias o zapato comodo</li>
                  <li>Accesorios discretos</li>
                  <li>
                    Evitar el{" "}
                    <span className="text-resaltado">Color Blanco</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section-footer">
              <div className="row justify-content-center  ">
                <div className="col-12 text-center">
                  <p className=" text-sugerencia izqicon">
                    Inspírate en estos tonos
                  </p>
                </div>
                <div className="color-palette">
                  <div className="color-item">
                    <span className="color beige"></span>
                  </div>

                  <div className="color-item">
                    <span className="color arena"></span>
                  </div>

                  <div className="color-item">
                    <span className="color verde"></span>
                  </div>

                  <div className="color-item">
                    <span className="color azul"></span>
                  </div>

                  <div className="color-item">
                    <span className="color cafe"></span>
                  </div>

                  <div className="color-item">
                    <span className="color gris"></span>
                  </div>
                  <div className="color-item">
                    <span className="color amarillo"></span>
                  </div>
                  <div className="color-item">
                    <span className="color rosa"></span>
                  </div>
                  <div className="color-item">
                    <span className="color lavanda"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        {/* INICIO SECCION 6*/}

        <div className="cont-full seccion  cont-confirmation">
          <h2 className="text-confirmation text-center">
            {" "}
            Realiza tu reservación{" "}
          </h2>
          <div className="lineadiv">
            <span>♡</span>
          </div>
          <p className="reservation-info izqicon">
            Hemos reservado un bloque de habitaciones en{" "}
            <strong className="date-reserva">
              {" "}
              Grand Palladium Costa Mujeres
            </strong>{" "}
            con tarifa preferencial para nuestros invitados
          </p>
          <div className="info-fechas izqicon">
            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-calendar3"></i>
              </div>

              <div className="info-texto izqicon">
                <span className="info-titulo">Hospedaje</span>
                <strong>29 de noviembre al</strong>
                <strong>2 de diciembre de 2027</strong>
              </div>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-clock"></i>
              </div>

              <div className="info-texto">
                <span className="info-titulo">Fecha límite para reservar</span>
                <span className="info-titulo">y confirmar tu asistencia</span>
                <strong>30 de abril de 2027</strong>
              </div>
            </div>
          </div>

          {/*  <p className="text-msj-confirmation downup text-center">
            {" "}
            Reserva y confirma tu asistencia antes del{" "}
            <strong className="date-text"> 30-04-2027.</strong>{" "}
          </p> */}

          <div className="reservation-card izqicon">
            <div className="row align-items-center  gy-4">
              {/* Icono */}
              <div className="col-12 col-md-2 text-center">
                <div className="reservation-icon ">
                  <i className="bi bi-buildings"></i>
                </div>
              </div>

              {/* Texto */}
              <div className="col-12 col-md-6 text-center text-md-start">
                <h3 className="reservation-title">1. Reserva tu habitación</h3>

                <p className="reservation-description mb-0">
                  Al finalizar recibirás tu
                  <strong className="date-reserva"> ID de invitación</strong>,
                  el cual necesitarás para confirmar tu asistencia.
                </p>
              </div>

              {/* Botón */}
              <div className="col-12 col-md-4 text-center">
                <a
                  href="https://tu-link-de-reservacion.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-reservar bg-dark"
                >
                  <i className="bi bi-calendar2-check me-2 "></i>
                  Reservar ahora
                </a>

                <div className="reservation-note mt-3">
                  <i className="bi bi-shield-lock me-2"></i>
                  Sitio seguro de reservación
                </div>
              </div>
            </div>
          </div>

          <div className="reservation-card izqicon">
            <div className="row align-items-center  gy-4">
              {/* Icono */}
              <div className="col-12 col-md-2 text-center">
                <div className="reservation-icon ">
                  <i className="bi bi-person-check "></i>
                </div>
              </div>

              {/* Texto */}
              <div className="col-12 col-md-6 text-center text-md-start">
                <h3 className="reservation-title">2. Confirma tu asistencia</h3>

                <p className="reservation-description mb-0">
                  Ingresa aqui tu ID.
                </p>
                <div className="row g-2">
                  <div className="col-12 col-md">
                    <input
                      id="search"
                      type="search"
                      className="form-control search-input"
                      placeholder="ID de invitación"
                      value={inputValue}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-12 col-md-auto ">
                    <button
                      className="btn btn-primary w-100 btn-search bg-dark"
                      onClick={handleClick}
                    >
                      <i className="bi bi-search me-2"></i>
                      Buscar
                    </button>
                  </div>
                </div>
                {mensaje && (
                  <h5 className="text-success text-center mt-3">{mensaje}</h5>
                )}
                {error && (
                  <h5 className="text-danger text-center mt-3">{error}</h5>
                )}
              </div>
            </div>
          </div>

          <hr />

          {(adultos.length > 0 || ninos.length > 0) && (
            <div className="confirmation-section">
              <h2 className="confirmation-title">3. Indica quien asistirà</h2>

              <p className="confirmation-subtitle">
                Selecciona Sí o No para cada invitado de tu familia.
              </p>
            </div>
          )}
          <div className="confir text-center ">
            <div className="row justify-content-evenly px-3">
              {adultos.length > 0 && (
                <>
                  <div className="col-12 col-md-5 mb-4">
                    <div className="grupo-card">
                      <h4 className="text-center clasificacion txt-clasificacion">
                        Adultos
                      </h4>
                      {adultos.map((invitadosFamily) => (
                        <div
                          key={invitadosFamily.id}
                          className="mb-2 invitado-fila"
                        >
                          <div className="row">
                            <div className="col-12 col-md-8 ">
                              <strong className="me-3 mb-2 invitado-nombre">
                                {invitadosFamily.name}{" "}
                                {invitadosFamily.apellido}
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
                      <h4 className="text-center clasificacion txt-clasificacion">
                        Niños
                      </h4>
                      {ninos.map((invitadosFamily) => (
                        <div
                          key={invitadosFamily.id}
                          className="mb-2 invitado-fila"
                        >
                          <div className="row">
                            <div className="col-12 col-md-8 ">
                              <strong className="me-3 mb-2 invitado-nombre">
                                {invitadosFamily.name}{" "}
                                {invitadosFamily.apellido}
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
                    className="btn px-4  news bg-dark"
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
        {/* FIN SECCION 6*/}
        {/* FOOTER*/}
        <footer className="d-flex flex-column justify-content-center align-items-center border-top bg-dark py-3">
          <span className="text-white text-center mb-3">
            © 2026 Invitación B&A | Entheosmultimedia
          </span>

          <ul className="nav justify-content-center list-unstyled d-flex mb-0">
            <li className="mx-3">
              <a
                className="text-white"
                href="https://www.instagram.com/entheosmultimedia?igsh=MTA3Nmp4cXJza3B3eg=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </li>

            <li className="mx-3">
              <a
                className="text-white"
                href="https://www.facebook.com/Enthe0sMultimedia"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
