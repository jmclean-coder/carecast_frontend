import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


export default function HomeNavBar(props) {
const token = localStorage.getItem("token");

const handleLogout = () => props.onLogout()


  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>CareCast</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {token ? <Nav.Link onClick={handleLogout}>Sign Out</Nav.Link>: <LinkContainer to="login" ><Nav.Link>Login</Nav.Link></LinkContainer>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
