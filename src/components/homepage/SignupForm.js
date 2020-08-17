import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { api } from "../../services/api";
import { ReactComponent as FlowerHeart } from "../../assets/svgComponents/Icons/FlowerHeartAnimated.svg";
// import './form.css'

export default class SignupForm extends React.Component {
  state = {
    error: false,
    fields: {
      fullname: "",
      username: "",
      password: "",
      confirmpassword: ""
    },
  };

  isFormValid = () => {
    const { confirmpassword, fullname, username, password } = this.state.fields;
    if(password === confirmpassword){
      return fullname && username && password && confirmpassword;
    } //else make some sort of alert that the password is not matching
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.user.createNewUser(this.state.fields).then((data) => {
      console.log(data);
      if (!data.error) {
        this.props.onSignup(data);
        this.props.routerProps.history.push("/dashboard");
      } else {
        this.setState({ error: true });
      }
    });
    e.target.reset();
  };

  render() {
    return (
      <>
        <div className="text-center">
          <FlowerHeart className="form-logo-signup" />
        </div>
        <div className="form-wrapper-signup">
          <div className=" text-center login-head">
            <h2 style={{ marginBottom: "-0.5rem" }}> Create Account</h2>
            <p style={{ paddingBottom: "1.5em" }}>
              Please fill information below
            </p>
          </div>

          <Form  onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicFullName">
              <Form.Label>Full Name*</Form.Label>
              <Form.Control
                name="fullname"
                type="text"
                placeholder="Enter your full name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicUserName">
              <Form.Label>Username*</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter a username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password*</Form.Label>
              <Form.Control
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div className="login-btn-container">
              <Button disabled={!this.isFormValid()} variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ fontSize: "1em" }}>
                Sign in.
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
