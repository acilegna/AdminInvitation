import { useEffect } from "react";
import { animate, inView } from "framer-motion";

export default function useScrollSections() {
  useEffect(() => {
    // animacion pra titulo
    inView(".seccion h2", (element) => {
      animate(
        element,
        { opacity: 1, x: [-100, 0] },
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

      // cleanup: cuando sale de vista
      return () => animate(element, { opacity: 0, x: -100 });
    });

    inView(".seccion .lados", (element) => {
      animate(
        element,
        { opacity: 1, y: [-100, 0] }, //   de arriba hacia abajo
        {
          duration: 3,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

       
      return () => animate(element, { opacity: 0, y: -100 });
    });

    //reveal de arriba hacia abajo
     inView(".seccion  .updown", (element) => {
    
    animate(
      element,
      { 
        clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"], // 👈 se revela de arriba a abajo
        opacity: [0, 1] 
      },
      {
        duration: 2,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );

    // cleanup: si quieres ocultarla al salir
    return () => animate(element, { clipPath: "inset(0 0 100% 0)", opacity: 0 });
  });

    inView(".seccion .downup", (element) => {
      animate(
        element,
        { opacity: 1, y: [80, 0] }, //   de arriba hacia abajo
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

      // cleanup: cuando sale de vista
      return () =>
        animate(
          element,
          { opacity: 1, y: 80 }, //   vuelve hacia abajo (simétrico)
          { duration: 2 }
        );
    });
  }, []);
}
