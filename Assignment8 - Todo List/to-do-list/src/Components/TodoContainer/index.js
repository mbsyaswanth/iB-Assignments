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

  editIteminTodoList = (index, text) => {
    let list = this.state.todoList;
    let itemIndex = this.getItemIndexinList(index);
    list[itemIndex] = {
      id: list[itemIndex].id,
      todoText: text,
      completed: list[itemIndex].completed
    };
    this.setState({ todoList: list });
  };

  editItemStatus = (index, status) => {
    console.log("status triggered");
    console.log("status ", status);
    let list = this.state.todoList;
    let itemIndex = this.getItemIndexinList(index);
    list[itemIndex] = {
      id: list[itemIndex].id,
      todoText: list[itemIndex].todoText,
      completed: status
    };
    this.setState({ todoList: list });
  };

  deleteIteminTodoList = index => {
    let list = this.state.todoList;
    list.splice(this.getItemIndexinList(index), 1);
    this.setState({ todoList: list });
  };

  getItemIndexinList = id => {
    let i = 0;
    let list = this.state.todoList;
    while (true) {
      if (list[i++].id === id) {
        break;
      }
    }
    return i - 1;
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
            itemStatus={this.editItemStatus}
            editItem={this.editIteminTodoList}
            deleteItem={this.deleteIteminTodoList}
            editStatus={this.editItemStatus}
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
