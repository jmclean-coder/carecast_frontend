import React from "react";
import {Navbar, Nav, Button, Container} from "react-bootstrap/";

import { Link } from "react-router-dom";
import { ReactComponent as FlowerHeartLogoMobile } from "../../assets/svgComponents/Icons/FlowerHeartLogoMobile.svg";

export default function HomeNavBar(props) {
  const token = localStorage.getItem("token");

  const handleLogout = () => props.onLogout();

  return (
    <Navbar collapseOnSelect expand="lg"
    style={{backgroundColor: "white", height: "10.8125em" }} 
    >
      
      <Container style={{marginLeft: "0.5em",
    marginRight: "auto"}}>
      
     
      <Navbar.Brand as={Link} to="/" style={{float: "right"}}>
        <FlowerHeartLogoMobile />
      </Navbar.Brand>
     

      <Link to="/login">
      <Button variant="secondary" style={{textDecoration: "none", width:"7em", height: "2.75em"}}><p style={{color: "#2E404B", fontSize: "1em", fontWeight: 600}}>SIGN IN</p></Button>
      </Link>

      </Container>

      {props.loggedIn ? (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
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
        </>
      ) : null}
    </Navbar>
  );
}
