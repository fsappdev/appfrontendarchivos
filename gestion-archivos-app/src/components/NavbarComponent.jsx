import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BoxArrowRight, HouseDoorFill, List } from 'react-bootstrap-icons'; // Iconos

const NavbarComponent = ({ toggleSidebar }) => {
  // Simulación de nombre de usuario
  const nombreUsuario = "Usuario Ejemplo";

  const handleLogout = () => {
    // Lógica de cierre de sesión (simulada)
    console.log("Cerrando sesión...");
    alert("Sesión cerrada (simulado)");
  };

  const navStyle = {
    backgroundColor: 'var(--neumorphism-bg-color)',
    boxShadow: '7px 7px 15px var(--neumorphism-shadow-dark), -7px -7px 15px var(--neumorphism-shadow-light)',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem'
  };

  const brandStyle = {
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  };
  
  const userTextStyle = {
    color: 'var(--neumorphism-text-color)',
    fontWeight: '500'
  };

  return (
    <Navbar style={navStyle} expand="lg" fixed="top">
      <Container fluid>
        <Button onClick={toggleSidebar} className="btn-neumorphic btn-neumorphic-light me-3">
          <List size={20} />
        </Button>
        <Navbar.Brand as={Link} to="/" style={brandStyle}>
          {/* Aquí podrías poner un SVG o img para el logo */}
          LogoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor: 'var(--neumorphism-shadow-dark)'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Text style={userTextStyle}>
              Usuario: {nombreUsuario}
            </Navbar.Text>
          </Nav>
          <Nav>
            <Button as={Link} to="/" className="btn-neumorphic btn-neumorphic-light me-2">
              <HouseDoorFill size={18} className="me-1" /> Inicio
            </Button>
            <Button onClick={handleLogout} className="btn-neumorphic" style={{color: '#dc3545'}}> {/* Estilo neumórfico con color de "danger" */}
              <BoxArrowRight size={18} className="me-1" /> Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
