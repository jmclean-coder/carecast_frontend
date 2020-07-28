import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import TrackerCard from "./TrackerCard";
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
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} bg="dark" eventKey="0">
          Daily Tracker
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Container>{renderTrackerCards()}</Container>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );


}

