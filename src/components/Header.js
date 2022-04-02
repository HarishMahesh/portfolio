import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      style={{ zIndex: "2", position: "fixed", width: "100%" }}
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="md"
    >
      <Container>
        <Navbar.Brand href="#home">Harish</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav>
            <Nav.Link style={{ margin: "0px 10px" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ margin: "0px 10px" }} href="#about">
              About Me
            </Nav.Link>
            <Nav.Link style={{ margin: "0px 10px" }} href="#tech">
              Technologies
            </Nav.Link>
            <Nav.Link style={{ margin: "0px 10px" }} href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link style={{ margin: "0px 10px" }} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
