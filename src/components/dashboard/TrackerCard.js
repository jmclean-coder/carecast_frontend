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
export default class TrackerCard extends React.Component {
  state = {
    water: "",
    sleep: "",
    energy: "",
    stress: "",
    motivation: "",
    productivity: ""
  }




  render(){

    return this.props.category.detailed ? (
      <Card>
      <Card.Body>
        <Card.Title>{this.props.category.name}</Card.Title>

        <Container onClick={() => this.props.incrementRating(this.props.ratingData)}>
          <Plus as={Button} name="plusBtn" />
        </Container>

        <Card.Text>0</Card.Text>

        <Container onClick={() => this.props.decrementRating(this.props.ratingData)}>
          <Minus as={Button} name="minusBtn" />
        </Container>
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Card.Body>
        <Card.Title>{this.props.category.name}</Card.Title>

        <Container onClick={() => this.props.incrementRating(this.props.ratingData)}>
          <Plus as={Button} />
        </Container>

        <Card.Text>0</Card.Text>

        <Container onClick={() => this.props.decrementRating(this.props.ratingData)}>
          <Minus as={Button} />
        </Container>
      </Card.Body>
    </Card>
  );
}

  
}
