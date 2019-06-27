import React, { Component } from 'react';

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
              currentSelectedDessert: event.target.value
            });
            console.log(this.state.currentSelectedDessert);
          }

        this.handleSubmit = (event) => {
            console.log("submission detected");
            event.preventDefault();
            this.setState({
                finalDessert: this.state.currentSelectedDessert,
                msg:""
              });
          }

        return ( 
            <form onSubmit={this.handleSubmit}>
      <p>What is your favourite Ice cream</p>
      
      <ul>
        <li>
          <label>
            <input
              type="radio"
              value="VANILLA"
              checked={this.state.currentSelectedDessert === "VANILLA"}
              onChange={this.handleChange}
            />
            Vanilla
          </label>
        </li>
        
        <li>
          <label>
            <input
              type="radio"
              value="BUTTERSCOTCH"
              checked={this.state.currentSelectedDessert === "BUTTERSCOTCH"}
              onChange={this.handleChange}
            />
            Butterscotch
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio"
              value="CHOCOLATE"
              checked={this.state.currentSelectedDessert === "CHOCOLATE"}
              onChange={this.handleChange}
            />
            Chocolate
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio"
              value="STRAWBERRY"
              checked={this.state.currentSelectedDessert === "STRAWBERRY"}
              onChange={this.handleChange}
            />
            Strawberry
          </label>
        </li>
      </ul>

      <button type="submit">Submit</button>
      <div className={this.state.msg}>
          Your favourite Dessert is {this.state.finalDessert}
      </div>
    </form>
         );
    }
}
 
export default FavouriteDessert;