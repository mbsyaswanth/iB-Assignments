import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

class FavouriteDessert extends Component {
  state = {
    currentSelectedDessert: "",
    finalDessert: "",
    msg: "dontshow"
  }
  render() {

    this.handleChange = (event) => {
      console.log("change detected");
      console.log(event.target.value);
      this.setState({
        currentSelectedDessert: event.target.value.toUpperCase(),
        msg: "dontshow"
      });
      console.log(this.state.currentSelectedDessert);
    }

    this.handleSubmit = (event) => {
      console.log("submission detected");
      event.preventDefault();
      if(this.state.currentSelectedDessert){
        this.setState({
          finalDessert: this.state.currentSelectedDessert,
          msg: ""
        });
      }
    }

    return (
      <form onSubmit={this.handleSubmit} className="center">
        <p>What is your favourite Ice cream</p>

        <ul className="undotted-list">
          {
            this.props.desserts.map(
              (dessert) => {
                return (
                  <li>
                    <label>
                      <input 
                        type="radio"
                        value={dessert}
                        checked={this.state.currentSelectedDessert === dessert.toUpperCase()}
                        onChange={this.handleChange}
                      />
                      {dessert}
                    </label>
                  </li>
                )
              }
            )
          }
        </ul>

        <button className="stp-watch-btn" type="submit">Submit</button>
        <div className={this.state.msg}>
          Your favourite Dessert is {this.state.finalDessert}
        </div>
      </form>
    );
  }
}

export default FavouriteDessert;