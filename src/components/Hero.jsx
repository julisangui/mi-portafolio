const Hero = () => {
    return (
      <>
        <div className="hero" id="Hero">
            <h1 className="nombre">Julian Sanguineti</h1>
            <h3 className="cargo">Desarrollador Front - End</h3>
            <p className="presentacion">
              ¡Hola! soy Julian, tengo 21 años y soy un desarrollador front-end con experiencia en el desarrollo full-stack. Llevo 2 años creando interfaces responsivas y atractivas en proyectos personales y colaborativos. Actualmente, continuo perfeccionándome en nuevas tecnologías mientras busco mi primera oportunidad profesional y seguir creciendo como desarrollador.
            </p>
            <a href="./public/Curriculo.pdf" className="boton-cv">Descargar CV<i className="bi bi-download"></i></a>
        </div>
      </>
    );
};

export default Hero;