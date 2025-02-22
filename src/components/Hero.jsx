const Hero = () => {
    return (
      <>
        <div className="hero" id="Hero">
            <h1 className="nombre">Julian Sanguineti</h1>
            <h3 className="cargo">Desarrollador de software</h3>
            <p className="presentacion">
              Soy un desarrollador de software de 21 años con un enfoque en el front-end. Con dos años de experiencia en proyectos
              personales y colaborativos, trabaje en el desarrollo de aplicaciones web y móviles. Actualmente, continúo
              perfeccionando mis habilidades y aprendiendo nuevas tecnologías, mientras busco mi primera oportunidad
              profesional para seguir creciendo en el campo del desarrollo.
            </p>
            <a href="/mi-portafolio/Curriculo.pdf" className="boton-cv" download="Curriculo.pdf">Descargar CV<i className="bi bi-download"></i></a>
          </div>
      </>
    );
};

export default Hero;