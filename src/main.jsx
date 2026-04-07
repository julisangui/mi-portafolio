import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Estilo.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/Trayectoria.css"
import "./styles/Habilidades.css";
import "./styles/Proyectos.css";
import "./styles/Contacto.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trayectoria from "./components/Trayectoria";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Trayectoria />
    <Habilidades />
    <Proyectos />
    <Contacto />
  </React.StrictMode>
);
