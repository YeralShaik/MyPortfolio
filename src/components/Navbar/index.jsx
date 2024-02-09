// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'




/**
 * Componente que representa la barra de navegación en la parte superior de la aplicación.
 * Contiene enlaces a diferentes secciones de la aplicación.
 */
const Navbar = () => {
  return (
    <nav className="navBar-container">
      <div className="navlogo">
        <p>My Portfolio</p>
      </div>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/Sobre Mi" activeClassName="active">Sobre Mi</NavLink></li>
        <li><NavLink to="/Habilidades" activeClassName="active">Habilidades</NavLink></li>
        <li><NavLink to="/Proyectos" activeClassName="active">Proyectos</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar
