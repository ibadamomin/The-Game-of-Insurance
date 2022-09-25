import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./first.css"
import logo from "../images/st.png"
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className = "header">
        <Navbar.Brand href="#home">
            <img src={logo} className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Loans</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;