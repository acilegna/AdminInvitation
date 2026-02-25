"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu({ resumen }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      ref={containerRef}
      style={nav}
    >
      <motion.div style={background} variants={sidebarVariants} />

      <Navigation resumen={resumen} />
      <MenuToggle toggle={() => setIsOpen((prev) => !prev)} />
     {/*     toma el valor anterior (prev) Lo invierte (true → false, false → true) Actualiza el estado isOpen */}
    </motion.nav>
  );
}


const nav = {
  width: 170,
  backgroundColor: "#0d0c23",
  zIndex: 5,
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ resumen }) => (
  <motion.ul style={list} variants={navVariants}>
    <motion.li
      variants={itemVariants}
      /* whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} */
      className="nav-item"
      style={opc}
    >
      <Link className="nav-link active" to="/ver">
        {" "}
        <i className="bi bi-house-door"></i> Inicio
      </Link>
      <Link className="nav-link active" to="/import">
        <i className="bi bi-file-earmark-excel"></i> Importar
      </Link>
      <Link className="nav-link active" to="/invitados">
        <i className="bi bi-person-vcard"></i> Invitados
      </Link>
      <Link className="nav-link active" to="/detalles" onClick={resumen}>
        <i className="bi bi-binoculars"></i> Detalles
      </Link>
      <Link className="nav-item mt-3 nav-link   active">
        <i className="bi bi-box-arrow-right"> </i>Salir
      </Link>
    </motion.li>
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    //color
    stroke="hsla(0, 0%, 100%, 1.00)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const background = {
  /*   backgroundColor: "#c5065fff", */
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 170,
};

const toggleContainer = {
  zIndex: 5,
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  left: 15,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "#0d0c23",
};

const list = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
};
const opc = {
  color: "white",
};
