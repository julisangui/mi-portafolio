const Proyectos = () => {
  return (
    <>
      <h2 className="titulo-proyectos" id="Proyectos">Proyectos</h2>
      <div>
        <p className="presentacion-proyectos">
          El siguiente botón te llevará a una nueva pestaña con la página donde están publicados los proyectos 
          que desarrollé a partir de desafíos de Frontend Mentor. Cada uno de estos proyectos fue una oportunidad 
          para enfrentar desafíos reales de diseño y funcionalidad. No son solo ejercicios, sino soluciones pensadas 
          con atención al detalle, buenas prácticas y enfoque en la experiencia del usuario. Reflejan mi forma 
          de aprender: construyendo, equivocándome y mejorando en cada iteración.
        </p>
        <button className="boton-pagina-proyectos">
          <a href="https://julisangui.github.io/pagina-principal-de-proyectos/" target="_blank">¡ver proyectos!</a>
        </button>
      </div>
    </>
  );
};

export default Proyectos;
