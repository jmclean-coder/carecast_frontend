import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as FlowerHeartLogoMobile } from "../../assets/svgComponents/Icons/FlowerHeartLogoMobile.svg";
import NavOverlay from "../NavOverlay";
import NavToggle from "./NavToggle"
import { Link } from "react-router-dom";

export default function HomeNavBar(props) {
  //toggle's App 'showNav' state value, and local useState value
  const toggle = () => {
    props.toggleClassOnNavOpen();
  };

  return (
    <div className="nav-container">
      <nav>
       {props.loggedIn && <NavToggle showNav={props.showNav} toggle={toggle}></NavToggle>}
        <div className="left-menu">
          <Link className="D-nav" to="/dashboard">Dashboard</Link>
          <Link className="D-nav" to="/journal">Journal</Link>
          <Link className="D-nav" to="/feeling_tracker">Feelings Tracker</Link>
          <Link className="D-nav" to="/todos">Todos</Link>
        </div>

        <Link className="logo" to="/dashboard">
          <FlowerHeartLogoMobile />
        </Link>
        {!props.loggedIn &&
      <Link to="/login">
        <Button
          className="home-btn-signed-out"
          variant="secondary"
          style={{marginLeft: "2.5em"}}
          >
            SIGN IN
        </Button>
          </Link>
      }
      </nav>
      {/* using 'showNav' to conditionally render overlay, animations only run on mount and unmount, 
      so this is currently necessary  */}
     {props.loggedIn && <NavOverlay toggle={toggle} showNav={props.showNav} signout={props.signout}></NavOverlay>}

 
      <hr className="hm-header-divider"></hr>
    </div>
  );
}
