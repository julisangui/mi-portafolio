import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="hero" id="Inicio">
        <h1 className="cargo">Desarrollador Full-Stack & Diseñador UX/UI</h1>
        <p className="presentacion">
          ¡Hola! soy <strong className="nombre">Julian Sanguineti</strong>, soy un diseñador UX/ UI y desarrollador full-stack
          con enfoque en el front-end y un especial interés en ciberseguridad, inteligencia artificial y otros campos de la tecnología.
          Cuento con dos años de experiencia en proyectos personales y colaborativos en programación web, donde participé en el
          desarrollo de aplicaciones y sistemas que cumplan con los estandares UX/ UI. Actualmente busco seguir creciendo
          profesionalmente y contribuir al desarrollo de productos digitales innovadores.
        </p>
        <a href="/mi-portafolio/Curriculo.pdf" className="boton-cv" download="Curriculo.pdf">Descargar CV<FiDownload className="download"/></a>
      </div>
    </>
  );
};

export default Hero;
