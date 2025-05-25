import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { HouseDoor, FileEarmarkText, Folder, Search, Speedometer2 } from 'react-bootstrap-icons';
import './SidebarComponent.css'; // Crearemos este archivo para estilos del sidebar

const SidebarComponent = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <HouseDoor size={20} />, text: "Inicio (Landing)" },
    { path: "/ingresar-cuenta-anual", icon: <FileEarmarkText size={20} />, text: "Cuenta Anual" },
    { path: "/ingresar-legajo", icon: <Folder size={20} />, text: "Legajos" },
    { path: "/ingresar-control-documental", icon: <Speedometer2 size={20} />, text: "Cuaderno Documental" },
    { path: "/buscar-ubicacion", icon: <Search size={20} />, text: "Buscar Ubicación" },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Nav className="flex-column p-3">
        {navItems.map((item) => (
          <Nav.Item key={item.path}>
            <Nav.Link
              as={Link}
              to={item.path}
              active={location.pathname === item.path}
              onClick={isOpen && window.innerWidth < 992 ? toggleSidebar : null} // Cierra el sidebar en móviles al hacer clic
              className="d-flex align-items-center sidebar-link"
            >
              <span className="me-2">{item.icon}</span>
              {item.text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default SidebarComponent;
