import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/workspaces/alondragerke-fspt53-landingpagereact/src/img/logo-paw.png';


function NavbarPart() {
  return (
<Navbar className='shadow' expand="lg" style={{background: "#BFD6BE" }} >
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: 'Lemon' , fontSize: '25px'}}>
            <img
              alt=""
              src= { logo }
              width="32"
              height="43"
              className="logo"
            />{' '} 
            Pawradise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#walking-exercise">Pet walking and exercise</NavDropdown.Item>
              <NavDropdown.Item href="#in-home-care">
                  In-home pet care
              </NavDropdown.Item>
              <NavDropdown.Item href="#training">Pet training</NavDropdown.Item>
              <NavDropdown.Item href="#spa-grooming">Pet spa and grooming</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#log-in" className="text-danger">
                Log in
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPart;
