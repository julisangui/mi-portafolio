import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TfiNewWindow } from "react-icons/tfi";


const Proyectos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className="contenedor-proyectos" id="Proyectos">
        <h2 data-aos="zoom-in" data-aos-offset="150" className="titulo-proyectos">Proyectos</h2>
        <div data-aos="zoom-in" data-aos-offset="150" className="tarjetas-proyectos">
          <div className="tarjeta-proyecto">
            <img src="/mi-portafolio/src/assets/fondo-UX-UI.png" />
            <h3>Proyectos de diseño UX/UI</h3>
            <p>
              Portafolio de trabajo en Figma donde se muestran todos mis proyectos personales como diseñador UX/UI.
              Como plus, algunos de estos proyectos incluyen un enlace a su versión final desarrollado con tecnologias de
              maquetación y diseño web como forma de mostrar tanto mi extensión de habilidades en UX/UI como en desarrollo web. 
            </p>
            <a href="https://www.figma.com/files/team/1435879214214918684/folder/298769960?fuid=1435879212373696729" target="_blank">Ver proyectos<TfiNewWindow className="TfiNewWindow"/></a>
          </div>

          <div className="tarjeta-proyecto">
            <img src="/mi-portafolio/src/assets/fondo-QA-testing.jpg" />
            <h3>Proyectos de QA Testing</h3>
            <p>
              Repositorio de Github donde se almacena proyectos de QA testing hecho con Cypress
              con codigo JavaScript. Fue usado para extender, y poner en practica mis habilidades en JavaScript.
            </p>
            <a href="">Ver proyectos<TfiNewWindow className="TfiNewWindow"/></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;