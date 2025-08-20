import { useEffect } from "react";
import { animate, inView } from "framer-motion";  

export default function useScrollSections() {
  useEffect(() => {
    // Detecta cuando un <pre> entra en vista
    inView(".scroll-section h2", (element) => {
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
  }, []);
}
