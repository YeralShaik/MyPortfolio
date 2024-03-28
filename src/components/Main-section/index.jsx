import React from "react";
import ImgProfile from '../../assets/image0.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import yeralCv from '../../assets/Yeraldin Espinosa  CV.pdf'

import { PiStarFourFill } from "react-icons/pi";



/**
 * Componente que representa la sección principal de la página de inicio.
 * Contiene información personal, bienvenida, y enlaces a perfiles sociales.
 */
const Main = () => {

  return (
    <section className="Home-container">
      {/* Sección de texto e información personal */}
      <article className="Home-text">
        <div className="textTitle-container">
          <h1 className="name">Yeraldin </h1>
          <h1 className="surname">Espinosa</h1>
        </div>
        
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
      <a href={yeralCv} download="Yeraldin_Espinosa-CV.pdf">
        <span className="cv-button">
          Descargar CV
          <span className="icon">
            <FaDownload />
          </span>
        </span>
      </a>
      </article>

      {/* Sección de imagen de perfil y enlaces a redes sociales */}
      <div className="img-container">
        <img className="imgProfile" src={ImgProfile} alt="profilephoto" />
        {/* Enlaces a perfiles sociales */}
        <div className="social-Media--Icon">
          <a href="https://www.linkedin.com/in/yeraldin-espinosa-716493197/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin-Icon" />
          </a>
          <a href="https://www.instagram.com/YeralShaik/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instagram-Icon" />
          </a>
          <a href="https://github.com/YeralShaik" target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-Icon" />
          </a>
        </div>
      </div>
    </section>
   
  );
};

export { Main };