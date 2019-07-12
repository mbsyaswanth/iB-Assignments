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

  handleSubmit = () => {
    this.setState({ edit: false });
    if (window.confirm("do you want to confirm edits?")) {
      this.props.editItem(this.props.id, this.state.input);
    } else {
      this.setState({
        input: this.props.todoText
      });
    }
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
            <span className="left-space">
              <input
                className="todo-inputbox"
                type="text"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
            </span>
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
              <span onDoubleClick={this.props.completed ? "" : this.handleEdit}>
                {this.state.input}
              </span>
            </span>
          )}
        </span>
        <span className="center ">
          {this.state.edit ? (
            <span className="item-submit-btn">
              <input
                className="todotype-btn"
                type="button"
                value="submit"
                onClick={this.handleSubmit}
              />
            </span>
          ) : (
            ""
          )}

          <span>
            <input
              className="item-delete-btn"
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
