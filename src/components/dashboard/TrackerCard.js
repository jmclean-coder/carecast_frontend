import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";

import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
import { ReactComponent as Minus } from "../../assets/BookMinus.svg";
export default function TrackerCard(props) {
  let rating = props.ratingData.rating
  // const handleIncrementClick = (e) => {
  //   let newRating = rating++
  //   e.persist();
  //   console.log(props,
  //     e.target, "Increment", newRating);
  //     props.updateRating(newRating, props.ratingData.id)


  // };

  // const handleDecrementClick = (e) => {
  //   let newRating = rating--
  //   e.persist();
  //   console.log(props,
  //     e.target, "decrement", newRating);
  //     props.updateRating(newRating, props.ratingData.id)
  // };
  // console.log(rating)
  return props.category.detailed ? (
    <Card.Body>
      <Card.Title>{props.category.name}</Card.Title>


      <Container onClick={() => props.incrementRating(props.ratingData)}>
        <Plus as={Button} name="plusBtn"  />
      </Container>

      <Card.Text>
        {props.ratingData.rating} units
      </Card.Text>

      <Container onClick={() => props.decrementRating(props.ratingData)}>
        <Minus as={Button} name="minusBtn" />
      </Container>

    </Card.Body>
  ) : (
    <Card.Body>
      <Card.Title>{props.category.name}</Card.Title>
  
      
      <Container onClick={() => props.incrementRating(props.ratingData)}>
        <Plus as={Button} />
      </Container> 

      <Card.Text>
        {props.ratingData.rating}
      </Card.Text>

      <Container onClick={() => props.decrementRating(props.ratingData)}>
        <Minus as={Button} />
      </Container>
    </Card.Body>
  );
}
