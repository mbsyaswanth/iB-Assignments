import React, { Component } from 'react';

import CheckBox from './CheckBox';

import './styles.css';

class VisitedCities extends Component {
    state = { 
        selectedCities : [],
        submittedCities : [],
        resultClass: "hide-text"
     }

     setSelectedCities = (x,checked) => {
         if(checked){
             if(!this.state.selectedCities.includes(x)){
                this.setState(
                    {selectedCities: this.state.selectedCities.concat(x)},
                    () => {
                        console.log(this.state.selectedCities);
                    }
                ) 
             }
         } else {
            if(this.state.selectedCities.includes(x)){
                this.setState(
                    {selectedCities: this.state.selectedCities.filter(item => item !== x)},
                    () => {
                        console.log(this.state.selectedCities);
                    }
                ) 
             }
         }
     }

     submit = () => {
         this.setState(
             {
                 resultClass:"",
                 submittedCities:this.state.selectedCities
             }
         )
     }
    
    render() { 
        return ( 
            <div>
                {
                     this.props.cities.map((city) => {
                      return  <CheckBox key={city} labelText={city} updateSelectedCities={this.setSelectedCities} />
                    })
                }
                <button onClick={this.submit}>Submit</button>
                <div className={this.state.resultClass}>You have visited these cities {this.state.submittedCities}</div>
            </div>
         );
    }
}
 
export default VisitedCities;