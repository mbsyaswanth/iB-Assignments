import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ShoppingSite from "./Components/ShoppingSite";
import Products from "./Store";

function App() {
  return (
    <div>
      <ShoppingSite store={new Products()} />
    </div>
  );
}

export default App;
