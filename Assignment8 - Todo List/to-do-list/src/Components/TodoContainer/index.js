import React, { Component } from "react";

import TodoInfo from "./TodoInfo";
import "./styles.css";
import TodoList from "./TodoList";
import TodoEntrybox from "./TodoEntrybox";

export class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      listType: "all"
    };
  }

  addToTodoList = itemObj => {
    let list = this.state.todoList;
    list.unshift(itemObj);
    this.setState({
      todoList: list
    });
    // this.state.todoList.concat(itemObj)
  };

  editIteminTodoList = (index, item) => {
    let list = this.state.todoList;
    list[index] = item;
    this.setState({ todoList: list });
  };

  deleteIteminTodoList = index => {
    let list = this.state.todoList;
    list.splice(index, 1);
    this.setState({ todoList: list });
  };

  changeListType = type => {
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

  clearAllTodoList = () => {
    this.setState({ todoList: [] });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-inner-container">
          <h2>todos</h2>
          <TodoEntrybox addTodo={this.addToTodoList} />
          <TodoList
            list={this.state.todoList}
            type={this.state.listType}
            editItem={this.editIteminTodoList}
            deleteItem={this.deleteIteminTodoList}
          />
          <TodoInfo
            activeCount={this.getActiveItemsCount()}
            changeListType={this.changeListType}
            clearList={this.clearAllTodoList}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
