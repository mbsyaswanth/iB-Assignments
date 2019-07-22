import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ShoppingSite from "./Components/ShoppingSite";
import Products from "./Store";

let store = new Products();

function App() {
  return (
    <div>
      <ShoppingSite store={store} />
    </div>
  );
}

export default App;
