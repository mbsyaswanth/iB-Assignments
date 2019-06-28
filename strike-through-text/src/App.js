import React from 'react';
import logo from './logo.svg';
import './App.css';

import StrikeText from './components/StrikeText'

import Images from './components/Images'

import DifferentMessages from './components/DifferentMessages'

import GreetingText from './components/GreetingText'

import FavouriteDessert from './components/FavouriteDessert'

import VisitedCities from './components/VisitedCities'

import SelectYourState from './components/SelectYourState'

import DisableButton from './components/DisableButton'

import StopWatch from './components/StopWatch';
import CommentsComponent from './components/CommentsComponent';

function App() {
  return (
    <>
    <div>
      <h2>Strike through Text</h2>
      <StrikeText inputText="loream ipusum fd hfsdlkhlfhdsfhsdhfh  hlhfovnnf hlohfaoi" />
    </div>
    <hr></hr>
    <div>
      <h2>Images</h2>
      <Images imgAddr="assets/image.jpg"/>
    </div>
    <hr></hr>
    <div>
      <h2>Different messages</h2>
      <DifferentMessages />
    </div>
    <hr></hr>
    <h2>Greeting Text</h2>
      <GreetingText />
    <hr></hr>
    <h2>Favourite Dessert</h2>
      <FavouriteDessert desserts={['Vanilla','Butterscotch','Chocolate','Strawberry']} /> 
      <hr></hr>
    <h2>Check boxes</h2>
      <VisitedCities cities={['Hyderabad','Banglore','Delhi','Dubai','Mumbai']} /> 
      <hr></hr>
    <h2>Select your state</h2>
      <SelectYourState states={['Andhra Pradesh','Kerala','Tamilnadu','Karnataka','Delhi']} /> 
      <hr></hr>
      <h2>Disable Button</h2>
      <DisableButton />
      <hr></hr>
      <h2>Stop Watch</h2>
      <StopWatch />
      <hr></hr>
      <h2>Comments List</h2>
      <CommentsComponent />
    </>
  );
}

export default App;
