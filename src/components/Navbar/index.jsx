// Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import './Navbar.css'


/**
 * Componente que representa la barra de navegación en la parte superior de la aplicación.
 * Contiene enlaces a diferentes secciones de la aplicación.
 */


function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="navBar-container">
      <div className="navlogo">
        <h1> My Portfolio </h1>
      </div>
       
         {/* Barra de navegación para escritorio */}
        <ul className="nav-links">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/SobreMi" activeClassName="active">Sobre Mi</NavLink></li>
        <li><NavLink to="/Habilidades" activeClassName="active">Habilidades</NavLink></li>
        <li><NavLink to="/Projects" activeClassName="active">Projects</NavLink></li>
      </ul>
       {/* Icono para menú móvil */}
       <FaBars onClick={ toggleMobileMenu} className="navbar-icon active" />
        {/* Menú desplegable para móvil */}
        {mobileMenuOpen && (
        <ul className="nav-mobile">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/SobreMi" activeClassName="active">Sobre Mi</NavLink></li>
        <li><NavLink to="/Habilidades" activeClassName="active">Habilidades</NavLink></li>
        <li><NavLink to="/Projects" activeClassName="active">Projects</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
