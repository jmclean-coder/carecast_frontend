import React from "react";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import JournalPage from "./containers/JournalPage";
import FeelingPage from "./containers/FeelingPage";
import ListPage from "./containers/ListPage";
import SignupPage from "./containers/SignupPage";

import HomeNavBar from "./components/homepage/HomeNavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { api } from "./services/api";

export default class App extends React.Component {
  state = {
    auth: {
      user: {},
      loggedIn: false
    },
  };
  //each time a component mounts checks to see if authorized to access so you don't have to login again
  componentDidMount() {
    console.log("Hi from CDM!")
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.setState({
          auth: {
            ...this.state.auth,
            user: { id: user.id, username: user.username },
            loggedIn: true
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
        loggedIn: true
      },
    });
  };

  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      auth:{user:{}, loggedIn: false}
    })
  };

  render() {
    return (
      <div className="App">
        <Router>
          <HomeNavBar onLogout={this.logout}/>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signup"
            render={(routerProps) => <SignupPage {...routerProps} onLogin={this.login}/>}
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
            render={(routerProps) => <DashboardPage {...routerProps} loggedIn={this.state.auth.loggedIn}/>}
            />
          <Route
            exact
            path="/journal"
            render={(routerProps) => <JournalPage {...routerProps} loggedIn={this.state.auth.loggedIn}/>}
            />
          <Route
            exact
            path="/feeling_tracker"
            render={(routerProps) => <FeelingPage {...routerProps} loggedIn={this.state.auth.loggedIn}/>}
            />
          <Route
            exact
            path="/todos"
            render={(routerProps) => <ListPage {...routerProps} loggedIn={this.state.auth.loggedIn}/>}
            />
            </Switch>
        </Router>
      </div>
    );
  }
}
