import React from "react";
import { Container, Card} from "react-bootstrap";
import { ReactComponent as Smile } from "../../assets/smile.svg";
import { ReactComponent as Frown } from "../../assets/smileFrown.svg";
export default function MoodCard(props) {
  return props.feeling.need_condition === "satisfied" ? (
    <Card>
      <Card.Body>
            <Card.Title className="text-center">{props.feeling.name}</Card.Title>
        <Container>
          <Smile />
          <Card.Text>{props.feeling.need_condition}</Card.Text>
        </Container>
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">{props.feeling.name}</Card.Title>
        <Container>
          <Frown />
          <Card.Text>{props.feeling.need_condition}</Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
}
