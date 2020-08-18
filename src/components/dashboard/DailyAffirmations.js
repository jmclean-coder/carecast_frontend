import React from "react";
import Container from 'react-bootstrap/Container'
import './dashboard.css'


export default function DailyAffirmations(props) {

  const containerStyle = {
    width: "100%",
    height: "5em",
    paddingRight: "0.9375em",
    paddingLeft: "0.9375em",
    paddingBottom: "1em",
    marginRight:" auto",
    marginLeft: "auto",
    textAlign: "center",
  }
  return (
      <Container style={containerStyle}>
        <Container>
  <h2>Hello, {props.firstName}</h2>
        </Container>
      <p>
        "{props.affirmation}."
      </p>
      </Container>
  
  );
}
