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
      loggedIn: false,
    },
    userData: {
      fullName: "",
      userRatings: [],
      feelings: [],
      journalEntries: [],
      todos: [],
    },
    categories: [],
  };
  //each time a component mounts checks to see if authorized to access so you don't have to login again
  componentDidMount() {
    console.log("Hi from CDM!");
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.setState({
          auth: {
            ...this.state.auth,
            user: { id: user.id, username: user.username },
            loggedIn: true,
          },
        });
        this.getUserData(user.id);
        this.getCategories();
      });
    }
  }

  //initial login, user is who they say they are authentication. set's token
  login = (data) => {
    // user data and token from fetch in api
    // console.log(data);
    //setting token in localstorage
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
        loggedIn: true,
      },
    });
    this.getUserData(data.id);
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      auth: { user: {}, loggedIn: false },
    });
  };

  getUserData = (id) => {
    // console.log(id)
    api.user.fetchUserData(id).then((res) => {
      const {
        full_name,
        user_name,
        journal_entries,
        list_items,
        feelings,
        user_ratings,
      } = res.data.attributes;

      this.setState({
        userData: {
          ...this.state.userData,
          fullName: full_name,
          userRatings: [...user_ratings],
          feelings: [...feelings],
          journalEntries: [...journal_entries],
          todos: [...list_items],
        },
      });
    });
  };

  getCategories = () => {
    api.categories.fetchCategories().then((res) => {
      console.log(res);
      this.setState({
        categories: res,
      });
    });
  };

  updateRating = (updatedRating, id) => {
    console.log(updatedRating, id);
    // api.patch
  };

  incrementRating = (rating) => {
    console.log(rating, rating.id);

    this.setState((prevState) => ({
      userData: {
        ...prevState.userData,
        userRatings: prevState.userData.userRatings.map((userRating) =>
          userRating.id === rating.id
            ? { ...userRating, rating: userRating.rating + 1 }
            : userRating
        ),
      },
    }));
  };
  decrementRating = (rating) => {
    console.log(rating);
    this.setState((prevState) => ({
      userData: {
        ...prevState.userData,
        userRatings: prevState.userData.userRatings.map((userRating) =>
          userRating.id === rating.id
            ? { ...userRating, rating: userRating.rating - 1 }
            : userRating
        ),
      },
    }));
  };
  render() {
    return (
      <div className="App">
        <Router>
          <HomeNavBar onLogout={this.logout} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signup"
              render={(routerProps) => (
                <SignupPage {...routerProps} onLogin={this.login} />
              )}
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
              render={(routerProps) => (
                <DashboardPage
                  {...routerProps}
                  loggedIn={this.state.auth.loggedIn}
                  userData={this.state.userData}
                  categories={this.state.categories}
                  incrementRating={this.incrementRating}
                  decrementRating={this.decrementRating}
                />
              )}
            />
            <Route
              exact
              path="/journal"
              render={(routerProps) => (
                <JournalPage
                  {...routerProps}
                  loggedIn={this.state.auth.loggedIn}
                  userJournalEntries={this.state.userData.journalEntries}
                />
              )}
            />
            <Route
              exact
              path="/feeling_tracker"
              render={(routerProps) => (
                <FeelingPage
                  {...routerProps}
                  loggedIn={this.state.auth.loggedIn}
                  userFeelings={this.state.userData.feelings}
                />
              )}
            />
            <Route
              exact
              path="/todos"
              render={(routerProps) => (
                <ListPage
                  {...routerProps}
                  loggedIn={this.state.auth.loggedIn}
                  userTodos={this.state.userData.todos}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
