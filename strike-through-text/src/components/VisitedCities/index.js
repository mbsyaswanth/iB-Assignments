import React, { Component } from 'react';

import CheckBox from './CheckBox';

import './styles.css';

class VisitedCities extends Component {
    state = {
        selectedCities: [],
        submittedCities: [],
        resultClass: "hide-text"
    }

    setSelectedCities = (x, checked) => {
        if (checked) {
            if (!this.state.selectedCities.includes(x)) {
                this.setState(
                    {
                        selectedCities: this.state.selectedCities.concat(x),
                        resultClass: "hide-text"
                    },
                    () => {
                        console.log(this.state.selectedCities);
                    }
                )
            }
        } else {
            if (this.state.selectedCities.includes(x)) {
                this.setState(
                    {
                        selectedCities: this.state.selectedCities.filter(item => item !== x),
                        resultClass: "hide-text"
                    },
                    () => {
                        console.log(this.state.selectedCities);
                    }
                )
            }
        }
    }

    submit = () => {
        if (this.state.selectedCities) {
            this.setState(
                {
                    resultClass: "",
                    submittedCities: this.state.selectedCities
                }
            )
        }
    }

    render() {
        return (
            <div className="center">
                <div>
                {
                    this.props.cities.map((city) => {
                        return <CheckBox key={city} labelText={city} updateSelectedCities={this.setSelectedCities} />
                    })
                }
                </div>
                <button className="stp-watch-btn" onClick={this.submit}>Submit</button>
                <div className={this.state.resultClass}>You have visited these cities {this.state.submittedCities}</div>
            </div>
        );
    }
}

export default VisitedCities;