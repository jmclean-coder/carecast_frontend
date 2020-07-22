import React, { useState } from "react";
import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
import { ReactComponent as Blank } from "../../assets/blankSmiley.svg";
import { ReactComponent as Smile } from "../../assets/smile.svg";
import { ReactComponent as Frown } from "../../assets/smileFrown.svg";
import { Button, Modal, Container, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export default function MoodModal(props) {
  const [show, setShow] = useState(false);
  const [toggledSatisfied, setToggledSatisfied] = useState(false);
  const [toggledUnsatisfied, setToggledUnsatisfied] = useState(false);
  const [singleSelections, setSingleSelections] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSatisfied = () => setToggledSatisfied(!toggledSatisfied);
  const handleUnsatisfied = () => setToggledUnsatisfied(!toggledUnsatisfied);

  const options = props.feelings.map(feeling => feeling.name);
  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(
          singleSelections,
          options
      )
      props.addFeeling(singleSelections)

  }

  return (
    <>
      <Plus as={Button} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container onClick={handleSatisfied} className="text-left">
            {toggledSatisfied ? <Smile></Smile> : <Blank></Blank>}
            Satisfied
          </Container>
          <Container onClick={handleUnsatisfied} className="text-right">
            {toggledUnsatisfied ? <Frown></Frown> : <Blank></Blank>}
            Unsatisfied
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
                options={options}
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
