import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Proyectos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="contenedor-proyectos">
      <h2
        data-aos="fade-right"
        data-aos-offset="300"
        className="titulo-proyectos" id="Proyectos"
      >
        Proyectos
      </h2>

      <p 
        data-aos="fade-left"
        data-aos-offset="150"
        className="presentacion-proyectos"
      >
        El siguiente botón te llevará a una nueva pestaña con la página donde
        están publicados los proyectos que desarrollé a partir de desafíos de
        Frontend Mentor. Cada uno de estos proyectos fue una oportunidad para
        enfrentar desafíos reales de diseño y funcionalidad. No son solo
        ejercicios, sino soluciones pensadas con atención al detalle, buenas
        prácticas y enfoque en la experiencia del usuario. Reflejan mi forma de
        aprender: construyendo, equivocándome y mejorando en cada iteración.
      </p>

      <div
        data-aos="zoom-in"
        data-aos-offset="150"
        className="boton-pagina-proyectos"
      >
        <a href="https://julisangui.github.io/pagina-principal-de-proyectos/" target="_blank">¡ver proyectos!</a>
      </div>
    </div>
  );
};

export default Proyectos;