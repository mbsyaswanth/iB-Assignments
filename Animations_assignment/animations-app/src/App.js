import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnHoverTransition from './components/OnHoverTransition';
import HamburgerMenu from './components/HamburgerMenu';
import Grid from './components/Grid';

function App() {
  return (
    <div>
      <OnHoverTransition />
      <hr></hr>
      <HamburgerMenu />
      <hr></hr>
      <Grid size="5" />
    </div>
  );
}

export default App;
