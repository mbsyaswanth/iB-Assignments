import React, { Component } from 'react';

class CheckBox extends Component {
    state = { 
        checked: false
     }

     handleChange = () => {
        
        

        this.setState(
             {checked : !this.state.checked} ,
             () => {
                console.log(this.props.labelText +":"+this.state.checked);
                return this.props.updateSelectedCities(this.props.labelText, this.state.checked);
                }
         );
         

     }

    render() {      
        return ( 
            <div>
                <label>
                    <input type="checkbox" value={this.props.labelText} onChange={this.handleChange} checked={this.state.checked} />
                    {this.props.labelText}
                </label>
            </div>
         );
    }
}
 
export default CheckBox;