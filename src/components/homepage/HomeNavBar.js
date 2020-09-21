import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap/";
import { ReactComponent as FlowerHeartLogoMobile } from "../../assets/svgComponents/Icons/FlowerHeartLogoMobile.svg";
import { Link } from "react-router-dom";
const token = localStorage.getItem("token");

export default function HomeNavBar(props) {


  return (
    <>
    {/* <div className="header"> */}
      <Navbar className="header-nav"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "white"}} 
      >
        <Navbar.Brand><FlowerHeartLogoMobile className="logo-main"/></Navbar.Brand>
        {props.loggedIn ? (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" 
            onClick={props.testToggle}
            />
          </>
        ) : null}
      </Navbar>

      {!token ? (
        <Button
     id="home-btn-signed-out"
          as={Link}
          to="/login"
          variant="secondary"
          // style={{ textDecoration: "none", width: "5.6875em", height: "2.75em" }}
        >
          <p style={{ color: "#2E404B", fontSize: "1em", fontWeight: 600, width: "63px"}}>
            SIGN IN
          </p>
        </Button>
        
      ) : null}
    {/* </div> */}
   <hr className="hm-header-divider"></hr>
   </>
  );
}
