import { FaWhatsapp } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

const Contacto = () => {
  const miEmail = "juliangel2003@gmail.com";
  const miTelefono = "5491159638422";
  const mensajeWa = encodeURIComponent(
    "Hola Julián, vi tu portafolio y me gustaría contactarte."
  );

  const gmailUrl = `mailto:${miEmail}?subject=Contacto%20desde%20la%20web`;
  const whatsappUrl = `https://wa.me/${miTelefono}?text=${mensajeWa}`;

  return (
    <footer className="footer-container" id="Contacto">
      <p className="mensaje-final">¡Muchas gracias por llegar hasta acá!</p>

      <div className="footer-links">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>

        <a href={gmailUrl}>
          <CiMail />
        </a>

        <a href="https://www.linkedin.com/in/julian-sanguineti/" target="_blank" rel="noopener noreferrer">
          <TiSocialLinkedin />
        </a>

        <a href="https://github.com/julisangui" target="_blank" rel="noopener noreferrer">
          <LuGithub />
        </a>
      </div>

      <hr />

      <p className="copyright">
        © Julian Sanguineti. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Contacto;