import React from "react";
import { FaDownload } from "react-icons/fa6";
import yeralCv from '../../assets/Yeraldin Espinosa  CV.pdf'
import './style.css'

/**
 * Componente que representa la sección "Sobre Mí" de la aplicación.
 * Contiene información personal y un enlace para descargar el currículum.
 */
const AboutMe = () => {
  return (
    <div className='aboutMe-container '>
      {/* Título de la sección */}
      <h1 className="aboutMe-Title">Sobre mi</h1>

      {/* Texto descriptivo sobre el desarrollador */}
      <p className="aboutMe-Text" id="text">
        🚀 🚀 ¡Bienvenido! Soy una profesional que ha realizado una transición exitosa de ventas a desarrollo web, centrándome especialmente en el Frontend. Mi verdadera motivación surge de un profundo interés por el diseño y la creación de experiencias visuales cautivadoras. Encuentro inspiración en la posibilidad de aportar detalles significativos y construir soluciones que no solo sean funcionales, sino también estéticamente atractivas, para que las personas las utilicen y las disfruten. <br></br>

       <br></br> Como Frontend, me especializo en la creación de sitios web enfocado a una buena experiencia del usuario. Cuento con sólidas habilidades en HTML, CSS, JavaScript y React estoy inmersa en un continuo proceso de aprendizaje, siempre explorando nuevas herramientas esenciales del desarrollo frontend.<br></br>

       <br></br>Soy autodidacta aprendiendo tecnologías nuevas día tras día en la plataforma Platzi con relación a desarrollo front-end y diseño UX UI. <br></br>

        Busco nuevas oportunidades que me desafíen y permitan seguir expandiendo mis conocimientos en el desarrollo web. ¡Estoy lista para aportar mi energía, pasión y habilidades a un equipo dinámico y en constante evolución! 🚀
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
  );
};

export { AboutMe };
