import React, { Component } from "react";

import TodoItem from "./TodoItem";
import todoFilterTypes from "../../constants";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterList = () => {
    //move to parent
    if (this.props.type === todoFilterTypes.all) {
      return this.props.list;
    }
    if (this.props.type === todoFilterTypes.active) {
      return this.props.list.filter(item => {
        return !item.completed;
      });
    }
    if (this.props.type === todoFilterTypes.completed) {
      return this.props.list.filter(item => {
        return item.completed;
      });
    }
  };

  render() {
    return this.filterList().map(item => {
      return (
        <TodoItem
          key={item.id}
          item={item}
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
