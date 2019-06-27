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
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.selected}
                        onChange={this.handleCheckbox} />
                </label>
                <span>
                    <button onClick={this.handleClick}>Click me</button>
                </span>
            </div>
        );
    }
}

export default DisableButton;