import React, { Component } from 'react';

class DisableButton extends Component {
    state = {
        selected: false
    }

    handleCheckbox = () => {
        this.setState({
            selected:!this.state.selected
        })
    }

    handleClick = () => {
        if(!this.state.selected){
            alert("I am Working");
        }
    }

    render() {

        return (
            <div className="center">
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.selected}
                        onChange={this.handleCheckbox} />
                        Disabled
                </label>
                <span>
                    <button className="stp-watch-btn" onClick={this.handleClick}>Click me</button>
                </span>
            </div>
        );
    }
}

export default DisableButton;