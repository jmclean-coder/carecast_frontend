import React from "react";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import JournalPage from "./containers/JournalPage";
import FeelingPage from "./containers/FeelingPage";
import ListPage from "./containers/ListPage";
import SignupPage from "./containers/SignupPage";

import HomeNavBar from "./components/homepage/HomeNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { api } from "./services/api";

export default class App extends React.Component {
  state = {
    auth: {
      user: {},
    },
  };
  //each time a component mounts checks to see if authorized to access so you don't have to login again
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.setState({
          auth: {
            ...this.state.auth,
            user: { id: user.id, username: user.username },
          },
        });
      });
    }
  }

  //initial login, user is who they say they are authentication. set's token
  login = (data) => {
    console.log(data);
    //setting token in localstorage
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
      },
    });
  };

  logout = () => {};

  render() {
    return (
      <div className="App">
        <Router>
          <HomeNavBar />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signup"
            render={(routerProps) => <SignupPage {...routerProps} />}
          />
          <Route
            exact
            path="/login"
            render={(routerProps) => (
              <LoginPage {...routerProps} onLogin={this.login} />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(routerProps) => <DashboardPage {...routerProps} />}
          />
          <Route
            exact
            path="/journals"
            render={(routerProps) => <JournalPage {...routerProps} />}
          />
          <Route
            exact
            path="/feeling_tracker"
            render={(routerProps) => <FeelingPage {...routerProps} />}
          />
          <Route
            exact
            path="/todos"
            render={(routerProps) => <ListPage {...routerProps} />}
          />
        </Router>
      </div>
    );
  }
}
