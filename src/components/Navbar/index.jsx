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
  // Estado para gestionar la apertura y cierre del menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navBar-container">
      {/* Logo de la barra de navegación */}
      <div className="navlogo">
        <h1> My Portfolio </h1>
      </div>

      {/* Barra de navegación para escritorio */}
      <ul className="nav-links">
        <li><NavLink to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/SobreMi" className="active">Sobre Mi</NavLink></li>
        <li><NavLink to="/Habilidades" className="active">Habilidades</NavLink></li>
        <li><NavLink to="/Projects" className="active">Projects</NavLink></li>
      </ul>

      {/* Icono para el menú móvil */}
      <FaBars onClick={toggleMobileMenu} className="navbar-icon active" />

      {/* Menú desplegable para móvil */}
      {mobileMenuOpen && (
        <ul className="nav-mobile">
          <li><NavLink to="/" className="active">Home</NavLink></li>
          <li><NavLink to="/SobreMi" className="active">Sobre Mi</NavLink></li>
          <li><NavLink to="/Habilidades" className="active">Habilidades</NavLink></li>
          <li><NavLink to="/Projects" className="active">Projects</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
