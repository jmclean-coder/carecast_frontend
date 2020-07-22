import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import TrackerCard from "./TrackerCard";
export default function DailyTrackerAccordion(props) {



  const renderTrackerCards = () => {
     return props.categories.map((category) => {
      return props.trackerData.map((data) => {
        if(data.category_id === category.id){
            console.log("hi")
             return <TrackerCard category={category} key={`category_${category.id}`} ratingData={data} incrementRating={props.incrementRating} decrementRating={props.decrementRating}/>

        }
      })
    })
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
