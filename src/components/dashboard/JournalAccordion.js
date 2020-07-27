import React, { useState } from "react";
import { Link } from "react-router-dom";
import JournalCard from "./JournalCard";
import { Container, Accordion, Card, Button } from "react-bootstrap";

export default function JournalAccordion(props) {
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
    <Accordion defaultActiveKey="3">
      <Card>
        <Accordion.Toggle as={Card.Header} bg="dark" eventKey="3">
          Journal{" "}
          <Button variant="link" as={Link} to="/journal">
            See More
          </Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Container>
            <Container className="text-right"></Container>
            {renderJournalEntries()}
          </Container>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
