import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as FlowerHeartLogoMobile } from "../../assets/svgComponents/Icons/FlowerHeartLogoMobile.svg";
import NavOverlay from "../NavOverlay";
import NavToggle from "./NavToggle"
import { Link } from "react-router-dom";
const token = localStorage.getItem("token");

export default function HomeNavBar(props) {
  //toggle's App 'showNav' state value, and local useState value
  const toggle = () => {
    props.toggleClassOnNavOpen();
  };

  return (
    <div className="nav-container">
      <nav>
       {token && <NavToggle showNav={props.showNav} toggle={toggle}></NavToggle>}
        <div className="left-menu">
          <Link className="D-nav" to="/dashboard">Dashboard</Link>
          <Link className="D-nav" to="/journal">Journal</Link>
          <Link className="D-nav" to="/feeling_tracker">Feelings Tracker</Link>
          <Link className="D-nav" to="/todos">Todos</Link>
        </div>

        <Link className="logo" to="/dashboard">
          <FlowerHeartLogoMobile />
        </Link>
      </nav>
      {/* using 'showNav' to conditionally render overlay, animations only run on mount and unmount, 
      so this is currently necessary  */}
     {token && <NavOverlay toggle={toggle} showNav={props.showNav} signout={props.signout}></NavOverlay>}
      {!token ? (
        <Button
          id="home-btn-signed-out"
          as={Link}
          to="/login"
          variant="secondary"
          // style={{ textDecoration: "none", width: "5.6875em", height: "2.75em" }}
        >
          <p
            style={{
              color: "#2E404B",
              fontSize: "1em",
              fontWeight: 600,
              width: "63px",
            }}
          >
            SIGN IN
          </p>
        </Button>
      ) : null}
      <hr className="hm-header-divider"></hr>
    </div>
  );
}
