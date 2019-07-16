import React, { Component } from "react";

export class TodoEntrybox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  id = 0;
  submitTodo = event => {
    if (this.state.input === "" || this.state.input === " ") {
      event.preventDefault();
      return;
    }
    this.props.addTodo({
      id: this.id++,
      todoText: this.state.input,
      completed: false
    });
    this.setState({ input: "" });
    event.preventDefault();
  };

  updateInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          className="left-space todo-inputbox "
          value={this.state.input}
          onChange={this.updateInput}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    );
  }
}

export default TodoEntrybox;
