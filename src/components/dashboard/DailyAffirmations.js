import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './dashboard.css'


export default function DailyAffirmations(props) {
  return (

      <p>
        {' '}{`${props.firstName}`}, {props.affirmation}{' '}
      </p>
  
  );
}
