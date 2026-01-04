const Hero = () => {
  return (
    <>
      <div className="hero" id="Inicio">
        <h1 className="nombre">Julian Sanguineti</h1>
        <h3 className="cargo">Desarrollador Full-Stack</h3>
        <p className="presentacion">
          Soy un desarrollador web/móvil Full-Stack con especial interés en el Front-End. Cuento con dos años de experiencia en proyectos personales y 
          colaborativos, donde participé en el desarrollo de aplicaciones y sistemas con interfaces interactivas. Actualmente busco seguir creciendo 
          profesionalmente y contribuir al desarrollo de productos digitales innovadores.
        </p>
        <a
          href="/mi-portafolio/Curriculo.pdf"
          className="boton-cv"
          download="Curriculo.pdf"
        >
          Descargar CV<i className="bi bi-download"></i>
        </a>
      </div>
    </>
  );
};

export default Hero;
