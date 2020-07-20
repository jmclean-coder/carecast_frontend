import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(

<Router>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/signup" component={SignupPage}/>
  <Route exact path="/login" component={LoginPage}/>
</Router>, document.getElementById('root')


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();