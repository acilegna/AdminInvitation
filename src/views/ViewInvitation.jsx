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
    <div className="container-fluid sections">

      <div className="cont-full seccion">
        <img src="/sources/m.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <div className="couple-name">
          <h2 className="title-name-text ">Ana &amp; Boris</h2>
          <h4 className="title-merried-text">Unimos nuestras vidas</h4>
        </div>
      </div>


      <div className="cont-full cont-sound seccion">
        <audio id="audio" controls loop>
          <source src="https://acilegna.github.io/audio.github.io/noc.mp3" type="audio/mp3" />
        </audio>

        <div className="cont-msj">
          <h2 ><span class="text-save-date">Estás Invitado!</span></h2>
          <h5 className="mt-4"><span class="text-msj">Queremos que seas parte de este momento tan especial</span></h5>
        </div>

      </div>


      <div className="cont-full seccion ">
        <img src="/sources/3.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>

        <div class="cont-titleContador">
          <h2><span className="text-time">Faltan</span></h2>
        </div>

        <div className="time-values d-flex justify-content-center">
          <div className="time-box ">
            <span className="time-number">{tiempoRestante.dias}</span>
            <div className="time-label">Días</div>
          </div>
          <div className="time-box">
            <span className="time-number">{tiempoRestante.horas}</span>
            <div className="time-label">Horas</div>
          </div>
          <div className="time-box">
            <span className="time-number">{tiempoRestante.minutos}</span>
            <div className="time-label">Minutos</div>
          </div>
          <div className="time-box">
            <span className="time-number">{tiempoRestante.segundos}</span>
            <div className="time-label">Segundos</div>
          </div>
        </div>
      </div>

      <div className="cont-full seccion">

        <div class="d-flex flex-column align-items-center">
          <h2 className="text-center text-where"> ¿Cuándo  Dónde? </h2>
          {/* Contenedor para las imágenes */}
          <div className="d-flex justify-content-center align-items-center flex">
            <div class="col">  <img src="/sources/1.jpg" alt="Fondo" class="img-fluid image" />
            </div>
            <div class="col"> <img src="/sources/2.jpg" alt="Fondo" class="img-fluid image" />
            </div>
            <div class="col"> <img src="/sources/3.jpg" alt="Fondo" class="img-fluid image" />
            </div>
          </div>
          {/*      Contenedor para la fecha */}
          <div class="cont-date">
            <h3>
              <span class="text-date day">10</span>
              <span class="text-date">12</span>
              <span class="text-date">26</span>
            </h3>
          </div>
        </div>


      </div >

      <div className="cont-full seccion cont-presents">
        <img src="/sources/1.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>

        <div class="d-flex flex-column align-items-center">

          <h2><span class="text-present">Sugerencias de regalo</span></h2>
          <div className="row">
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


      <div className="cont-full seccion  cont-confirmation">
        <div class="d-flex flex-column align-items-center text-center confir">
          <h2 class="text-confirmation"> Confirma tu asistencia </h2>
          <p class="text-msj-confirmation"> Por favor danos tu respuesta antes del 4-12-2025. </p>
          <div className="row g-3 mx-3">
            <div className="col-8 col-sm-8 col-md-6 col-lg-6">
              <input id="search" type="search" className="form-control me-2" onChange={handleInput} value={inputValue}
                placeholder="Agrega ID de invitado" />
            </div>

            <div className="col-4 col-sm-4 col-md-6 col-lg-6 d-flex align-items-center justify-content-start ">

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
    </div >
  );

}

