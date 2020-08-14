import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../../services/api";
import './homepage.css'

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
      console.log(data)
      if (!data.error){
        this.props.onSignup(data);
        this.props.routerProps.history.push('/dashboard')
      } else {
        this.setState({error: true})
      }
    });
    e.target.reset()


  }
  
  renderButton = () => {
      if(this.state.fields.fullname === "" || this.state.fields.username=== "" || this.state.password === ""){
        return(
          <div className="login-btn-container">
        <Button disabled variant="primary" type="submit">
          Submit
        </Button>
        </div>
        )
      } else{
        return( 
          <div className="login-btn-container">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
        )
      }
  }

  render()  {
    return (
      <div className="form-wrapper">
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
        {this.renderButton()}
      </Form>
      <div className="text-center">
      <p>Already have an account? <a href="/login">Sign in.</a></p>
      </div>
      </div>
    );
  }
}
