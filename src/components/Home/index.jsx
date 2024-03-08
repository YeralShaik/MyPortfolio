import React from "react";
import ImgProfile from '../../assets/image0.png';
import Linkdin from '../../assets/Vector.png';
import Instagram from '../../assets/logoinstagram.png';
import Github from '../../assets/Vector-1.png';

import './style.css';
import { Footer } from "../Footer";

/**
 * Componente que representa la sección principal de la página de inicio.
 * Contiene información personal, bienvenida, y enlaces a perfiles sociales.
 */
const Home = () => {
  // Función que abre un enlace de WhatsApp al hacer clic en el botón de contacto
  function sendwhatsapp() {
    const whatsappLink = 'https://wa.link/crqqlt';
    window.open(whatsappLink, '_blank');
  }

  return (
    <div className="Home-container">
      {/* Sección de texto e información personal */}
      <div className="Home-text">
        <h1 className="name">Yeraldin Espinosa</h1>
        <p id="ocupation" className="text-occupation">
          {'< Desarrolladora FrontEnd / Diseñadora UI />'}
        </p>
        <p className="bienvenida">
          {/* Bienvenida y descripción personal */}
          ¡Bienvenido a mi mundo digital! <br />
          Soy apasionada por la creación visual y la funcionalidad impecable. Con un enfoque en el desarrollo Frontend y el diseño de interfaces de usuario, transformo ideas en experiencias digitales cautivadoras.<br />
          Estoy constantemente buscando desafíos que me permitan crecer y evolucionar profesionalmente. Mi habilidad para adaptarme al cambio y aprender rápidamente en este mundo en constante evolución me impulsa a ofrecer siempre lo mejor.
        </p>
        {/* Botón de contacto que ejecuta la función sendwhatsapp */}
        <button onClick={sendwhatsapp} className="Contact">
          Contacto
        </button>
      </div>

      {/* Sección de imagen de perfil y enlaces a redes sociales */}
      <div className="img-container">
        <img className="imgProfile" src={ImgProfile} alt="profilephoto" />
        {/* Enlaces a perfiles sociales */}
        <div className="social-Media--Icon">
          <a href="https://www.linkedin.com/in/yeraldin-espinosa-716493197/" target="_blank" rel="noopener noreferrer">
            <img src={Linkdin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/YeralShaik/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://github.com/YeralShaik" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};
 <Footer/>
export { Home };
