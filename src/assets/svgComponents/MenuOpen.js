import React from "react";
import { useFriction } from "renature";
function MenuOpen() {

    const [props] = useFriction({
        from: {
           opacity: 0
        },
        to: {
           opacity: 1
        },
        config: {
            mu: 0.2,
            mass: 20,
            initialVelocity: 2,
          },
          pause: false,
    })
  return (
    <div className="nav-btn-open" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 30 22"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M29.5 0H.5a.499.499 0 100 1h29a.499.499 0 100-1zM.5 10.003h29a.499.499 0 110 1H.5a.499.499 0 110-1zm0 10.003h29a.499.499 0 110 1H.5a.499.499 0 110-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

export default MenuOpen;
