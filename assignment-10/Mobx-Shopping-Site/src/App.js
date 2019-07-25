import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import ShoppingSite from "./Components/ShoppingSite";
import Products from "./Store";
import AuthPage from "./Components/AuthPage";

let store = new Products();

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" render={() => <AuthPage type="login" />} />
      <Route path="/signup" render={() => <AuthPage type="signup" />} />
      <div>{/* <ShoppingSite store={store} /> */}</div>
    </Router>
  );
}

export default App;
