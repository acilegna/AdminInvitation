import { useInvitation } from "../hooks/useInvitation";

import useScrollSections from "../hooks/useScrollSections";

import { motion, useSpring, useScroll } from "framer-motion";
import { useAudio } from "./AudioContext";
export default function ViewInvitationFr() {
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
                {reproduciendo ? "En lecture..." : "En pause"}
              </span>
            </div>

            <h2 className="updown">
              <span className="text-save-date-fr">
                ¡Nous sommes heureux de vous inviter à notre mariage!
              </span>
            </h2>
          </div>
        </div>
        {/* FIN SECCION 1 */}
        {/*  SECCION 2 */}
        <div className="cont-full seccion">
          <div className="imagenes-container downup">
            <img
              src="/sources/IMG_1696.jpg"
              alt="Fondo"
              className="img-seccion-one scale"
            />

            {/* Todo el contenido sobre la imagen */}
            <div className="overlay-padres">
              <span className="text-nosotros izqicon">NOUS</span>

              <h2 className="title-nameBA izqicon">Ana &amp; Boris</h2>

              <p className="text-padres izqicon">
                Avec la benediction de nos parents
              </p>
              <div className="lineanosotro">
                <span>♡</span>
              </div>
              <div className="row justify-content-center mt-5 w-100">
                <div className="col-12 col-md-4 text-center mb-4 izqicon">
                  <h5>Parents de la mariée</h5>
                  <p>José Juan Morales</p>
                  <p>Blanca Elvia Ruiz</p>
                </div>

                <div className="col-12 col-md-4 text-center izqicon">
                  <h5>Parents du marié</h5>
                  <p>Aldo Calvo</p>
                  <p>Christel Alberti</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <span className="text-time">NOTEZ LA DATE DANS VOS AGENDA</span>
            </h2>
          </div>

          <div className="time-values d-flex justify-content-center  ">
            <div className="time-box updown">
              <span className="time-number">{tiempoRestante.dias}</span>
              <div className="time-label">JOUR </div>
            </div>
            <div className="time-box  updown">
              <span className="time-number">{tiempoRestante.horas}</span>
              <div className="time-label">HEURES</div>
            </div>
            <div className="time-box  updown">
              <span className="time-number">{tiempoRestante.minutos}</span>
              <div className="time-label">MINUTES</div>
            </div>
            <div className="time-box  updown">
              <span className="time-number">{tiempoRestante.segundos}</span>
              <div className="time-label">SECONDES</div>
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
                  <span className="dress-code">Code vestimentaire</span>
                </h2>
              </div>
            </div>

            <div className="row mt-2 align-items-center">
              <div className="col-12 col-md-4 text-center order-3 order-md-3 caballero izqicon">
                <img
                  src="/sources/009-man.png"
                  alt="Caballero"
                  className="dress-icon"
                />
                <h3 className="text-tipo">Homme</h3>
                <div className="lineadiv">
                  <span>♡</span>
                </div>
                <ul className="list-unstyled">
                  <li>Chemise légère (lin ou autre)</li>
                  <li>Pantalon léger</li>
                  <li>Chaussures ou mocassins </li>
                  <li>Pas de cravate </li>
                </ul>
              </div>

              <div className="col-12 col-md-4 order-1 order-md-2 ">
                <img
                  src="/sources/vestido.png"
                  alt="Fondo"
                  className="img-seccion-dress scale"
                />
              </div>

              <div className="col-12 col-md-4 text-center order-2 order-md-1 dama izqicon">
                <img
                  src="/sources/001-woman.png"
                  alt="Caballero"
                  className="dress-icon"
                />
                <h3 className="text-tipo">Femme</h3>
                <div className="lineadiv">
                  <span>♡</span>
                </div>
                <ul className="list-unstyled">
                  <li>Robe longue ou midi</li>
                  <li>Chaussures ouvertes et/ou confortables</li>

                  <li>
                    Eviter le <span className="text-resaltado">blanc</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section-footer izqicon">
              <div className="row justify-content-center  ">
                <div className="col-12 text-center">
                  <p className="text-sugerencia">
                    <strong> Couleurs suggérées </strong>.
                  </p>
                </div>
                <div className="color-palette">
                  <div className="color-item">
                    <span className="color beige"></span>
                  </div>

                  <div className="color-item">
                    <span className="color azul"></span>
                  </div>

                  <div className="color-item">
                    <span className="color rosa"></span>
                  </div>
                  <div className="color-item">
                    <span className="color gris"></span>
                  </div>
                  <div className="color-item">
                    <span className="color amarillo"></span>
                  </div>
                  <div className="color-item">
                    <span className="color arena"></span>
                  </div>
                  <div className="color-item">
                    <span className="color verde"></span>
                  </div>

                  <div className="color-item">
                    <span className="color cafe"></span>
                  </div>
                  <div className="color-item">
                    <span className="color lavanda"></span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pinterest-link">
                <div className="col-12 text-center izq">
                  <a
                    href="https://pin.it/7apilk5ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-estilo"
                  >
                    <img
                      src="/sources/002-pinterest-1.png"
                      alt="Paleta de colores"
                      className="icon-estilo"
                    />
                    <span className="text-present">Voir Inspirations</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FIN SECCION 4 */}

        {/*INICIO SECCION 5*/}
        <div className="cont-full seccion cont-centrado" id="itinerario">
          <div className="itinerario-container">
            <h2 className="text-center mb-5">
              <span className="title-itinerario">Programme</span>
            </h2>

            <div className="row align-items-center mb-4">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/004-church-2.png"
                  alt="Celebración Religiosa"
                  className="img-itinerario"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">Cérémonie religieuse</span>
                <span className="span-hora">14:00 PM</span>
              </div>
            </div>
            <div className="row align-items-center mb-4">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/005-wine-glass.png"
                  alt="Celebración Religiosa"
                  className="img-itinerario"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">Vin d'honneur</span>
                <span className="span-hora">17:30 PM</span>
              </div>
            </div>
            <div className="row align-items-center mb-4">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/007-champagne-glass.png"
                  alt="Recepción"
                  className="img-itinerario3"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">Reception</span>
                <span className="span-hora">19:00 PM</span>
              </div>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/022-newlyweds-5.png"
                  alt="Entrada de los Esposos"
                  className="img-itinerario"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">Entrée des mariés</span>
                <span className="span-hora">19:15 PM</span>
              </div>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/005-dinner-table.png"
                  alt="Cena"
                  className="img-itinerario2"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">Dîner</span>
                <span className="span-hora">20:00 PM</span>
              </div>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/011-dance-1.png"
                  alt="Vals de los Esposos"
                  className="img-itinerario3"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">Première danse des mariés</span>
                <span className="span-hora">21:00 PM</span>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-4 icons-itinerario izqicon">
                <img
                  src="/sources/009-dance.png"
                  alt="A Bailar"
                  className="img-itinerario"
                />
              </div>

              <div className="col-8 text-itinerario der">
                <span className="span-text">¡Fiesta!</span>
                <span className="span-hora">21:30 PM</span>
              </div>
            </div>
          </div>
        </div>
        {/* FIN SECCION 5*/}
        {/* INICIO SECCION 6*/}

        <div className="cont-full seccion  cont-confirmation">
          <h2 className="text-confirmation text-center">
            {" "}
            Réalisez votre réservation{" "}
          </h2>
          <div className="lineadiv">
            <span>♡</span>
          </div>
          <p className="reservation-info-fr izqicon">
            Dans le cadre du mariage nous avons obtenu un tarif préférentiel
            pour les invités, en chambre simple, double ou triple, afin de tous
            séjourner dans le lieux dans lequel nous célébrerons notre union.
          </p>
          <div className="info-fechas izqicon">
            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-calendar3"></i>
              </div>

              <div className="info-texto izqicon">
                <span className="info-titulo">Date du séjour</span>
                <strong>29 Novembre 2027 au</strong>
                <strong>2 Décembre 2027</strong>
              </div>
            </div>

            <div className="info-divider"></div>

            <div className="info-item izqicon">
              
              <div className="info-texto-fr">
                <span className="info-titulo">
                  Nous vous remercions de confirmer votre présence avant le{" "}
                  <strong>30 Avril 2027,</strong> cela nous aidera à organiser au mieux cette journée.
                </span>
                
              </div>
            </div>
          </div>

          <div className="reservation-card izqicon">
            <div className="row align-items-center  gy-4">
              {/* Icono */}
              <div className="col-12 col-md-2 text-center">
                <div className="reservation-icon ">
                  <i className="bi bi-buildings"></i>
                </div>
              </div>

              {/* Texto */}
              <div className="col-12 col-md-5 text-center text-md-start">
                <h3 className="reservation-title">Réservation</h3>

                <p className="reservation-description mb-0">
                  Pour confirmer votre présence et réserver votre chambre,
                  veuillez directement contacter Boris qui vous donnera toutes
                  les informations nécessaires. Son numéro de téléphone est le
                  <strong className="date-reserva"> 0645658333.</strong>,
                </p>
              </div>

              {/* Botón */}
              {/* Icono */}
              <div className="col-12 col-md-2 text-center">
                <div className="reservation-icon ">
                  <i className="bi bi-geo-alt"></i>
                </div>
              </div>
              <div className="col-12 col-md-3 text-center text-md-start">
                <div className="reservation-note mt-3">
                  <strong className="date-reserva">
                    Grand Palladium Costa Mujeres
                  </strong>
                  <br />
                  Vialidad Paseo Mujeres 3<br />
                  77400 Cancún, Mexique
                </div>
              </div>
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
