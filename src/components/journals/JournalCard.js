import React from 'react'
import { Container, Card, Modal, Button} from "react-bootstrap";
import JournalModal from './JournalModal'
import { ReactComponent as Meatball } from "../../assets/Ellipsis 40px.svg";
export default class JournalCard extends React.Component {
  state = {
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleDelete = () => {}

  // handleChange = (e) => {
  //   const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
  //   this.setState({
  //     fields: newFields,
  //   });
  // }
render(){
//make new button to delete an entry
  return (
    <>
        <Card style={{width: "336px",
          height: "254px"}} >
          <Card.Header >
          {this.props.journal ? <Meatball  onClick={()=>this.handleShow()}></Meatball>: null}
          <Button onClick={this.handleDelete}></Button>
            </Card.Header>
          <Card.Body>
                <Card.Title className="text-center">{this.props.journal.title}</Card.Title>
            <Container>
              <Card.Text>{this.props.journal.content}</Card.Text>
            </Container>
          </Card.Body>
        </Card>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <JournalModal handleClose={this.handleClose} journal={this.props.journal} addJournalEntry={this.props.addJournalEntry} updateJournalEntry={this.props.updateJournalEntry}> </JournalModal>
            </Modal>
        </>
    )
  }
}
