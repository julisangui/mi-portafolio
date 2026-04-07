import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = {
  educacion: [
    {
      titulo: "Diplomatura en diseño UX/UI",
      lugar: "Centro de E-Learning UTN",
      fecha: "Octubre 2025 - Abril 2026",
      estado: "En curso",
      items: ["Investigación de usuarios", "Fidelización", "Prototipado", "Design system", "Motion UI", "Componentes inteligentes"],
    },
    {
      titulo: "Experto universitario en programación web Full-Stack",
      lugar: "Centro de E-Learning UTN",
      fecha: "Abril - Julio 2025",
      estado: "Graduado",
      items: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
    },
    {
      titulo: "Técnico superior en desarrollo de software",
      lugar: "Instituto superior de formación técnica 225",
      fecha: "Abril 2023 - Diciembre 2024",
      estado: "Graduado",
      items: ["Desarrollo web", "Diseño web", "POO", "Testing", "Ingeniería de software", "Gestión de proyectos"],
    },
    {
      titulo: "Técnico en informática personal y profesional",
      lugar: "Instituto Pio XII",
      fecha: "Marzo 2019 - Diciembre 2022",
      estado: "Graduado",
      items: ["Programación", "Hardware", "Sistemas operativos", "Aplicaciones", "Seguridad informática", "Redes", "Base de datos"],
    },
  ],
  experiencia: [
    {
      titulo: "Servicio técnico",
      lugar: "Instituto Pio XII",
      fecha: "Junio 2022 - Diciembre 2022",
      items: ["Instalación y mantenimiento de software, incluyendo Microsoft Office, sistemas operativos y programas", "Reparación de software y hardware (computadoras y netbooks)", "Limpieza profunda y optimización de computadoras", "Backups de archivos", "Formateo y clonación de discos duros", "Cambio de componentes de PC"],
    },
  ],
};

const Trayectoria = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out",
      });
    }, []);

  const [opcion, setopcion] = useState("educacion");

  return (
    <>
      <h2 data-aos="fade-left" data-aos-offset="300" className="trayectoria-titulo" id="Trayectoria">Trayectoria</h2>
      <p data-aos="fade-right" data-aos-offset="300" className="trayectoria-subtitulo">Mi trayectoria de aprendizaje continuo y desarrollo profesional.</p>

      <div data-aos="zoom-in" data-aos-offset="300" className="trayectoria-opciones">
        <button onClick={() => setopcion("educacion")} className={`trayectoria-opcion ${opcion === "educacion" ? "activo" : ""}`}> Educación </button>
        <button onClick={() => setopcion("experiencia")} className={`trayectoria-opcion ${opcion === "experiencia" ? "activo" : ""}`}> Experiencia laboral </button>
      </div>

      <div className="trayectoria-lista">
        {data[opcion].map((item, index) => (
          <div data-aos="zoom-in-down" data-aos-offset="10" key={index} className="tarjeta-trayectoria">
            <div className="tarjeta-trayectoria-header">
                <h3 className="tarjeta-trayectoria-titulo">{item.titulo}</h3>
                <span className={`tarjeta-trayectoria-estado ${item.estado === "Graduado" ? "graduado" : "curso"}`}>
                  {item.estado}
                </span>
            </div>
            <p className="tarjeta-trayectoria-lugar">{item.lugar}</p>
            <p className="tarjeta-trayectoria-fecha">{item.fecha}</p>
            <div className="tarjeta-trayectoria-items">
              {opcion === "experiencia" ? (
                <ul>
                  {item.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              ) : (
                item.items.map((it, i) => (
                  <span key={i} className="item">{it}</span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trayectoria;