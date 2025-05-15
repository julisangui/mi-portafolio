import { motion } from "framer-motion";

const Proyectos = () => {
  return (
    <div className="contenedor-proyectos">
      <motion.h2
        className="titulo-proyectos"
        id="Proyectos"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Proyectos
      </motion.h2>


      <motion.p
        className="presentacion-proyectos"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        El siguiente botón te llevará a una nueva pestaña con la página donde están publicados los proyectos 
        que desarrollé a partir de desafíos de Frontend Mentor. Cada uno de estos proyectos fue una oportunidad 
        para enfrentar desafíos reales de diseño y funcionalidad. No son solo ejercicios, sino soluciones pensadas 
        con atención al detalle, buenas prácticas y enfoque en la experiencia del usuario. Reflejan mi forma 
        de aprender: construyendo, equivocándome y mejorando en cada iteración.
      </motion.p>

      <motion.button
        className="boton-pagina-proyectos"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <a
          href="https://julisangui.github.io/pagina-principal-de-proyectos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡ver proyectos!
        </a>
      </motion.button>

    </div>
  );
};

export default Proyectos;