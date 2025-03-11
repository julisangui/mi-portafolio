const Footer = () => {
  return (
    <>
      <div className="footer-container" id="Footer">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/julian-angel-sanguineti/"
            target="_blank"
            title="Mi  LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/julisangui" target="_blank">
            <i className="bi bi-github" title="MI Github"></i>
          </a>
        </div>
        <hr></hr>
        <p className="copyright">
          ©2025 Julian Sanguineti. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export default Footer;
