import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import TrackerCard from "./TrackerCard";
import './dashboard.css'

export default function DailyTrackerAccordion(props) {
  
  const renderTrackerCards = () => {
// console.log(props.todaysRatings)
    // if(props.todaysRatings.length ==  0 ){
      return props.categories.map(category => 
        <TrackerCard
                category={category}
                key={`category_${category.id}`}
                incrementRating={props.incrementRating}
                decrementRating={props.decrementRating}
                ratingData={props.todaysRatings}
              />
      )
  }
  

  return (
    <Accordion className="dsh-accord-accord">
      <Card className="dsh-accord-card">
        <Accordion.Toggle  as={Card.Header} eventKey="0">
          Daily Tracker
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div className="tracker-accord" >{renderTrackerCards()}</div>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );


}

