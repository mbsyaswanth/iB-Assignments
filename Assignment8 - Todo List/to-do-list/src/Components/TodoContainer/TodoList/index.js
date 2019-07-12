import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.list.map(item => {
      return (
        <TodoItem
          key={item.id}
          id={item.id}
          todoText={item.todoText}
          completed={item.completed}
          editItem={this.props.editItem}
          deleteItem={this.props.deleteItem}
          editStatus={this.props.editStatus}
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
