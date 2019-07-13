import React, { Component } from "react";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      input: this.props.todoText
    };
  }

  handleDelete = () => {
    this.props.deleteItem(this.props.id);
  };

  handleEdit = () => {
    this.setState({ edit: true });
  };

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ edit: false });
    this.props.editItem(this.props.id, this.state.input);
    event.preventDefault();
  };

  handleCompleted = () => {
    console.log(this.props.completed);
    this.props.editStatus(this.props.id, !this.props.completed);
  };

  render() {
    return (
      <div className="todo-item-container">
        <span className="center ">
          {this.state.edit ? (
            <form className="left-space" onSubmit={this.handleSubmit}>
              <input
                className="todo-inputbox edit-input"
                type="text"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
            </form>
          ) : (
            <span
              className={
                "center " + (this.props.completed ? "strike-text" : "")
              }
            >
              <span className="center" onClick={this.handleCompleted}>
                {this.props.completed ? (
                  <img
                    className="checkbox-img todo-item-checkbox"
                    src="assets/checked.png"
                  />
                ) : (
                  <img
                    className="checkbox-img todo-item-checkbox"
                    src="assets/checkbox-unchecked.png"
                  />
                )}
              </span>
              {/* <input
                className="todo-item-checkbox"
                type="checkbox"
                checked={this.props.completed}
                onChange={this.handleCompleted}
              /> */}{" "}
              <span
                className="edit-input"
                onDoubleClick={this.props.completed ? "" : this.handleEdit}
              >
                {this.state.input}
              </span>
            </span>
          )}
        </span>
        <span className="center ">
          <span className="clr-item-btn">
            <input
              className={this.state.edit ? "invisible" : "item-delete-btn"}
              type="button"
              onClick={this.handleDelete}
              value="X"
            />
          </span>
        </span>
      </div>
    );
  }
}

export default TodoItem;
