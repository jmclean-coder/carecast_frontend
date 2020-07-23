import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
export default function DailyAffirmations(props) {
  return (
    <Jumbotron fluid>
        {console.log(props)}
    <blockquote className="blockquote mb-0">
      <h2>
        {' '}{props.quoteOfDay.contents.quotes[0].quote}{' '}
      </h2>
      <footer className="blockquote-footer">
      {props.quoteOfDay.contents.quotes[0].author}<cite title="Source Title">They Said So</cite>
      </footer>
    </blockquote>
    </Jumbotron>
  );
}