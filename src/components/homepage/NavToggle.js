import React from 'react'
import MenuOpen from "../../assets/svgComponents/MenuOpen";
import MenuClose from "../../assets/svgComponents/MenuClose";

export default function NavToggle(props) {
    return (
        props.showNav ? (
            <a className="nav-btn-toggle" onClick={props.toggle}>
              <MenuClose />
            </a>
          ) : (
            <a className="nav-btn-toggle" onClick={props.toggle}>
              <MenuOpen />
            </a>
          )
    )
}
