import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="hero" id="Inicio">
        <h1 className="cargo">Diseñador & desarrollador UX/UI, Tester y soporte TI</h1>
        <p className="presentacion">
          ¡Hola! soy <strong className="nombre">Julian Sanguineti</strong>, Soy un técnico en informática,
          diseñador UX/UI y desarrollador Front-End con bases sólidas en Testing manual y automatizado y un
          interés especial por la tecnología en general; actualmente trabajo como soporte técnico mientras
          exploro nuevas oportunidades profesionales en el campo del TI.
        </p>
        <a href="/mi-portafolio/Curriculo.docx" className="boton-cv" download="Curriculo.docx">Descargar CV<FiDownload className="download"/></a>
      </div>
    </>
  );
};

export default Hero;
