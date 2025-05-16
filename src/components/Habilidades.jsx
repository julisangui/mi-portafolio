import { motion } from "framer-motion";

import Figma from "../assets/Figma.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import TypeScript from "../assets/TypeScript.png";
import React from "../assets/React.png";
import Nextjs from "../assets/Next-js.png";
import Bootstrap from "../assets/Bootstrap.png";
import TailwindCSS from "../assets/Tailwind-css.png";
import ShadcnUI from "../assets//Shadcn-ui.png";
import FramerMotion from "../assets//framer-motion.png";
import Python from "../assets/Python.png";
import NodeJs from "../assets/Node-js.svg";
import Express from "../assets/express-js.png";
import MySql from "../assets/MySql.png";
import Git from "../assets/Git.png";

const habilidades = [
  { nombre: "Figma", nivel: "Intermedio", icono: Figma },
  { nombre: "HTML", nivel: "Avanzado", icono: HTML },
  { nombre: "CSS", nivel: "Avanzado", icono: CSS },
  { nombre: "JavaScript", nivel: "Intermedio", icono: JavaScript },
  { nombre: "TypeScript", nivel: "Intermedio", icono: TypeScript },
  { nombre: "React", nivel: "Intermedio", icono: React },
  { nombre: "Next.js", nivel: "Intermedio", icono: Nextjs },
  { nombre: "Bootstrap", nivel: "Intermedio", icono: Bootstrap },
  { nombre: "Tailwind CSS", nivel: "Intermedio", icono: TailwindCSS },
  { nombre: "Shadcn/ui", nivel: "Intermedio", icono: ShadcnUI },
  { nombre: "Framer Motion", nivel: "Intermedio", icono: FramerMotion },
  { nombre: "Python", nivel: "Intermedio", icono: Python },
  { nombre: "Node.js", nivel: "Básico", icono: NodeJs },
  { nombre: "Express.js", nivel: "Básico", icono: Express },
  { nombre: "MySql", nivel: "Intermedio", icono: MySql },
  { nombre: "Git", nivel: "Intermedio", icono: Git },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Habilidades = () => {
  return (
    <div id="Habilidades">
      <motion.h2
        className="titulo-habilidades"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        Habilidades
      </motion.h2>

      <motion.div
        className="contenedor-habilidades"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.9 }}
      >
        {habilidades.map((habilidad) => (
          <motion.div key={habilidad.nombre} className="tarjeta" variants={item}>
            <img src={habilidad.icono} alt={habilidad.nombre} className="icono" />
            <div className="info-habilidad">
              <h4>{habilidad.nombre}</h4>
              <p>{habilidad.nivel}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="otras-habilidades"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.9 }}
        >
        
        {[
          "Inglés",
          "Metodologías Ágiles Scrum y Kanban",
          "Atención al detalle",
          "Autoconocimiento",
          "Autodesarrollo",
          "Comunicación",
          "Creatividad e innovación",
          "Gestión del tiempo",
          "Liderazgo",
          "Pensamiento analítico y crítico",
          "Perseverancia",
          "Proactividad",
          "Resolución de problemas",
          "Trabajo en equipo",
        ].map((habilidadBlanda, index) => (
          <motion.p key={index} variants={item}>
            {habilidadBlanda}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default Habilidades;