import React, { Component } from 'react';

class SelectYourState extends Component {
    state = { 
        selectedValue : 'Select Your State',
        submittedValue : ''
     }

     handleChange = (event) => {
      this.setState({selectedValue: event.target.value});
    }
  
    handleSubmit = (event) => {
      this.setState({submittedValue: this.state.selectedValue});
      event.preventDefault();
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.selectedValue} onChange={this.handleChange}>
          <option value="Select Your State">Select Your State</option>
            {
                this.props.states.map(
                (state)=>{
                   return <option value={state}>{state}</option>
                })
            }
          </select>
        </label>
        <div></div>
        <input type="submit" value="Submit" />
        <div>
          You are from {this.state.submittedValue} state.
        </div>
      </form>
         );
    }
}
 
export default SelectYourState;