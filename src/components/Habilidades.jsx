import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Figma from "../assets/Figma.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import TypeScript from "../assets/TypeScript.png";
import React from "../assets/React.png";
import Nextjs from "../assets/Next-js.png";
import Bootstrap from "../assets/Bootstrap.png";
import ShadcnUI from "../assets/Shadcn-ui.png";
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
  { nombre: "Shadcn/ui", nivel: "Intermedio", icono: ShadcnUI },
  { nombre: "Python", nivel: "Intermedio", icono: Python },
  { nombre: "Node.js", nivel: "Básico", icono: NodeJs },
  { nombre: "Express.js", nivel: "Básico", icono: Express },
  { nombre: "MySql", nivel: "Intermedio", icono: MySql },
  { nombre: "Git", nivel: "Intermedio", icono: Git },
];

const habilidadesBlandas = [
  "Inglés",
  "Metodologías Ágiles",
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
];

const Habilidades = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div id="Habilidades">
      <h2
        data-aos="fade-right"
        data-aos-offset="150"
        className="titulo-habilidades"
      >
        Habilidades
      </h2>

      <div className="contenedor-habilidades">
        {habilidades.map((habilidad, index) => (
          <div
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-delay={index * 50}
            key={habilidad.nombre}
            className="tarjeta"
          >
            <img
              src={habilidad.icono}
              alt={habilidad.nombre}
              className="icono"
            />
            <div className="info-habilidad">
              <h4>{habilidad.nombre}</h4>
              <p>{habilidad.nivel}</p>
            </div>
          </div>
        ))}
      </div>

      <div 
        data-aos="fade-left"
        data-aos-offset="10"
        className="otras-habilidades"
      >
        {habilidadesBlandas.map((habilidadBlanda, index) => (
          <p key={index}>{habilidadBlanda}</p>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;