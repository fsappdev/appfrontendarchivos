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

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Button variant="outline-light" onClick={toggleSidebar} className="me-2">
          <List size={25} />
        </Button>
        <Navbar.Brand as={Link} to="/">
          {/* Aquí podrías poner un SVG o img para el logo */}
          LogoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Text>
              Usuario: {nombreUsuario}
            </Navbar.Text>
          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="/" className="me-2">
              <HouseDoorFill size={20} /> Inicio
            </Button>
            <Button variant="outline-danger" onClick={handleLogout}>
              <BoxArrowRight size={20} /> Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
