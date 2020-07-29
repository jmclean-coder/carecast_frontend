import React, { useState } from "react";
import { Link } from "react-router-dom";
import JournalCard from "../journals/JournalCard";
import {Modal} from "react-bootstrap"
import JournalModal from '../journals/JournalModal'
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { ReactComponent as Plus } from "../../assets/BookPlus.svg";

export default function JournalAccordion(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderJournalEntries = () => {
    return props.journalEntries.map((entry) => (
      <JournalCard
        updateJournalEntry={props.updateJournalEntry}
        addJournalEntry={props.addJournalEntry}
        journal={entry}
        key={`entry_${entry.id}`}
      />
    ));
  };
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} bg="dark" eventKey="3">
          Journal{" "}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Container>
          <Modal show={show} onHide={handleClose}>
            <JournalModal handleClose={handleClose} addJournalEntry={props.addJournalEntry} /> 
            </Modal>

          <div>
          <h2>Today's Journal(s)
          </h2>
          <div className="text-right">
          <Plus as={Button} onClick={handleShow} />
          </div>
            </div>
            <Container className="text-right"></Container>
            {renderJournalEntries()}
            <div className="text-center">
            <Button variant="link" as={Link} to="/journal">
            See More
          </Button>
            </div>
          </Container>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
