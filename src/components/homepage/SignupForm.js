import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class SignupForm extends React.Component {
  state = {
    fullname: "",
    username: "",
    password: "",
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="fullName" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="fullName" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
