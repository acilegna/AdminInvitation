import { useEffect } from "react";
import { animate, inView } from "framer-motion";

export default function useScrollSections() {
  useEffect(() => {
    inView(".seccion .scale", (element) => {
      // aseguramos el origen de la transformación en el centro
      element.style.transformOrigin = "center center";

      animate(
        element,
        { opacity: 1, scale: [1, 1.1, 1] }, // zoom in y vuelve al centro
        {
          duration: 3,
          easing: [0.25, 0.1, 0.25, 1], // ease suave
        }
      );

      return () =>
        animate(
          element,
          { opacity: 0, scale: 0.8 }, // vuelve a reducirse al salir
          { duration: 0.6 }
        );
    });

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

    inView(".seccion .izq", (element) => {
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

    inView(".seccion .izqicon", (element) => {
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

    inView(".seccion .der", (element) => {
      animate(
        element,
        { opacity: 1, x: [100, 0] }, // 👉 inicia desde la derecha (100) hasta 0
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

      // cleanup: cuando sale de vista
      return () => animate(element, { opacity: 0, x: 100 });
    });

    inView(".seccion .lados", (element) => {
      animate(
        element,
        { opacity: 1, y: [-100, 0] }, //   de arriba hacia abajo
        {
          duration: 3,
         // easing: [0.75],
          easing: "linear"
        }
      );

      return () => animate(element, { opacity: 0, y: -100 }, { duration: 0.5 }, { threshold: 0.5 }); 
      
    });

    //reveal de arriba hacia abajo
    inView(".seccion .updown", (element) => {
      animate(
        element,
        {
          transform: ["translateY(100%)", "translateY(0)"], 
         
          opacity: [0, 1],
        },
        {
          duration: 2,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

      // Reset opcional, pero más suave (sin parpadeo)
      return () =>
        animate(
          element,
          { clipPath: "inset(0 0 100% 0)", opacity: 0 },
          { duration: 0.5 } //  
        );
    },  { threshold: 0.5 }); //  se ejecuta al 50% de visibilidad);

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
