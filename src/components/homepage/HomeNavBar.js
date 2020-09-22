import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as FlowerHeartLogoMobile } from "../../assets/svgComponents/Icons/FlowerHeartLogoMobile.svg";
import MenuOpen from "../../assets/svgComponents/MenuOpen";
import MenuClose from "../../assets/svgComponents/MenuClose";
import NavOverlay from "../NavOverlay";
import { Link } from "react-router-dom";
const token = localStorage.getItem("token");

export default function HomeNavBar(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    console.log("clicked");
    props.toggleClassOnNavOpen();
    setOpen(!open);
  };
  
  return (
    <div className="nav-container">
      <nav>
        {open ? (
          <a className="nav-btn-toggle" onClick={toggle}>
            <MenuClose />
          </a>
        ) : (
          <a className="nav-btn-toggle" onClick={toggle}>
            <MenuOpen />
          </a>
        )}
        <div className="left-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/feeling_tracker">Feelings Tracker</Link>
          <Link to="/todos">Todos</Link>
        </div>

        <Link className="logo" to="/dashboard">
          <FlowerHeartLogoMobile />
        </Link>
      </nav>
      {/* using 'showNav' to conditionally render overlay, animations only run on mount and unmount, 
      so this is currently necessary  */}
      {props.showNav ? <NavOverlay open={open}></NavOverlay> : null}

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
