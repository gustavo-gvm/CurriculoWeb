import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.css';

const Header = () => (
  <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" id="navbar">
  <Navbar.Brand href="#home">GVM</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar-nav">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#perfil">Perfil</Nav.Link>
      <Nav.Link href="#graduacao">Graduacao</Nav.Link>
      <Nav.Link href="#certificados">Certificados</Nav.Link>
      <Nav.Link href="#experiencia">Experiencia</Nav.Link>
      <Nav.Link href="#contato">Contato</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Header;