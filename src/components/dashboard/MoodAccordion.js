import React, {useState} from 'react'
import { Accordion, Card, Button, Modal } from "react-bootstrap";
  import MoodCard from '../feeling tracker/MoodCard'
  import MoodModal from '../feeling tracker/MoodModal'
  import { v4 as uuidv4 } from 'uuid';
  import {Link} from 'react-router-dom'
  import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
  import './dashboard.css'
export default function MoodAccordion(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const renderMoodCards = () =>{
        return props.userFeelings.map(feeling => <MoodCard feelingList={props.feelings} feeling={feeling} key={`feeling_${uuidv4()}`}/>)

    }
    // const buildFeelingsList = () =>{
    //     return props.feelings.map(feeling => {feeling.name})
    // }

    return (
        <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} bg="dark" eventKey="0">
            Mood
          </Accordion.Toggle>
          <Accordion.Collapse className="mood_accordion" eventKey="0">
            <>
        <div>
          <h2>Mood(s)
          </h2>
          <div className="add_mood_btn">
          <Plus as={Button} onClick={handleShow} />
          </div>
            </div>
        <Modal show={show} onHide={handleClose}>
        <MoodModal feelings={props.feelings} addFeeling={props.addFeeling}/> 
          </Modal>
            {renderMoodCards()}
            <div className="text-center">
        <Button variant="link" as={Link} to="/feeling_tracker">See All</Button>
            </div>
          </>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}
