import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterList = () => {
    if (this.props.type === "all") {
      return this.props.list;
    }
    if (this.props.type === "active") {
      return this.props.list.filter(item => {
        return !item.completed;
      });
    }
    if (this.props.type === "completed") {
      return this.props.list.filter(item => {
        return item.completed;
      });
    }
  };

  render() {
    let list = this.filterList();

    return list.map(item => {
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
