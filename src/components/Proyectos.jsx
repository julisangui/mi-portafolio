import tropicalBeach from '../assets/tropical-beach.jpg';
import buenosAires from '../assets/buenos-aires.jpg';
import eCommerce from '../assets/e-commerce.avif';


const Proyectos = () => {
    return (
      <>
        <h2 className="titulo-proyectos" id="Proyectos">Proyectos</h2>
        <div className="tarjeta-proyecto">
          <img src={tropicalBeach} alt="Imagen de turismo caribeño" className="imagen-proyecto" />
          <div className="info-proyecto">
            <h3 className="titulo-proyecto">Página de Turismo Caribeño</h3>
            <p className="descripcion-proyecto">
              Esta pagina es un SPA de un hotel ficticio caribeño en el cual se podra solicitar una reserva en dicho hotel seleccionado, además de ver sus servicios y precios.
            </p>
            <div className="herramientas-utilizadas">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>
            <div className="boton-proyecto">
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-enlace">
                Ir a la página <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="tarjeta-proyecto">
          <img src={buenosAires} alt="Imagen de turismo caribeño" className="imagen-proyecto" />
          <div className="info-proyecto">
            <h3 className="titulo-proyecto">Página de actividades de la CABA</h3>
            <p className="descripcion-proyecto">
              Esta pagina funciona como una guia turistica sobre las cosas que puedes hacer en la ciudad de Buenos Aires, ver su información y sus actividades.
            </p>
            <div className="herramientas-utilizadas">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Python</span>
              <span>MySQL</span>
            </div>
            <div className="boton-proyecto">
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-enlace">
                Ir a la página <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="tarjeta-proyecto">
          <img src={eCommerce} alt="Imagen de turismo caribeño" className="imagen-proyecto" />
          <div className="info-proyecto">
            <h3 className="titulo-proyecto">e-commerce gamer</h3>
            <p className="descripcion-proyecto">
              Un e-commerce que ofrece una amplia gama de productos gamer. El sitio incluye la opción de realizar compras y funcionalidades de filtrado y búsqueda para facilitar la navegación.
            </p>
            <div className="herramientas-utilizadas">
              <span>HTML</span>
              <span>CSS</span>
              <span>TypeScript</span>
              <span>Angular</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
            <div className="boton-proyecto">
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-enlace">
                Ir a la página <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Proyectos;