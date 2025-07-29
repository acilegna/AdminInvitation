import { useInvitation } from "../hooks/useInvitation";

const ViewInvitation = () => {
  const tiempoRestante = useInvitation();
  return (
    <div className="container-fluid sections">

      <div className="cont-full">
        <img src="/sources/11.jpg" alt="Fondo" className="imagen-full" />
        <div className="couple-name">
          <h2 className="name-text">Ana &amp; Boris</h2>
          <h4 className="merried-text">Unimos nuestras vidas</h4>
        
        </div>
      </div>
      <div className="cont-med">

        <div className="container contenedor">
          <audio id="audio" controls loop  >
            <source src="https://acilegna.github.io/audio.github.io/noc.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>

        <h2><span class="text-save-date">Estás Invitado!</span></h2>
        <h5><span class="text-msj">Queremos que seas parte de este momento tan especial</span></h5>
        
      </div>
      {/*  <div className="cont-full">

        <img src="/sources/IMG_8118.jpg" alt="Fondo" className="imagen-full" />

        <h2><span class="text-save-date">Save Our Date</span></h2>
        <h3><span class="text-date">20.12.2026</span></h3>
        <h4><span class="text-time">FALTAN</span></h4>


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

      </div> */}
      <div className="cont-full">

        <img src="/sources/3.jpg" alt="Fondo" className="imagen-full" />


        <h4><span className="text-time">FALTAN</span></h4>


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
      <div className="cont-med">

        <div class="row ">
          <div class="col-12 col-md-12 text-center">
            <h2><span class="text-where">¿Cuándo y Dónde?</span></h2>
            <h3><span class="text-date">20.12.2026</span></h3>
          </div>

        </div>
        <div class="row ">
          <div class="col-6 col-md-6 cont-text-ceremonia text-center">
            <h3><span class="text-ceremonia">Ceremonia</span></h3>

            <h4><span class="text-churp">Parroquia de San José Obrero</span></h4>
            <button type="button" class="btn btn-info">
              Ubicación <i class="bi bi-geo-alt ms-1"></i>
            </button>

          </div>

          <div class="col-6 col-md-6 cont-text-celebration">
            <h3><span class="text-celebration">Celebración</span></h3>
            <h4 ><span class="text-churp">Hacienda de Guadalupe</span></h4>
            <button type="button" class="btn btn-info">
              Ubicación <i class="bi bi-geo-alt ms-1"></i>
            </button>
          </div>
        </div>
      </div>

    </div >
  );


}


export default ViewInvitation