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
      <div>
        <AuthPage />
        {/* <ShoppingSite store={store} /> */}
      </div>
    </Router>
  );
}

export default App;
