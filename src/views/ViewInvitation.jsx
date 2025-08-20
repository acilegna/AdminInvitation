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



    </div >
  );

}

