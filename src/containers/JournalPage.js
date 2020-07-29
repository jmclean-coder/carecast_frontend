import React from "react";
import PrivacyHOC from '../HOCs/PrivacyHOC'
import JournalCard from "../components/journals/JournalCard"
import JournalModal from '../components/journals/JournalModal'
import {
  Container,
  Card,
  Button,
  CardDeck,
  Modal
} from "react-bootstrap";
class JournalPage extends React.Component {
  state = {
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });


  renderJournalCards =() => {
    return this.props.userJournalEntries.map(entry => <JournalCard updateJournalEntry={this.props.updateJournalEntry} addJournalEntry={this.props.addJournalEntry} journal={entry} key={`journal_page_entry_${entry.id}`}/>)
  }
  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <JournalModal addJournalEntry={this.props.addJournalEntry} handleClose={this.handleClose}></JournalModal>
      </Modal>
        <h1 className="text-center">Journal Entries</h1>
        <Container className="text-center">
          <Button onClick={this.handleShow}>Add a new entry</Button>
        
        </Container>
        
    <Container >
<CardDeck>
      {this.renderJournalCards()}
</CardDeck>
    </Container>
      </div>
    );
  }
}
export default PrivacyHOC(JournalPage)