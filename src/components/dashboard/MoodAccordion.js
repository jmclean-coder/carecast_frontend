import React, {useState} from 'react'
import {
    Container,
    Accordion,
    Card,
    Button,
    Modal
  } from "react-bootstrap";
  import MoodCard from '../feeling tracker/MoodCard'
  import MoodModal from '../feeling tracker/MoodModal'
  import {Link} from 'react-router-dom'
  import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
export default function MoodAccordion(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const renderMoodCards = () =>{
        return props.userFeelings.map(feeling => <MoodCard feelingList={props.feelings} feeling={feeling} key={`feeling_${feeling.id}`}/>)

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
          <Accordion.Collapse eventKey="0">
            <>
        <div>
          <h2>Today's Mood(s)
          </h2>
          <div className="text-right">
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
