import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function HomeNavBar(props) {
  const token = localStorage.getItem("token");

  const handleLogout = () => props.onLogout();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" >
      <Navbar.Brand as={Link} to="/">
        CareCast
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
        <Nav >
          {token ? (
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
          ) : null}
        
          {token ? (
            <Nav.Link as={Link} to="/journal">
              Journal
            </Nav.Link>
          ) : null}
        
          {token ? (
            <Nav.Link as={Link} to="/feeling_tracker">
              Feelings Tracker
            </Nav.Link>
          ) : null}
        
          {token ? (
            <Nav.Link as={Link} to="/todos">
              To-Do List
            </Nav.Link>
          ) : null}
        
          {token ? (
            <Nav.Link onClick={handleLogout}>Sign Out</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
