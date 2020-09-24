import React from 'react'
import MenuOpen from "../../assets/svgComponents/MenuOpen";
import MenuClose from "../../assets/svgComponents/MenuClose";

export default function NavToggle(props) {
    return (
        props.showNav ? (
            <button className="nav-btn-toggle" onClick={props.toggle}>
              <MenuClose />
            </button>
          ) : (
            <button className="nav-btn-toggle" onClick={props.toggle}>
              <MenuOpen />
            </button>
          )
    )
}
