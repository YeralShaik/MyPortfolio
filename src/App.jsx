import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Tools } from './components/Tools';
import { AboutMe } from './components/AboutMe/index';
import { Projects } from './components/Projects';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />

      {/* Configuración de las rutas */}
      <Routes>
        <Route path="/SobreMi" element={<AboutMe />} />
        <Route path="/Habilidades" element={<Tools />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export {App};
