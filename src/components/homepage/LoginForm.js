import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { ReactComponent as FlowerHeart } from "../../assets/svgComponents/Icons/FlowerHeartAnimated.svg";
// import './form.css'

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
      if (!data.error) {
        this.props.onLogin(data);
        this.props.routerProps.history.push("/dashboard");
      } else {
        this.setState({ error: true });
      }
    });
    e.target.reset();
  };

  isFormValid = () => {
    const { username, password } = this.state.fields;
    return username && password;
  };

  render() {
    // console.log(api)
    const { fields } = this.state;
    return (
      <>
        <div className="text-center">
          <FlowerHeart className="form-logo" />
        </div>

        <div className="form-wrapper">
          <div className=" text-center login-head">
            <h2 style={{ marginBottom: "-0.5rem" }}> Welcome Back</h2>
            <p style={{ paddingBottom: "1.5em" }}>Sign in to continue</p>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                name="username"
                type="username"
                placeholder="Username"
                value={fields.username}
                style={{}}
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
                style={{}}
              />
            </Form.Group>
            <div className="login-btn-container">
              <Button
                disabled={!this.isFormValid()}
                variant="primary"
                type="submit"
              >
                SIGN IN
              </Button>
            </div>
          </Form>

          <div className="text-center login-ft">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" style={{ fontSize: "1em" }}>
                Sign up.
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
