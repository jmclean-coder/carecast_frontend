import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../../services/api";
import './homepage.css'

export default class LoginForm extends React.Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //calling the login method from api.auth object in services/api
    api.auth.login(this.state.fields).then((data) => {
      if (!data.error){
        this.props.onLogin(data);
        console.log(this.props)
        this.props.routerProps.history.push('/dashboard')
      } else {
        this.setState({error: true})
      }
    });
    e.target.reset()
  };

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

  render() {
    // console.log(api)
    const { fields } = this.state;
    return (
      <div className="form-wrapper">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="username"
            type="username"
            placeholder="Enter username"
            value={fields.username}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={fields.password}
          />
        </Form.Group>
     {this.renderButton()}
      </Form>
      <div className="text-center u-entry">

      <p>New to Care Cast? <a href="/signup">Sign up.</a></p>
      </div>
      </div>
    );
  }
}
