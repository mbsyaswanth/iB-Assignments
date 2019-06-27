import React, { Component } from 'react';

import './styles.css'

import InputBox from './InputBox';

import Button from './Button';

class GreetingText extends Component {
    state = {
        username: "",
        greet: "",
        focus: "dontshow"
    }

    stateUsernameUpdate = (event) => {
        this.setState({
            username: event.target.value 
        });
        console.log(this.state.username)
    }

    handleSubmit = (event) => {
        this.setState({
            greet : this.state.username, 
            username: "" 
        });
        console.log(this.state.greet);
        event.preventDefault();
    }

    handleFocus = (x) => {
        this.setState({
            focus : x
        });
    }

    render() {
        return (
            <>
                <div className="greeting-container">
                    <InputBox inputValue={this.state.username} updateInput={this.stateUsernameUpdate} helperTextClass={this.state.focus} focushandle={this.handleFocus} />
                    <Button btnText="Greet" btnAction={this.handleSubmit}/> 
               
                   
                <div>
                   Hello {this.state.greet}, Have a nice day.
                </div>
                </div>
            </>
        );
    }
}

export default GreetingText;