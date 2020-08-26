import React, {useState} from 'react'
import { Accordion, Card, Button, Modal, Container } from "react-bootstrap";
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
        return props.todaysFeelings.map(userFeeling => <MoodCard feelingList={props.feelings} userFeeling={userFeeling} key={`user_feeling_${uuidv4()}`}/>)

    }

    return (
        <Accordion className="dsh-accord-accord">
          <Modal show={show} onHide={handleClose}>
<MoodModal feelings={props.feelings} addFeeling={props.addFeeling}/> 
  </Modal>
        <Card className="dsh-accord-card">
          <Accordion.Toggle  as={Card.Header} eventKey="0">
            Today's Feelings
          </Accordion.Toggle>
          <Accordion.Collapse className="mood_accordion" eventKey="0">
            <div> 
       
              {renderMoodCards()}
              <div className="mood-btns-wrapper">
              <div className="add_mood_btn">
          <Plus as={Button} onClick={handleShow} />
          </div>
              <div className="text-center">
           <Button variant="link" as={Link} to="/feeling_tracker">See All</Button>
            </div>
              </div>

            </div>
      
          </Accordion.Collapse>
        </Card>
      </Accordion>
      
    )
}


      