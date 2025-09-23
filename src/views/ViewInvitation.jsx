import { useInvitation } from "../hooks/useInvitation";
import { useDatosInvitados } from "../hooks/useDatosInvitados";
import useScrollSections from "../hooks/useScrollSections";

import { motion, useSpring, useScroll } from "framer-motion";

export default function ViewInvitation() {
  /* 
  marca arrib */
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
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
          zIndex: 9999 // aseguramos que esté encima de todo
        }}
      />

      <Content />
    </>
  )

}

function Content() {

  const { invitadosFamily, error, handleChangeRadio, handleClick, mensaje, confirmar, disable, inputValue, handleInput, } = useDatosInvitados();

  const invitados = invitadosFamily?.invitados || [];
  const adultos = invitados.filter((inv) => inv.categoria.toLowerCase() === "adulto");
  const ninos = invitados.filter((inv) => inv.categoria.toLowerCase() === "niño");
  const tiempoRestante = useInvitation();
  const animate = useScrollSections();

  return (
    <div className="container-fluid section-invi">

      <div className="cont-full seccion">
        <div className="imagenes-container downup">
          <img src="/sources/pareja1.jpg" alt="Fondo" className="imagenes" />
        </div>
        <div className="couple-name">
          <h2 className="title-name-text ">Ana &amp; Boris</h2>
          <h4 className="title-merried-text der">Unimos nuestras vidas</h4>
        </div>
      </div>
      {/* FIN SECCION 1 */}
      <div className="cont-full cont-sound seccion">
        <audio id="audio" controls loop>
          <source src="https://acilegna.github.io/audio.github.io/noc.mp3" type="audio/mp3" />
        </audio>

        <div className="cont-msj">
          <h2 ><span class="text-save-date">Estás Invitado!</span></h2>
          <h5 className="mt-4 updown"><span class="text-msj">Queremos que seas parte de este momento tan especial</span></h5>
        </div>

      </div>
      {/* FIN SECCION 2 */}
      <div className="cont-full seccion cont-centrado">

        <div class="d-flex flex-column align-items-center">
          {/*   <h2 className="text-center text-where"> ¿Cuándo y Dónde? </h2> */}
          <div className="iniciales-container">
            <h3 className="inicial img ">B</h3>
            <h4 className="inicial novia downup">A</h4>
          </div>


          {/* Contenedor para las imágenes */}
          <div className="d-flex justify-content-center align-items-center flex">
            <div class="col lados">  <img src="/sources/z1.jpg" alt="Fondo" class="image" />
            </div>
            <div class="col updown">
              <img src="/sources/z2.jpg" alt="Fondo" class="image" />
            </div>
            <div class="col lados"> <img src="/sources/z3.jpg" alt="Fondo" class="image" />

            </div>

          </div>
          {/*      Contenedor para la fecha */}
          <div class="cont-date">
            <h3 class="text-date updown">
              10.12.2026
            </h3>
          </div>
        </div>


      </div >
      {/* FIN SECCION 3*/}
      <div className="cont-full seccion ">
        <img src="/sources/11.jpg" alt="Fondo" className="imagen-full scale" />
        <div className="fondo-imagen imagen-full"></div>

        <div class="cont-titleContador">
          <h2><span className="text-time"> SAVE THE DATE</span></h2>
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
        <img src="/sources/pareja.jpg" alt="Fondo" className="imagen-full scale" />
        <div className="fondo-imagen imagen-full"></div>

        <div class="d-flex flex-column align-items-center">

          <h2><span class="text-present">Sugerencias de regalo</span></h2>
          <div className="row downup">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6  d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4><span class="text-present-place">Liverpool</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>

            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6  d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4><span class="text-present-place">Amazon</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>
            </div>
          </div>

        </div>
      </div>
      {/* FIN SECCION 5*/}


      <div className="cont-full seccion cont-centrado" id="itinerario">


        <div class="d-flex flex-column align-items-center">

          <h2 className="text-center"><span class="title-itinerario">Itinerario</span></h2>

          <div class="">
            <div className="row ">
              <div className="col-4 icons-itinerario izqicon"><img src="/sources/iglesia.png" alt="Fondo" className="img-itinerario" /></div>
              <div className="col-8 text-itinerario der"><span>Celebracion Religiosa</span> <span className="span-hora"> 9:20 PM</span></div>
            </div>

            <div className="row">
              <div className="col-4 icons-itinerario izqicon"> <img src="/sources/brindis.png" alt="Fondo" className="img-itinerario3" /></div>
              <div className="col-8 text-itinerario der"><span className=" ">Recepcion</span> <span className="span-hora"> 9:20 PM</span></div>
            </div>
            <div className="row">
              <div className="col-4 icons-itinerario izqicon"> <img src="/sources/brides.png" alt="Fondo" className="img-itinerario" /></div>
              <div className="col-8 text-itinerario der"><span className=" ">Entrada Esposos</span><span className="span-hora"> 9:20 PM</span></div>
            </div>
            <div className="row">
              <div className="col-4 icons-itinerario izqicon"> <img src="/sources/cena.png" alt="Fondo" className="img-itinerario2" /></div>
              <div className="col-8 text-itinerario der"><span className=" ">Cena</span> <span className="span-hora"> 9:20 PM</span></div>
            </div>
            <div className="row">
              <div className="col-4 icons-itinerario izqicon"> <img src="/sources/bals.png" alt="Fondo" className="img-itinerario3" /></div>
              <div className="col-8 text-itinerario der"><span className=" ">Vals Esposos</span> <span className="span-hora"> 9:20 PM</span></div>
            </div>
            <div className="row">
              <div className="col-4 icons-itinerario izqicon"> <img src="/sources/damcin.png" alt="Fondo" className="img-itinerario" /></div>
              <div className="col-8 text-itinerario der"><span className=" "> A bailar</span> <span className="span-hora"> 9:20 PM</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* FIN SECCION 6*/}
      <div className="cont-full seccion  cont-confirmation">
        <div class="d-flex flex-column align-items-center text-center confir">
          <h2 class="text-confirmation"> Confirma tu asistencia </h2>
          <p class="text-msj-confirmation downup"> Por favor danos tu respuesta antes del 4-12-2025. </p>
          <div className="row g-3 mx-3 ">
            <div className="col-8 col-sm-8 col-md-6 col-lg-6  izq">
              <input id="search" type="search" className="form-control me-2" onChange={handleInput} value={inputValue}
                placeholder="Agrega ID de invitado" />
            </div>

            <div className="col-4 col-sm-4 col-md-6 col-lg-6 d-flex align-items-center justify-content-start   der">

              <i class="bi bi-search" onClick={handleClick}> Buscar</i>
            </div>
            {mensaje && <h5 className="text-success text-center ">{mensaje}</h5>}
            {error && <h5 className="text-danger text-center mt-3">{error}</h5>}
          </div>
        </div>
        <hr />
        <div className="row">
          {adultos.length > 0 && (
            <>
              <div className="col-12 col-md-6 ">
                <h4 className="text-center">Adultos</h4>
                {adultos.map((invitadosFamily) => (

                  <div key={invitadosFamily.id} className="mb-2">
                    <div className="row">
                      <div className="col-12 col-md-6 ">
                        <strong className="me-3 mb-2">
                          {invitadosFamily.name} {invitadosFamily.apellido}
                        </strong>
                      </div>
                      <div className="col-12 col-md-6 ">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`}
                            id={invitadosFamily.id} value='Si' onChange={handleChangeRadio} />
                          <label className="form-check-label" htmlFor={`si-${invitadosFamily.id}`}>
                            Sí
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`}
                            id={invitadosFamily.id} value='No' onChange={handleChangeRadio} />
                          <label className="form-check-label" htmlFor={`no-${invitadosFamily.id}`}>
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {ninos.length > 0 && (
            <>
              <div className="col-12 col-md-6 ">
                <h4 className="text-center">Niños</h4>
                {ninos.map((invitadosFamily) => (
                  <div key={invitadosFamily.id} className="mb-2">
                    <div className="row">
                      <div className="col-12 col-md-6 ">
                        <strong className="me-3 mb-2">
                          {invitadosFamily.name} {invitadosFamily.apellido}
                        </strong>
                      </div>
                      <div className="col-12 col-md-6 ">

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`}
                            id={invitadosFamily.id} value='Si' onChange={handleChangeRadio} />
                          <label className="form-check-label" htmlFor={`si-${invitadosFamily.id}`}>
                            Sí
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`}
                            id={invitadosFamily.id} value='No' onChange={handleChangeRadio} />
                          <label className="form-check-label" htmlFor={`no-${invitadosFamily.id}`}>
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}




          {(adultos.length > 0 || ninos.length > 0) && (
            <div className="text-center my-4">
              <button className="btn px-4" onClick={confirmar} disabled={disable}>
                <i className="bi bi-check2-circle me-2"></i>
                Confirmar
              </button>
            </div>
          )}
        </div>
      </div>
      {/* FIN SECCION 7*/}
      <footer>
        <p className="text-center">&copy; 2025 Invitacion B&A | Creado por Entheosmultimedia</p>
      </footer>

    </div >
  );

}

