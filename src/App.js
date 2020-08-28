import React from "react";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import JournalPage from "./containers/JournalPage";
import FeelingPage from "./containers/FeelingPage";
import ListPage from "./containers/ListPage";
import SignupPage from "./containers/SignupPage";
import HomeNavBar from "./components/homepage/HomeNavBar";
import LoaderHOC from "./HOCs/LoaderHOC";
import Footer from './containers/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { api } from "./services/api";
const DashboardWithLoading = LoaderHOC(DashboardPage);
const JournalWithLoading = LoaderHOC(JournalPage);
const FeelingWithLoading = LoaderHOC(FeelingPage);
const ListWithLoading = LoaderHOC(ListPage);



export default class App extends React.Component {
  state = {
    auth: {
      user: {},
      loggedIn: false,
    },
    userData: {},
    categories: [],
    feelings: [],
    affirmation: "",
    loading: false,
  };
  //each time app mounts checks to see if authorized to access so you don't have to login again
  componentDidMount() {
    this.setState({ loading: true });
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token, "hello from CDM-token!")
      api.auth.getCurrentUser()
      .then((user) => {
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
        this.getAffirmation();
      });
    }
    // console.log(this.state, 1);
    this.setState({ loading: false });
  }

  signup = (data) => {
    console.log(this.state, 2);
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
        loggedIn: true,
      },
      loading: true,
    });
    this.getUserData(data.id);
    this.getCategories();
    this.getFeelings();
    this.getAffirmation();
  };

  //Recieves data from loginForm fetch if no errors. Set's token in localstorage
  login = (data) => {
    // user data and token from fetch in api
    console.log(data, "hello from App login!");
    //setting token in localstorage
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
        loggedIn: true,
      },
      loading: true,
    });
    
    this.getUserData(data.id);
    this.getCategories();
    this.getFeelings();
    this.getAffirmation();
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

      .then((data) => {
        console.log(data)
        const {
          full_name,
          journal_entries,
          list_items,
          feelings,
          user_ratings,
          todays_user_ratings,
          todays_user_feelings,
          user_feelings
        } = data.data.attributes;
        this.setState({
          userData: {
            ...this.state.userData,
            fullName: full_name,
            userRatings: [...user_ratings],
            todaysRatings: [...todays_user_ratings],
            feelings: [...feelings],
            journalEntries: [...journal_entries],
            todos: [...list_items],
            todaysFeelings: [...todays_user_feelings],
            userFeelings: [...user_feelings]
          },
          loading: false,
        });
      }
      );
  };

  getCategories = () => {
    api.categories.fetchCategories().then((res) => {
      console.log(res, "hi from get Cate");
      this.setState({
        categories: res,
      });
    });
  };

  getFeelings = () => {
    api.feelings.fetchFeelings().then((res) => {
      console.log(res, "hi from getFeels");
      this.setState({
        feelings: res,
      });
    });
  };

  getAffirmation = () => {
    api.affirmation.fetchAffirmation().then((data) => {
      this.setState({
        affirmation: data.affirmation,
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
    let editedEntry = { ...entry, user_id: this.state.auth.user.id };
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

  incrementRating = (categoryId) => {

    let foundRating = this.state.userData.todaysRatings.find(
      (stateRating) => stateRating.category_id === categoryId
    );
    if (foundRating) {
      //2. otherwise increment existing rating
      //a. update backend PATCH
      //b. increment found rating in state
      const elementsIndex = this.state.userData.todaysRatings.findIndex(
        (element) => element.category_id == categoryId
      );
      const newArr = [...this.state.userData.todaysRatings];
      newArr[elementsIndex] = {
        ...newArr[elementsIndex],
        rating: newArr[elementsIndex].rating + 1,
      };

      this.setState(
        (prevState) => ({
          userData: {
            ...prevState.userData,
            todaysRatings: newArr,
          },
        }),
        () =>
          api.patch
            .patchRating(newArr[elementsIndex])
            .then((res) => console.log(res))
      );
    } else {
      //1. If rating does not exist in state, add new rating
      let data = {
        rating: 1,
        category_id: categoryId,
      };

      api.ratings.postRating(data).then((res) => {
        let rating = res.data.attributes;
        console.log(res.data.attributes);
        this.setState((prevState) => ({
          userData: {
            ...prevState.userData,
            todaysRatings: [...prevState.userData.todaysRatings, rating],
          },
        }));
      });
    }
  };

  decrementRating = (categoryId) => {
    const elementsIndex = this.state.userData.todaysRatings.findIndex(
      (element) => element.category_id == categoryId
    );
    const newArr = [...this.state.userData.todaysRatings];
    newArr[elementsIndex] = {
      ...newArr[elementsIndex],
      rating: newArr[elementsIndex].rating - 1,
    };

    this.setState(
      (prevState) => ({
        userData: {
          ...prevState.userData,
          todaysRatings: newArr,
        },
      }),
      () =>
        api.patch
          .patchRating(newArr[elementsIndex])
          .then((res) => console.log(res))
    );
  };


  renderNavbar = () => (
    <>
    <Route path='/' exact render={() => <HomeNavBar loggedIn={this.state.auth.loggedIn} onLogout={this.logout} />}/>
    <Route path='/dashboard' exact render={() => <HomeNavBar loggedIn={this.state.auth.loggedIn} onLogout={this.logout} />}/>
    <Route path='/feeling_tracker' exact render={() => <HomeNavBar loggedIn={this.state.auth.loggedIn} onLogout={this.logout} />}/>
    <Route path='/todos' exact render={() => <HomeNavBar loggedIn={this.state.auth.loggedIn} onLogout={this.logout} />}/>
    <Route path='/journal' eaxct render={() =><HomeNavBar loggedIn={this.state.auth.loggedIn} onLogout={this.logout} />}/>
    </>
  )

  renderFooter = () => (
    <>
    <Route path='/' exact render={() => <Footer />}/>
    <Route path='/dashboard' exact render={() => <Footer />}/>
    <Route path='/feeling_tracker' exact render={() => <Footer />}/>
    <Route path='/todos' exact render={() => <Footer />}/>
    <Route path='/journal' eaxct render={() =><Footer />}/>
    </>
  )

  render() {
    return (
      <div className="App">
        <Router>
        {this.renderNavbar()}
          <Switch>
          <Route
              exact
              path="/login"
              render={(routerProps) => (
                <LoginPage {...routerProps} onLogin={this.login} />
              )}
            />
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
                  todaysFeelings={this.state.todaysFeelings}
                  addFeeling={this.addFeeling}
                  addJournalEntry={this.addJournalEntry}
                  updateJournalEntry={this.updateJournalEntry}
                  affirmation={this.state.affirmation}
                  user={this.state.auth.user}
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
                  userFeelingWords={this.state.userData.feelings}
                  addFeeling={this.addFeeling}
                  feelingList={this.state.feelings}
                  todaysFeelings={this.state.userData.todaysFeelings}
                  userFeelings={this.state.userData.userFeelings}
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
        {this.renderFooter()}
        </Router>
      </div>
    );
  }
}
