import React from "react";
import { ReactComponent as Plus } from "../../assets/BookPlus.svg";
import { Button, Modal, Form } from "react-bootstrap";

export default class JournalModal extends React.Component {
  //   const [show, setShow] = useState(false);
  state = {
    error: {},
    fields: {
      title: "",
      content: "",
    },
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJournalEntry(this.state.fields)
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
    });
  };

  render() {
    return (
      <>
        <Plus as={Button} onClick={this.handleShow} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>Unburden Your Mind</Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="titleControl">
                <Form.Label>Entry Title</Form.Label>
                <Form.Control name="title" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="journalControl">
                <Form.Label>Journal Entry</Form.Label>
                <Form.Control
                  name="content"
                  onChange={this.handleChange}
                  as="textarea"
                  rows="3"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
