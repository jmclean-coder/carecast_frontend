import React from 'react'
import { Container, Card} from "react-bootstrap";
export default function JournalCard(props) {
    return (
        <Card>
          <Card.Body>
                <Card.Title className="text-center">{props.journal.title}</Card.Title>
            <Container>
              <Card.Text>{props.journal.content}</Card.Text>
            </Container>
          </Card.Body>
        </Card>
    )
}
