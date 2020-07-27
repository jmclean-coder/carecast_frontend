import React from "react";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import JournalPage from "./containers/JournalPage";
import FeelingPage from "./containers/FeelingPage";
import ListPage from "./containers/ListPage";
import SignupPage from "./containers/SignupPage"
import HomeNavBar from "./components/homepage/HomeNavBar";
import LoaderHOC from "./HOCs/LoaderHOC"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { api } from "./services/api";
const DashboardWithLoading = LoaderHOC(DashboardPage)
const JournalWithLoading = LoaderHOC(JournalPage)
const FeelingWithLoading = LoaderHOC(FeelingPage)
const ListWithLoading = LoaderHOC(ListPage)




export default class App extends React.Component {
  state = {
    auth: {
      user: {},
      loggedIn: false,
    },
    userData: {},
    categories: [],
    feelings: [],
    quotes: [],
    loading: false 
  };
  //each time app mounts checks to see if authorized to access so you don't have to login again
  componentDidMount() {
    this.setState({ loading: true });
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
        this.getFeelings();
        this.getQuotes();
      })
    }
    console.log(this.state, 1)
    this.setState({ loading: false });
  }

  signup = (data) => {
    console.log(this.state, 2)
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
        loggedIn: true,
      },
      loading: true
    });
    this.getUserData(data.id);
    this.getCategories();
    this.getFeelings();
    this.getQuotes();
  };

  //initial login, user is who they say they are authentication. set's token
  login = (data) => {
    // user data and token from fetch in api
    // console.log(data);
    //setting token in localstorage
    console.log(this.state, 3)
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
        loggedIn: true,
      },
      loading: true
    });
    this.getUserData(data.id);
    this.getCategories();
    this.getFeelings();
    this.getQuotes();
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      auth: { user: {}, loggedIn: false },
      userData: {},
      categories: [],
      feelings: [],
      quotes: [],
    });
  };

  getUserData = (id) => {

    api.user.fetchUserData(id)
    
    .then((res) => {
      // console.log(res)
      const {
        full_name,
        journal_entries,
        list_items,
        feelings,
        user_ratings,
        todays_user_ratings,
      } = res.data.attributes;
      this.setState({
        userData: {
          ...this.state.userData,
          fullName: full_name,
          userRatings: [...user_ratings],
          todaysRatings: [...todays_user_ratings],
          feelings: [...feelings],
          journalEntries: [...journal_entries],
          todos: [...list_items],
        },
        loading: false
      });
    });
    console.log(this.state, 4)
  };

  getCategories = () => {
    api.categories.fetchCategories().then((res) => {
      // console.log(res);
      this.setState({
        categories: res,
      });
    });
  };

  getFeelings = () => {
    api.feelings.fetchFeelings().then((res) => {
      // console.log(res);
      this.setState({
        feelings: res,
      });
    });
  };

  getQuotes = () => {
    api.affirmations.fetchAffirmations().then((res) => {
      this.setState({
        quotes: res,
      });
    });
  };

  addFeeling = (feeling) => {
    console.log(feeling[0]);
    api.feelings.postUserFeeling(feeling[0]).then((resFeeling) => {
      this.setState((prevState) => ({
        userData: {
          ...prevState.userData,
          feelings: [...prevState.userData.feelings, resFeeling],
        },
      }));
    });
  };

  addJournalEntry = (entry) => {
    // console.log(entry)
    let editedEntry = { ...entry, user_id: this.state.auth.user.id };
    // console.log(editedEntry)
    api.journals.postUserJournal(editedEntry).then((res) => {
      let resJournal = res.data.attributes;
      this.setState((prevState) => ({
        userData: {
          ...prevState.userData,
          journalEntries: [...prevState.userData.journalEntries, resJournal],
        },
      }));
    });
  };

  updateJournalEntry = (entry, id) => {
    console.log(entry, id);
    let editedEntry = { ...entry, user_id: this.state.auth.user.id };
    console.log(editedEntry);
    api.patch.patchJournal(editedEntry, id).then((res) => {
      console.log(res);
      let resJournal = res.data.attributes;
      this.setState((prevState) => ({
        userData: {
          ...prevState.userData,
          journalEntries: prevState.userData.journalEntries.map(
            (journalEntry) => {
              return journalEntry.id === resJournal.id
                ? resJournal
                : journalEntry;
            }
          ),
        },
      }));
    });
  };

  getTodaysRatings = () => {
    this.state.userData.userRatings.map(rating => {
      
    })
  }

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
                <SignupPage {...routerProps} onSignup={this.signup} />
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
                <DashboardWithLoading
                  {...routerProps}
                  isLoading={this.state.loading}
                  loggedIn={this.state.auth.loggedIn}
                  userData={this.state.userData}
                  categories={this.state.categories}
                  incrementRating={this.incrementRating}
                  decrementRating={this.decrementRating}
                  feelings={this.state.feelings}
                  addFeeling={this.addFeeling}
                  addJournalEntry={this.addJournalEntry}
                  updateJournalEntry={this.updateJournalEntry}
                  quoteOfDay={this.state.quotes}
                />
              )}
            />
            <Route
              exact
              path="/journal"
              render={(routerProps) => (
                <JournalWithLoading
                  {...routerProps}
                  isLoading={this.state.loading}
                  loggedIn={this.state.auth.loggedIn}
                  userJournalEntries={this.state.userData.journalEntries}
                  updateJournalEntry={this.updateJournalEntry}
                  addJournalEntry={this.addJournalEntry}
                />
              )}
            />
            <Route
              exact
              path="/feeling_tracker"
              render={(routerProps) => (
                <FeelingWithLoading
                  {...routerProps}
                  isLoading={this.state.loading}
                  loggedIn={this.state.auth.loggedIn}
                  userFeelings={this.state.userData.feelings}
                  feelings={this.state.feelings}
                />
              )}
            />
            <Route
              exact
              path="/todos"
              render={(routerProps) => (
                <ListWithLoading
                  {...routerProps}
                  isLoading={this.state.loading}
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
