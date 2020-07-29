import React, { useState } from "react";
import { ReactComponent as  Satisfied} from "../../assets/svgComponents/Icons/Satisfied.svg";
import { ReactComponent as  Unsatisfied} from "../../assets/svgComponents/Icons/Unsatisfied.svg";
import { ReactComponent as SatisfiedGreen} from "../../assets/svgComponents/Icons/Satisfiedgreen.svg";
import { ReactComponent as UnsatisfiedRed} from "../../assets/svgComponents/Icons/Unsatisfiedred.svg";
import { Button, Modal, Container, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export default function MoodModal(props) {
  const [toggledSatisfied, setToggledSatisfied] = useState(false);
  const [toggledUnsatisfied, setToggledUnsatisfied] = useState(false);
  const [singleSelections, setSingleSelections] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSatisfied = () => {
    // console.log(satisfied)
    if(toggledUnsatisfied === true){
      setToggledUnsatisfied(!toggledUnsatisfied);
    }
    setToggledSatisfied(!toggledSatisfied);
  }
  const handleUnsatisfied = () => {
    // console.log(unSatisfied)
    if(toggledSatisfied === true){
      setToggledSatisfied(!toggledSatisfied);
    }
    setToggledUnsatisfied(!toggledUnsatisfied);
  }

  const satisfied = props.feelings.filter(feeling => feeling.need_condition === "satisfied")
  const unSatisfied = props.feelings.filter(feeling => feeling.need_condition === "unsatisfied")
  // const options = props.feelings.map(feeling => feeling.name);
  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(
          singleSelections,
          options
      )
      props.addFeeling(singleSelections)

  }
  let options = []
  const setOptions = () =>{
    if(toggledSatisfied){
      options = satisfied.map(feeling => feeling.name);
      return options
    } else if(toggledUnsatisfied){
      options = unSatisfied.map(feeling => feeling.name);
      return options
    } else {
      options = ["Selected Satisfied or Unsatisfied"]
      return options
    }
  }

  return (
    <>
        <Modal.Header closeButton>
          <Container onClick={handleSatisfied} className="text-left">
            {toggledSatisfied ? <SatisfiedGreen/>: <Satisfied/>}
           
          </Container>
          <Container onClick={handleUnsatisfied} className="text-right">
            {toggledUnsatisfied ? <UnsatisfiedRed/>: <Unsatisfied/>}
            
          </Container>
        </Modal.Header>
        <Modal.Title>How are you feeling?</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFeeling">
              <Typeahead
                id="basic-typeahead-single"
                labelKey="Feeling"
                onChange={setSingleSelections}
                options={setOptions()}
                placeholder="Choose a feeling"
                selected={singleSelections}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </>
  );
}
