import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterList = () => {
    //move to parent
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
    //TODO: send item istead of its contents
    return this.filterList().map(item => {
      return (
        <TodoItem
          key={item.id}
          id={item.id}
          todoText={item.todoText}
          isCompleted={item.completed}
          editItem={this.props.editItem}
          deleteItem={this.props.deleteItem}
          editStatus={this.props.editCompletionStatus}
        />
      );
    });
  }
}

export default TodoList;
