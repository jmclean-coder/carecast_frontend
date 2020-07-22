import React from 'react'
import {
    Container,
    Accordion,
    Card,
    Button,
  } from "react-bootstrap";
  import MoodCard from './MoodCard'
  import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
  import {Link} from 'react-router-dom'
export default function MoodAccordion(props) {

    const renderMoodCards = () =>{
        return props.feelings.map(feeling => <MoodCard feeling={feeling} key={`feeling_${feeling.id}`}/>)

    }

    return (
        <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} bg="dark" eventKey="0">
            Feelings
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
        <Container>
        <Plus as={Button} /> 
        <Button variant="link" as={Link} to="/feeling_tracker">See More</Button>
            {renderMoodCards()}
            </Container>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}
