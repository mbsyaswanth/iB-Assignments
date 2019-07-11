import React, { Component } from "react";

export class TodoEntrybox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  submitTodo = event => {
    this.props.addTodo({ todoText: this.state.input, completed: false });
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
          value={this.state.input}
          onChange={this.updateInput}
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

export default TodoEntrybox;
