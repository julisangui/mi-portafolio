import { useState, useEffect } from "react";

const Header = () => {

  // Estado para el menu hamburguesa

  const [menuVisible, cambiarEstadoMenu] = useState(false); // El menu empieza invisible

  const abrirCerrarMenu = () => {
    cambiarEstadoMenu(!menuVisible); // Funcion para cambiar la barra de navegacion de visible a invisible, utilizado en los botones para abrir y cerrar el menu hamburguesa.
  };

  const clickEnlace = () => {
    cambiarEstadoMenu(false); // Cuando se clickea algun enlace de la barra de navegacion, se cambia el estado del menu hamburguesa para cerrarlo.
  };

  // Estado para la barra de navegacion

  const [navbarEstatico, navbarScroleado] = useState(false); // La barra de navegacion empieza normal (estatico sin el fondo).

  useEffect(() => { const funcionScroll = () => {
      if (window.scrollY > 10) { // Si el scroll de la ventana supera el valor impuesto (10), se activa el estado del navbar scroleado.
        navbarScroleado(true);
      } else {
        navbarScroleado(false);
      }
    };

    window.addEventListener("scroll", funcionScroll);

    return () => window.removeEventListener("scroll", funcionScroll);
  });

  return (
    <>
      <button id="abrir" className="abrir-menu" onClick={abrirCerrarMenu}><i className="bi bi-list"></i></button>
      
      {/* Se cargan los estados en el navbar */}

      <nav className={`barra-navegacion
        ${menuVisible ? "visible" : ""}
        ${navbarEstatico ? "con-background" : "sin-background"}`
      }>

        <button className="cerrar-menu" id="cerrar" onClick={abrirCerrarMenu}><i className="bi bi-x"></i></button>
        <a href="#Inicio" className="menu" onClick={clickEnlace}>Inicio</a>
        <a href="#Habilidades" className="menu" onClick={clickEnlace}>Habilidades</a>
        <a href="#Proyectos" className="menu" onClick={clickEnlace}>Proyectos</a>
        <a href="#Footer" className="menu" onClick={clickEnlace}>Footer</a>
      </nav>
    </>
  );
};

export default Header;