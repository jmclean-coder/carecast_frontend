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
import "./dashboard.css";

import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
import { ReactComponent as Minus } from "../../assets/BookMinus.svg";

export default class TrackerCard extends React.Component {
  static defaultProps = {
    ratingData: {
      rating: 0,
    },
  };

  getRating = () => {
    let categoryRating = this.props.ratingData.find(
      (rating) => rating.category_id === this.props.category.id
    );
    return categoryRating;
  };

  render() {
    //  console.log(this.getRating())
    let ratingNum;
    this.getRating() === undefined
      ? (ratingNum = 0)
      : (ratingNum = this.getRating().rating);
    // console.log(ratingNum)

    return this.props.category.detailed ? (
      <Card className={`${this.props.category.name}`}>
        <Card.Body>
          <Card.Title className="tracker-title">{this.props.category.name}</Card.Title>

          <Container
            onClick={() => this.props.incrementRating(this.props.category.id)}
          >
            <Plus className="plus" as={Button} name="plusBtn" />
          </Container>

          {this.props.category.name === "Water" && (
            <Card.Text>{ratingNum} Glasses</Card.Text>
          )}
          {this.props.category.name === "Sleep" && (
            <Card.Text className="tracker-text">{ratingNum} Hours</Card.Text>
          )}

          <Container
            onClick={() => this.props.decrementRating(this.props.category.id)}
          >
            <Minus className="minus" as={Button} name="minusBtn" />
          </Container>
        </Card.Body>
      </Card>
    ) : (
      <Card className={`${this.props.category.name}`} >
        <Card.Body>
          <Card.Title className="tracker-title">{this.props.category.name}</Card.Title>

          <Container >
            <Plus className="plus" onClick={() => this.props.incrementRating(this.props.category.id)} as={Button} /> <Minus  className="minus" onClick={() => this.props.decrementRating(this.props.category.id)} as={Button} />
          </Container>

          <Card.Text className="tracker-text">{ratingNum}/10</Card.Text>

          
          
        
        </Card.Body>
      </Card>
    );
  }
}
