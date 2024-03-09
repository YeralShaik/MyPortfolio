import React from "react";
import ImgProfile from '../../assets/image0.png';
import Linkdin from '../../assets/Vector.png';
import Instagram from '../../assets/logoinstagram.png';
import Github from '../../assets/Vector-1.png';
import { FaDownload } from "react-icons/fa6";
import yeralCv from '../../assets/Yeraldin Espinosa  CV.pdf'
import { WhatsApp } from "../Whatsapp-button";7
import { PiStarFourFill } from "react-icons/pi";
import './style.css';
import { Footer } from "../Footer";

/**
 * Componente que representa la sección principal de la página de inicio.
 * Contiene información personal, bienvenida, y enlaces a perfiles sociales.
 */
const Home = () => {

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
          <h4>
            <PiStarFourFill className="star-Icon"/>
            ¡Bienvenido a mi mundo digital! 
            <PiStarFourFill className="star-Icon"/>
            <br />
          </h4>
          
          <br/>Soy apasionada por la creación visual y la funcionalidad impecable. Con un enfoque en el desarrollo Frontend y el diseño de interfaces de usuario, transformo ideas en experiencias digitales cautivadoras.<br />

          <br></br>Estoy constantemente buscando desafíos que me permitan crecer y evolucionar profesionalmente. Mi habilidad para adaptarme al cambio y aprender rápidamente en este mundo en constante evolución me impulsa a ofrecer siempre lo mejor.
          
          <br></br> Como Frontend, me especializo en la creación de sitios web enfocado a una buena experiencia del usuario. Cuento con sólidas habilidades en HTML, CSS, JavaScript y React estoy inmersa en un continuo proceso de aprendizaje, siempre explorando nuevas herramientas esenciales del desarrollo frontend.<br></br>

          <br></br>Soy autodidacta aprendiendo tecnologías nuevas día tras día en la plataforma Platzi con relación a desarrollo front-end y diseño UX UI. <br></br>
        </p>
                {/* Enlace para descargar el currículum */}
      <a className="aboutMe-CV" href={yeralCv} download="Yeraldin_Espinosa-CV.pdf">
        <span className="download-icon">
          Descargar CV
          <span className="icon">
            <FaDownload />
          </span>
        </span>
      </a>
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
      <WhatsApp/>
    </div>
   
  );
};
 <Footer/>
export { Home };
