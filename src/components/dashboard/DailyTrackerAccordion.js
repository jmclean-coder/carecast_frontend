import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import TrackerCard from "./TrackerCard";
export default function DailyTrackerAccordion(props) {

  DailyTrackerAccordion.defaultProps ={
    ratingData: {
      rating: 0
    }
  }
  const renderTrackerCards = () => {
    return props.categories.map((category) => {
      return props.todaysRatings.map((rating) => {
        if (rating.category_id === category.id) {
          return (
            <TrackerCard
              category={category}
              key={`category_${category.id}`}
              ratingData={rating}
              incrementRating={props.incrementRating}
              decrementRating={props.decrementRating}
            />
          );
        }
      });
    });
  };
  const renderDefaultTrackerCards = () => {
    return props.categories.map(category => 
      <TrackerCard
              category={category}
              key={`category_${category.id}`}
              incrementRating={props.incrementRating}
              decrementRating={props.decrementRating}
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
          <Container>{props.todaysRatings.length > 0 ? renderTrackerCards() : renderDefaultTrackerCards()}</Container>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );


}
