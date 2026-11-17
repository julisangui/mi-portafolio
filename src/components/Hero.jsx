import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="hero" id="Inicio">
        <h1 className="cargo">Diseñador UX/UI · Desarrollador UI · QA Tester</h1>
        <p className="presentacion">
          ¡Hola! Soy <strong className="nombre">Julian Sanguineti</strong>. Soy un técnico en informática,
          diseñador UX/UI, desarrollador Front-End, y un QA tester (manual y automatizado), con
          experiencia previa en soporte técnico de nivel 1 y una gran pasión por la tecnología. Busco dar mis
          primeros pasos profesionales sumándome a un equipo de TI donde pueda aportar valor y seguir creciendo.
        </p>
        <a href="/mi-portafolio/Curriculo.docx" className="boton-cv" download="Curriculo.docx">Descargar CV<FiDownload className="download"/></a>
      </div>
    </>
  );
};

export default Hero;
