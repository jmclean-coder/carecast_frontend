import React, { useState } from "react";
import { Link } from "react-router-dom";
import JournalCard from "../journals/JournalCard";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import JournalModal from "../journals/JournalModal";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
import "./dashboard.css";
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
        key={`entry_${ uuidv4()}`}
      />
    ));
  };
  return (
    <Accordion className="dsh-accord-accord">
      <Card className="dsh-accord-card">
        <Accordion.Toggle  as={Card.Header}  eventKey="3">
          Journal{" "}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <div>
            <Modal show={show} onHide={handleClose}>
              <JournalModal
                handleClose={handleClose}
                addJournalEntry={props.addJournalEntry}
              />
            </Modal>
            <div>
              <h2>Today's Journal(s)</h2>
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
          </div>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
