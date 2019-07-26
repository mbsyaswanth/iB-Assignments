import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ShoppingSite from "./Components/ShoppingSite";
import Products from "./Store";
import AuthPage from "./Components/AuthPage";

let store = new Products();

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route
        path="/login"
        render={props => (
          <AuthPage
            {...props}
            type="login"
            submit={store.login}
            store={store}
          />
        )}
      />
      <Route
        path="/signup"
        render={props => (
          <AuthPage
            {...props}
            type="signup"
            submit={store.signUp}
            store={store}
          />
        )}
      />
      <Route
        path="/products"
        render={props => <ShoppingSite store={store} />}
      />
    </Router>
  );
}

export default App;
