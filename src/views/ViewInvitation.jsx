import { useInvitation } from "../hooks/useInvitation";
import { useDatosInvitados } from "../hooks/useDatosInvitados";
import useScrollSections from "../hooks/useScrollSections";
import { motion, useScroll } from "framer-motion";

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
  const animate = useScrollSections();
  return (
    <div className="container-fluid sections">


      <div className="cont-full scroll-section">
        <img src="/sources/1.jpg" alt="Fondo" className="imagen-full" />
        <div className="fondo-imagen imagen-full"></div>
        <div className="couple-name">
          <h2 className="title-name-text ">Ana &amp; Boris</h2>
          <h4 className="title-merried-text">Unimos nuestras vidas</h4>
        </div>
      </div>

      <div className="cont-full cont-sound scroll-section">

        <div>
          <audio id="audio" controls loop>
            <source src="https://acilegna.github.io/audio.github.io/noc.mp3" type="audio/mp3" />
          </audio>

          <div className="cont-msj">
            <h2 className="mt-4"><span class="text-save-date">Estás Invitado!</span></h2>
            <h5 className="mt-4"><span class="text-msj">Queremos que seas parte de este momento tan especial</span></h5>
          </div>
        </div>

      </div>

      <div className="cont-full scroll-section">
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

      <div className="cont-full scroll-section">
        <div class="cont-datos">
          <h2><span class="text-where">¿Cuándo y Dónde?</span></h2>
          <div class="cont-date">
            <h3>
              <span class="text-date day">10</span>
              <span class="text-date">12</span>
              <span class="text-date">26</span>
            </h3>
          </div>
          <div class="row ">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6  cont-text-ceremonia">
              <h3><span class="text-ceremonia">Ceremonia</span></h3>
              <h4><span class="text-churp">Parroquia San José</span></h4>
              <i class="bi bi-geo-alt ms-1 icon-color"></i>
            </div>

            <div class="col-12 col-sm-6 col-md-6 col-lg-6 cont-text-celebration">
              <h3><span class="text-celebration">Celebración</span></h3>
              <h4><span class="text-churp">Hacienda Guadalupe</span></h4>
              <i class="bi bi-geo-alt ms-1 icon-color"></i>
            </div>
          </div>
        </div>






      </div>

    </div >
  );

}

