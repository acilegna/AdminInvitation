"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom';


export default function Menu({ onToggle }) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)





    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={isOpen ? nav : nav3}
        >
            <motion.div style={background} variants={sidebarVariants} />
            <Navigation />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
    )

}

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const Navigation = () => (
    <motion.ul style={list} variants={navVariants}>
        <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="nav-item"
        >
            <Link className="nav-link text-white active" to="/ver"  > <i className="bi bi-house-door"></i> Inicio</Link>
            <Link className="nav-link text-white active" to="/import"  >
                <i className="bi bi-file-earmark-excel"></i> Importar</Link>
            <Link className="nav-link text-white active" to="/invitados"  >
                <i className="bi bi-person-vcard"></i> Invitados</Link>
            <Link className="nav-link text-white active" to="/detalles"  >
                <i className="bi bi-binoculars"></i> Detalles</Link>
            <li className="nav-item mt-3">
                <a className="nav-link text-white active" href="#">  <i className="bi bi-box-arrow-right"> </i>Salir</a>

            </li>

        </motion.li>
    </motion.ul>
)

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
}


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
}


const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        //color
        stroke="hsla(0, 0%, 100%, 1.00)"
        strokeLinecap="round"
        {...props}
    />
)

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
)

/**
 * ==============   Styles   ================
 */

const nav3 = {
    width: 0,


}

const nav = {
    width: 170,
    backgroundColor: "#02034dff",

}

const background = {
    backgroundColor: "#02034dff",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 170,
}

const toggleContainer = {
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
    background: "transparent",
}

const list = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 60,
}


/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 })
    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}

