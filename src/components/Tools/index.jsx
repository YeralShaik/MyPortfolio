// Tools.js
import React from "react";
import Photoshop from '../../assets/photoshop.png';
import Illustrator from '../../assets/illustrator.png';
import github from '../../assets/github.png';
import Git from '../../assets/git.png';
import Figma from '../../assets/figma.png';
import Html from '../../assets/html-5.png';
import CSS from '../../assets/css-3.png';
import Sass from '../../assets/sass.png';
import JS from '../../assets/js.png';
import IconReact from '../../assets/physics.png';
import Nodejs from '../../assets/nodejs.png';
import tailwind from '../../assets/tailwind.png';
import Adobe from '../../assets/pngwing.com.png';

import './style.css'

/**
 * Componente que presenta las habilidades y herramientas técnicas del usuario mediante imágenes.
 */
const Tools = () => {
  return (
    <div className="tools">
      {/* Título de la sección */}
      <h1>Habilidades</h1>

      {/* Fila de habilidades: Diseño */}
      <div className="skills-row">
        <img src={Photoshop} alt="Adobe Photoshop" />
        <img src={Illustrator} alt="Adobe Illustrator" />
        <img src={Figma} alt="Figma" />
        <img src={Sass} alt="Sass" />
        <img src={tailwind} alt="Tailwind CSS" />
      </div>

      {/* Fila de habilidades: Desarrollo Frontend */}
      <div className="skills-row">
        <img src={Html} alt="HTML5" />
        <img src={CSS} alt="CSS3" />
        <img src={JS} alt="JavaScript" />
        <img src={IconReact} alt="React" />
        <img src={Nodejs} alt="Node.js" />
      </div>

      {/* Fila de habilidades: Control de versiones y otros */}
      <div className="skills-row">
        <img src={Git} alt="Git" />
        <img src={github} alt="GitHub" />
        <img src={Adobe} alt="Adobe" />
      </div>
    </div>
  );
};

export { Tools };
