import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../../services/api";

export default class SignupForm extends React.Component {
  state = {
    error: false,
    fields:{
      fullname: "",
      username: "",
      password: "",
    }
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields
  })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    api.user.createNewUser(this.state.fields).then(data => {
      if (!data.error){
        this.props.onLogin(data);
        console.log(this.props)
        this.props.routerProps.history.push('/dashboard')
      } else {
        this.setState({error: true})
      }
    });
    e.target.reset()


  }
  render()  {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={this.handleChange}name="fullname" type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={this.handleChange}name="username" type="text" placeholder="Enter a username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleChange}name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control name="confirm-password" type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
