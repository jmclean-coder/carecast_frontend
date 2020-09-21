import React from "react";
import { Nav, Container } from "react-bootstrap/";
import { Link } from "react-router-dom";
const token = localStorage.getItem("token");

export default function NavMenu(props) {
  return (
    <div className="test">
      {/* <Container className="text-center"> */}
        {token ? (
          <Nav>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/journal">
              Journal
            </Nav.Link>

            <Nav.Link as={Link} to="/feeling_tracker">
              Feelings Tracker
            </Nav.Link>

            <Nav.Link as={Link} to="/todos">
              To-Do List
            </Nav.Link>

            {token ? (
              <Nav.Link onClick={props.signout}>Sign Out</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        ) : null}
      {/* </Container> */}
    </div>
  );
}
