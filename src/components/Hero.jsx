const Hero = () => {
    return (
      <>
        <div className="hero" id="Hero">
            <h1 className="nombre">Julian Sanguineti</h1>
            <h3 className="cargo">Desarrollador de software</h3>
            <p className="presentacion">
              ¡Hola! soy Julian, tengo 21 años y soy un desarrollador de software con mayor experiencia en el desarrollo front-end.
              Llevo 2 años creando proyectos personales y colaborativos, que incluyen: desarrollo de aplicaciones web y moviles.
              Actualmente, continuo perfeccionándome en nuevas tecnologías y aprendiendo nuevas habilidades como el desarrollo de IA
              y Machine Learning, mientras que a la vez busco mi primera oportunidad profesional y seguir creciendo como desarrollador.
            </p>
            <a href="/mi-portafolio/Curriculo.pdf" className="boton-cv" download="Curriculo.pdf">Descargar CV<i className="bi bi-download"></i></a>
          </div>
      </>
    );
};

export default Hero;