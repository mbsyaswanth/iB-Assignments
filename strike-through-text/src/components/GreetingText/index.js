import React, { Component } from 'react';

import './styles.css'

import InputBox from './InputBox';

import Button from './Button';

class GreetingText extends Component {
    state = {
        username: "",
        greet: "",
        focus: "dontshow",
        greetingText:"donotshow"
    }

    stateUsernameUpdate = (event) => {
        this.setState({
            username: event.target.value ,
            greetingText:"donotshow"
        });
        console.log(this.state.username)
    }

    handleSubmit = (event) => {
        if(this.state.username){
            this.setState({
                greet : this.state.username, 
                username: "" ,
                greetingText:""
            });
        }
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
                    <Button  btnText="Greet" btnAction={this.handleSubmit}/> 
               
                   
                <div className={this.state.greetingText}>
                   Hello {this.state.greet}, Have a nice day.
                </div>
                </div>
            </>
        );
    }
}

export default GreetingText;