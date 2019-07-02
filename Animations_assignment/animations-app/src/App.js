import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnHoverTransition from './components/OnHoverTransition';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div>
      <OnHoverTransition />
      <hr></hr>
      <HamburgerMenu />
    </div>
  );
}

export default App;
