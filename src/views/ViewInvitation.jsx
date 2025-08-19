import { useInvitation } from "../hooks/useInvitation";
import { useDatosInvitados } from "../hooks/useDatosInvitados";
import { motion, useScroll } from "framer-motion";
import { animate, inView } from "framer-motion";  



export default function ViewInvitation() {

  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#000000ea",
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
  return (
    <div className="container-fluid sections">
      <header id="site-header"></header>

      <div className="cont-full">
        <img src="/sources/1.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <div className="couple-name">
          <h2 className="title-name-text ">Ana &amp; Boris</h2>
          <h4 className="title-merried-text">Unimos nuestras vidas</h4>
        </div>
      </div>

      <div className="cont-med">
        <div className="container cont-audio">
          <audio id="audio" controls loop  >
            <source src="https://acilegna.github.io/audio.github.io/noc.mp3" type="audio/mp3" />
          </audio>
        </div>
        <div className="cont-msj">
          <h2><span class="text-save-date">Estás Invitado!</span></h2>
          <h5><span class="text-msj">Queremos que seas parte de este momento tan especial</span></h5>
        </div>
      </div>

      <div className="cont-full">
        <img src="/sources/3.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <h4><span className="text-time">Faltan</span></h4>
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

      <div className="container">
        <div class="row">
          <div class="col-12 col-md-12 d-flex flex-column align-items-center cont-ww">
            <h2><span class="text-where">¿Cuándo y Dónde?</span></h2>
            <h3>
              <span class="text-date day">10</span>
              <span class="text-date">12</span>
              <span class="text-date">26</span>
            </h3>
          </div>
        </div>
        <div class="row">

          <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-ceremonia  d-flex flex-column align-items-center">
            <h3><span class="text-ceremonia">Ceremonia</span></h3>
            <h4><span class="text-churp">Parroquia San José</span></h4>
            <i class="bi bi-geo-alt ms-1 icon-color"></i>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
            <h3><span class="text-celebration">Celebración</span></h3>
            <h4 ><span class="text-churp">Hacienda Guadalupe</span></h4>
            <i class="bi bi-geo-alt ms-1 icon-color"></i>
          </div>
        </div>
      </div>

      <div className="cont-full">
        <img src="/sources/1.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <div class="d-flex flex-column align-items-center cont-presents">

          <h2><span class="text-present">Sugerencias de regalo</span></h2>
          <div className="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4 ><span class="text-present-place">Liverpool</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>

            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4 ><span class="text-present-place">Amazon</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>
            </div>
          </div>

        </div>
      </div>



      <div className="container">
        <div class="cont-confirmation">
          <h2 class="text-center"><span class="text-confirmation">Confirma tu asistencia</span></h2>
          <p class="text-msj-confirmation text-center"> Por favor danos tu respuesta antes del 4-12-2025. </p>
          <div className="row">
            <div className="col-12 col-md-7">

              <input
                id="search"
                type="search"
                className="form-control"
                onChange={handleInput}
                value={inputValue}
                placeholder="Agrega tu ID de invitado"
              />
            </div>
            <div className="col-12 col-md-5 d-grid justify-content-center d-flex flex-column">
              <i class="bi bi-search" onClick={handleClick}> Buscar</i>
            </div>
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
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`} id={invitadosFamily.id}
                            value='Si' onChange={handleChangeRadio} />
                          <label className="form-check-label" htmlFor={`si-${invitadosFamily.id}`}>
                            Sí
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`} id={invitadosFamily.id}
                            value='No' onChange={handleChangeRadio} />
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
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`} id={invitadosFamily.id}
                            value='Si' onChange={handleChangeRadio} />
                          <label className="form-check-label" htmlFor={`si-${invitadosFamily.id}`}>
                            Sí
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name={`respuesta-${invitadosFamily.id}`} id={invitadosFamily.id}
                            value='No' onChange={handleChangeRadio} />
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

          {mensaje && <h5 className="text-success text-center">{mensaje}</h5>}
          {error && <h5 className="text-danger text-center">{error}</h5>}


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

