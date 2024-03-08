// Projects.js
import React from 'react';
import gitApp from '../../assets/Captura de pantalla 2023-12-18 112528.png';
import happyPetImg from '../../assets/Captura de pantalla 2023-12-16 142540.png';
import MovieStreamImg from '../../assets/Captura de pantalla 2023-12-16 133922.png';
import ShaikImg from '../../assets/Captura de pantalla 2023-09-18 121752.png';
import './style.css'

/**
 * Componente que muestra una lista de proyectos realizados, con imágenes, descripciones y enlaces a los repositorios de GitHub.
 */
const projectsData = [
  {
    title: 'Web Shaik Asesores',
    link: 'https://yeralshaik.github.io/ShaikAsesorespanama/',
    imgSrc: ShaikImg,
    description: 'Este proyecto consiste en la creación de una Landing Page para Shaik Asesores, una empresa panameña dedicada a brindar asesoramiento en préstamos personales. La página web está diseñada para ofrecer información sobre los servicios de la empresa y facilitar a los visitantes la solicitud de cotizaciones y más detalles sobre los préstamos personales que ofrecen.',
    tools: ['Photoshop', 'Figma', 'HTML', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/YeralShaik/ShaikAsesorespanama.git',
  },
  {
    title: 'MovieStream',
    link: 'https://moviestreams.netlify.app/',
    imgSrc: MovieStreamImg,
    description: 'MovieStream es una aplicación web que te permite descubrir y explorar películas de diversas categorías',
    tools: ['HTML', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/YeralShaik/MovieStream.git',
  },
  {
    title: 'GitApp',
    link: 'https://yeralshaik.github.io/GitApp/',
    imgSrc: gitApp,
    description: 'Gif App es una aplicación simple para buscar y mostrar gifs utilizando la API de Giphy. Características: Buscar gifs por términos de búsqueda. Mostrar gifs en la interfaz de usuario.',
    tools: ['HTML', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/YeralShaik/GitApp.git',
  },
  {
    title: 'Happy Pets',
    link: 'https://www.behance.net/gallery/166860719/Caso-de-estudio-Happy-Pets',
    imgSrc: happyPetImg,
    description: 'Gif App es una aplicación simple para buscar y mostrar gifs utilizando la API de Giphy. Características: Buscar gifs por términos de búsqueda. Mostrar gifs en la interfaz de usuario.',
    tools: ['HTML', 'CSS', 'Javascript'],
    githubLink: 'https://www.behance.net/gallery/166860719/Caso-de-estudio-Happy-Pets',
  },
];

const Projects = () => {
  return (
    <>
      {/* Título de la sección */}
      <h1 className='project-Title'>Proyectos</h1>
      
      {/* Mapeo de datos de proyectos para renderizar cada proyecto */}
      {projectsData.map((project, index) => (
        <div key={index} className="project-container">
          {/* Título del proyecto */}
          <h2>{project.title}</h2>
          
          {/* Contenedor del proyecto */}
          <div className="project">
          
              {/* Imagen del proyecto */}
              <img className="project-img" src={project.imgSrc} alt='' />
          
            
            {/* Descripción del proyecto */}
            <p className="project-description">{project.description}
            
            {/* Lista de herramientas utilizadas */}
            <ul className="tools-list">
              {project.tools.map((tool, toolIndex) => (
                <li key={toolIndex}>{tool}</li>
              ))}
            </ul>
            </p>
           
            
          </div>
           {/* Enlace al repositorio de GitHub */}
           <div className='link-Container'>
            <a className="link" href={project.link}>
              Ver Proyecto
            </a>
              {/* Enlace para ver el proyecto */}
            <a className="github-link" href={project.githubLink}>
              Ver GitHub
            </a>
            </div>
        </div>
      ))}
    </>
  );
};

export { Projects };
