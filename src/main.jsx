import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Estilo.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/Habilidades.css";
import "./styles/Proyectos.css";
import "./styles/Footer.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Habilidades />
    <Proyectos />
    <Footer />
  </React.StrictMode>
);
