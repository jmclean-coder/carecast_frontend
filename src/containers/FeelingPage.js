import React, {useState} from "react";
import BlankCalendar from '../assets/svgComponents/BlankCalendar'
import PrivacyHOC from '../HOCs/PrivacyHOC'
import { Container, Button, Modal, Card } from "react-bootstrap";
import MoodModal from '../components/feeling tracker/MoodModal'
import MoodCard from '../components/feeling tracker/MoodCard'

function FeelingPage(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderMoods = () =>{
       return props.userFeelingWords.map(feeling => {

       return <MoodCard feelingList={props.feelingList} feeling={feeling} key={`feeling_page_${feeling.id}`} />
       })
      }

    return (
      <Container>
        <Modal show={show} onHide={handleClose}>
        <MoodModal feelings={props.feelingList} addFeeling={props.addFeeling}/>
        </Modal>
        <div className="text-center">
        <Button onClick={handleShow}>Track Your Mood</Button>
        </div>

        <h3>Today's Mood(s)</h3>
        {/* {console.log(renderMoods())} */}
        <Container>
          {renderMoods()}
        </Container>
      <div>
       <BlankCalendar feelingList={props.feelingList} userFeelings={props.userFeelings}></BlankCalendar>
      </div>

      </Container>
    );
}
export default PrivacyHOC(FeelingPage)
