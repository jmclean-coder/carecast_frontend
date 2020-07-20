import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {api} from '../../services/api';

export default class LoginForm extends React.Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
  };

  handleChange = e =>{
    const newFields = {...this.state.fields, [e.target.name]: e.target.value}
    this.setState({
      fields: newFields
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    //calling the login method from api.auth object in services/api
    api.auth.login(this.state.fields)
    .then(data => this.props.onLogin(data))
  }


  render() {
    // console.log(api)
    const {fields} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control  onChange={this.handleChange} name="username" type="username" placeholder="Enter username" value={fields.username} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" value={fields.password}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
