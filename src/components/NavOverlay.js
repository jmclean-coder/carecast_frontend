import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavOverlay(props) {
  //   //add's class to body to prevent backgropund scrolling with Overlay mounts, removes class on unmount.
  props.showNav
    ? document.body.classList.add("mobile-nav-opened")
    : document.body.classList.remove("mobile-nav-opened");

    const handleSignout = () => {
      props.signout()
      document.body.classList.remove("mobile-nav-opened")
    }

  return (
    <div
    className="overlay"
    //toggle display value based on boolean from App State
      style={{ display: props.showNav ? "block" : "none" }}
    >
      <div className="mobile-nav-menu">
        <Link className="M-nav" onClick={props.toggle} to="/dashboard">Dashboard</Link>
        <Link className="M-nav" onClick={props.toggle} to="/journal">Journal</Link>
        <Link className="M-nav" onClick={props.toggle} to="/feeling_tracker">Feelings Tracker</Link>
        <Link className="M-nav" onClick={props.toggle} to="/todos">Todos</Link>
        <Link className="M-nav" onClick={handleSignout}>Sign Out</Link>
        
      </div>
    </div>
  );
}
