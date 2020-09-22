import React from "react";
import { useFriction } from "renature";
function MenuClose() {

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
      <div className="nav-btn-close" {...props}>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      >
      <mask
        id="mask0"
        width="18"
        height="18"
        x="6"
        y="6"
        maskUnits="userSpaceOnUse"
        >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M16.768 15l6.187 6.187a1.25 1.25 0 01-1.768 1.768L15 16.767l-6.187 6.188a1.25 1.25 0 11-1.768-1.768L13.232 15 7.045 8.813a1.25 1.25 0 011.768-1.768L15 13.232l6.187-6.187a1.25 1.25 0 011.768 1.768L16.768 15z"
          clipRule="evenodd"
          ></path>
      </mask>
      <g mask="url(#mask0)">
        <path fill="#353535" d="M0 0H30V27.314H0z"></path>
      </g>
    </svg>
          </div>
  );
}

export default MenuClose;
