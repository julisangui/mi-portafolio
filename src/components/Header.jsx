import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <button id="abrir" className="abrir-menu" onClick={toggleMenu}><i className="bi bi-list"></i></button>

      <nav className={`barra-navegacion ${menuVisible ? "visible" : ""}`} id="nav">
        <button className="cerrar-menu" id="cerrar" onClick={toggleMenu}><i className="bi bi-x"></i></button>
        <a href="#Home" className="menu" onClick={handleLinkClick}>Home</a>
        <a href="#Habilidades" className="menu" onClick={handleLinkClick}>Habilidades</a>
        <a href="#Proyectos" className="menu" onClick={handleLinkClick}>Proyectos</a>
        <a href="#Footer" className="menu" onClick={handleLinkClick}>Footer</a>
      </nav>
    </>
  );
};

export default Header;
