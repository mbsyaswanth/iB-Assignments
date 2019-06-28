import React, { Component } from 'react';

import './styles.css'

class SelectYourState extends Component {
    state = { 
        selectedValue : '',
        submittedValue : '',
        msg:'donotshow'
     }

     handleChange = (event) => {
      this.setState({selectedValue: event.target.value, msg: 'donotshow'});
    }
  
    handleSubmit = (event) => {
      if(this.state.selectedValue){
      this.setState({submittedValue: this.state.selectedValue, msg:''});
      }
      event.preventDefault();
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit} className="center">
        <label>
          <select className="stp-watch-btn" value={this.state.selectedValue} onChange={this.handleChange}>
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
        <input className="stp-watch-btn" type="submit" value="Submit" />
        <div className={this.state.msg}>
          You are from {this.state.submittedValue} state.
        </div>
      </form>
         );
    }
}
 
export default SelectYourState;