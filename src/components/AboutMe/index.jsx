import React from "react";
import { FaDownload } from "react-icons/fa6";
import './style.css'




const AboutMe = () => {
  return (
    <div className='aboutMe-container '>
    
      <h2 className="aboutMe-Title">SOBRE MI</h2>

      <p className="aboutMe-Text" id="text">
        🚀 🚀 ¡Bienvenido! Me especializo en diseño web y en la creación de experiencias en línea que cautivan y superan las expectativas. Mi objetivo es combinar la creatividad con la construcción de aplicaciones web altamente funcionales. Tomé la decisión de orientar mi carrera hacia el desarrollo Frontend - UI para combinar mis pasiones y crear experiencias de usuario excepcionales.
      
        Soy una profesional autodidacta, apasionada por la búsqueda constante de conocimiento y desafíos que me permitan crecer y evolucionar a nivel laboral. Valorando profundamente mi capacidad para adaptarme al cambio, me destaco por aprender rápidamente en este emocionante mundo en constante evolución.
     
        Mi compromiso va más allá de la simple creación de interfaces; me esfuerzo por construir soluciones digitales que no solo sean visualmente atractivas, sino también intuitivas y eficientes. Estoy emocionada por las oportunidades que el desarrollo Frontend y el diseño UI ofrecen, y estoy ansiosa por seguir explorando y creando en este apasionante campo. ¡Únete a mí en este viaje digital! 🌐
      </p>

      <a className="aboutMe-CV" href="/Yeraldin Espinosa -CV.pdf" download="Yeraldin_Espinosa-CV.pdf">
        <span className="download-icon">
          Resume CV
          <span className="icon">
            <FaDownload />
          </span>
        </span>
      </a>
    </div>
  );
};

export { AboutMe };
