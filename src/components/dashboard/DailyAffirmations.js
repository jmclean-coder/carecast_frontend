import React from "react";

import "./dashboard.css";

export default function DailyAffirmations(props) {
  return (
    <div className="dsh-affirm-wrapper">
        <h2>Hello, {props.firstName}</h2>
      <p>"{props.affirmation}."</p>
    </div>
  );
}
