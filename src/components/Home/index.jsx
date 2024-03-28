import React from "react";
import { Main } from "../Main-section";
import { WhatsApp } from "../Whatsapp-button";

import './style.css';
import { Footer } from "../Footer";

/**
 * Componente que representa la sección principal de la página de inicio.
 * Contiene información personal, bienvenida, y enlaces a perfiles sociales.
 */
const Home = () => {

  return (
    <>
      <Main/>
      <WhatsApp/>
    </>
   
  );
};
 <Footer/>
export { Home };
