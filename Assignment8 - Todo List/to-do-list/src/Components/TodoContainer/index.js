import React, { Component } from "react";

import TodoInfo from "./TodoInfo";
import "./styles.css";
import TodoList from "./TodoList";
import TodoEntrybox from "./TodoEntrybox";
import todoFilterTypes from "../constants";

export class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      listType: todoFilterTypes.all
    };
  }
  onAddToTodoList = itemObj => {
    let list = this.state.todoList;
    list.unshift(itemObj);
    this.setState({
      todoList: list
    });
  };

  onEditIteminTodoList = (index, text) => {
    let list = this.state.todoList;
    let itemIndex = this.getItemIndexinList(index);
    list[itemIndex] = {
      id: list[itemIndex].id,
      todoText: text,
      completed: list[itemIndex].completed
    };
    this.setState({ todoList: list });
  };

  onEditItemCompletionStatus = (index, status) => {
    let list = this.state.todoList;
    let itemIndex = this.getItemIndexinList(index);
    list[itemIndex] = {
      id: list[itemIndex].id,
      todoText: list[itemIndex].todoText,
      completed: status
    };
    this.setState({ todoList: list });
  };

  onDeleteIteminTodoList = index => {
    if (window.confirm("Do you really want to delete this item?")) {
      let list = this.state.todoList;
      list.splice(this.getItemIndexinList(index), 1);
      this.setState({ todoList: list });
    }
  };

  getItemIndexinList = id => {
    return this.state.todoList.findIndex(obj => {
      return obj.id === id;
    });
  };

  onChangeListType = type => {
    this.setState({
      listType: type
    });
  };

  getActiveItemsCount = () => {
    let count = 0;
    this.state.todoList.forEach(item => {
      if (!item.completed) count++;
    });
    return count;
  };

  onClearAllCompleted = () => {
    let list = this.state.todoList.filter(item => {
      return !item.completed;
    });

    this.setState({ todoList: list });
  };

  render() {
    return (
      <div className="todo-container">
        <h2>todos</h2>
        <div className="todo-inner-container">
          <TodoEntrybox addTodo={this.onAddToTodoList} />
          <TodoList
            list={this.state.todoList}
            type={this.state.listType}
            editItem={this.onEditIteminTodoList}
            deleteItem={this.onDeleteIteminTodoList}
            editCompletionStatus={this.onEditItemCompletionStatus}
          />
          <TodoInfo
            currentType={this.state.listType}
            totalCount={this.state.todoList.length}
            activeCount={this.getActiveItemsCount()}
            onChangeListType={this.onChangeListType}
            clearList={this.onClearAllCompleted}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
