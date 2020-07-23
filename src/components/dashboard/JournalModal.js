import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class JournalModal extends React.Component {
  state = {
    error: {},
    fields: {
      title: (this.props.journal && this.props.journal.title) || "",
      content: (this.props.journal && this.props.journal.content) || "",
    },
    show: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.journal
      ? this.props.updateJournalEntry(this.state.fields, this.props.journal.id)
      : this.props.addJournalEntry(this.state.fields);
    this.props.handleClose();
  };

  handleChange = (e) => {

    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
    });
  };

  render() {
    // console.log(this.props)
    return (
      <>
        <Modal.Header closeButton>Unburden Your Mind</Modal.Header>
        <Modal.Body>
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Form.Group controlId="titleControl">
              <Form.Label>Entry Title</Form.Label>
              <Form.Control name="title" value={this.state.fields.title} />
            </Form.Group>
            <Form.Group controlId="journalControl">
              <Form.Label>Journal Entry</Form.Label>
            </Form.Group>

            <Form.Control
              name="content"
              as="textarea"
              rows="3"
              value={this.state.fields.content}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={this.props.handleClose} variant="secondary" >
            Close
          </Button> */}
        </Modal.Footer>
      </>
    );
  }
}
