import { useEffect } from "react";
import { animate, inView } from "framer-motion";

export default function useScrollSections() {
  useEffect(() => {
    // Detecta cuando un <pre> entra en vista
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

    inView(".seccion .img", (element) => {
      animate(
        element,
        { opacity: 1, y: [-100, 0] }, // 👈 de arriba hacia abajo
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

      // cleanup: cuando sale de vista
      return () => animate(element, { opacity: 0, y: -100 });
    });

    inView(".seccion .centro", (element) => {
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
          { duration: 0.9 }
        );
    });
  }, []);
}
