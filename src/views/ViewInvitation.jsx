import { useInvitation } from "../hooks/useInvitation";

const ViewInvitation = () => {
  const tiempoRestante = useInvitation();
  return (
    <div className="container-fluid sections">

      <div className="cont-full">
        <img src="/sources/11.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <div className="couple-name">
          <h2 className="name-text">Ana &amp; Boris</h2>
          <h4 className="merried-text">Unimos nuestras vidas</h4>
        </div>
      </div>

      <div className="cont-med">
        <div className="container cont-audio">
          <audio id="audio" controls loop  >
            <source src="https://acilegna.github.io/audio.github.io/noc.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
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
        <img src="/sources/11.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <div class="d-flex flex-column align-items-center cont-presents">

          <h2><span class="text-present">Sugerencias de regalo</span></h2>
          <div className="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4 ><span class="text-present-place">Liverpool</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>

            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4 ><span class="text-present-place">Amazon</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>
            </div>
          </div>

        </div>
      </div>
      {/*    <div className="container">
        <div class="d-flex flex-column align-items-center">

          <h2><span class="text-present">Sugerencias de regalo</span></h2>
          <div className="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4 ><span class="text-churp">Liverpool</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>

            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-celebration d-flex flex-column align-items-center">
              <i class="bi bi-gift"></i>
              <h4 ><span class="text-churp">Amazon</span></h4>
              <i class="bi  bi-binoculars">Ver regalos</i>
            </div>
          </div>

        </div>
      </div>
 */}


      <div className="container">
        <div class="d-flex flex-column align-items-center">

          <h2><span class="text-confirmation">Confirma tu asistencia</span></h2>
          <p class="text-msj-confirmation"> Por favor danos tu respuesta antes del 4-05-2025. </p>
          <i class="bi bi-check-square">Confirmar</i>
        </div>
      </div>
    </div >
  );
}


export default ViewInvitation