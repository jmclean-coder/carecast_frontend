import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default function HomeNavBar() {
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">CareCast</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="login">
      <Nav.Link >Login</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
