import Figma from '../assets/Figma.png';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JavaScript.png';
import TypeScript from '../assets/TypeScript.png';
import ReactLogo from '../assets/React.png';
import WordPress from '../assets/WordPress.png';
import Bootstrap from '../assets/Bootstrap.png';
import MaterialUI from '../assets/material-ui.svg';
import Python from '../assets/Python.png';
import PHP from '../assets/PHP.png';
import NodeJs from '../assets/Node-js.svg';
import MySql from '../assets/MySql.png';
import MongoDB from '../assets/MongoDB.png';
import Git from '../assets/Git.png';

const Habilidades = () => {
  return (
    <>
      <h2 className="titulo-habilidades" id="Habilidades">Habilidades</h2>
      <div className="habilidades">

        <div className="tarjeta">
          <img src={Figma} alt="Figma" className="icono" />
          <div className="info-habilidad">
            <h4>Figma</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={HTML} alt="HTML" className="icono" />
          <div className="info-habilidad">
            <h4>HTML</h4>
            <p>Avanzado</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={CSS} alt="CSS" className="icono" />
          <div className="info-habilidad">
            <h4>CSS</h4>
            <p>Avanzado</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={JavaScript} alt="JavaScript" className="icono" />
          <div className="info-habilidad">
            <h4>JavaScript</h4>
            <p>Avanzado</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={TypeScript} alt="TypeScript" className="icono" />
          <div className="info-habilidad">
            <h4>TypeScript</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={ReactLogo} alt="React" className="icono" />
          <div className="info-habilidad">
            <h4>React</h4>
            <p>Avanzado</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={WordPress} alt="Angular" className="icono" />
          <div className="info-habilidad">
            <h4>WordPress</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={Bootstrap} alt="Bootstrap" className="icono" />
          <div className="info-habilidad">
            <h4>Bootstrap</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={MaterialUI} alt="MaterialUI" className="icono" />
          <div className="info-habilidad">
            <h4>Material UI</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={Python} alt="Python" className="icono" />
          <div className="info-habilidad">
            <h4>Python</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={PHP} alt="PHP" className="icono" />
          <div className="info-habilidad">
            <h4>PHP</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={NodeJs} alt="Node.js" className="icono" />
          <div className="info-habilidad">
            <h4>Node.js</h4>
            <p>Basico</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={MySql} alt="MySql" className="icono" />
          <div className="info-habilidad">
            <h4>MySql</h4>
            <p>Intermedio</p>
          </div>
        </div>

        <div className="tarjeta">
          <img src={MongoDB} alt="MongoDB" className="icono" />
          <div className="info-habilidad">
            <h4>MongoDB</h4>
            <p>Basico</p>
          </div>
        </div>
        
        <div className="tarjeta">
          <img src={Git} alt="Git" className="icono" />
          <div className="info-habilidad">
            <h4>Git</h4>
            <p>Intermedio</p>
          </div>
        </div>
      </div>

      <div className="otras-habilidades">
        <p>Ingles B2</p>
        <p>Metodologías Ágiles Scrum y Kanban</p>
        <p>Atención al detalle</p>
        <p>Autoconocimiento</p>
        <p>Autodesarrollo</p>
        <p>Comunicación</p>
        <p>Creatividad e innovación</p>
        <p>Gestión del tiempo</p>
        <p>Liderazgo</p>
        <p>Pensamiento analítico y crítico</p>
        <p>Perseverancia</p>
        <p>Proactividad</p>
        <p>Resolución de problemas</p>
        <p>Trabajo en equipo</p>
      </div>
    </>
  );
};

export default Habilidades;
