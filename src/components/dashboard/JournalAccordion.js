import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
import JournalCard from './JournalCard'
import JournalModal from './JournalModal'
import {
    Container,
    Accordion,
    Card,
    Button,
  } from "react-bootstrap";

  
  
  export default function JournalAccordion(props) {
      const renderJournalEntries = () =>{
          return props.journalEntries.map(journal => <JournalCard journal={journal} key={`journal_${journal.id}`} />)
      }
  return (
    <Accordion defaultActiveKey="3">
      <Card>
        <Accordion.Toggle as={Card.Header} bg="dark" eventKey="3">
          Journal
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Container>
            <JournalModal
              addJournalEntry={props.addJournalEntry}
            />
            <Button variant="link" as={Link} to="/journal">
              See More
            </Button>
         {renderJournalEntries()}
          </Container>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
