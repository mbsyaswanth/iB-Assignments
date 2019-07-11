import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.list.map((item, index) => {
      return (
        <TodoItem
          id={index}
          todoText={item.todoText}
          editItem={this.props.editItem}
        />
      );
    });
  }
}

TodoList.defaultProps = {
  list: [
    { todoText: "jjsdaggfhgfdhjgfdjhgjkhgdjkfkg", completed: false },
    { todoText: "hello", completed: false }
  ]
};

export default TodoList;
