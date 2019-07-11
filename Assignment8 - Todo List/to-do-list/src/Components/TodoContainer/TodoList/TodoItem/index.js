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
    this.props.editItem(this.props.id, {
      toDoText: this.state.input,
      completed: false
    });
  };

  render() {
    return (
      <div className="todo-item-container">
        {this.state.edit ? (
          <span>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleInputChange}
            />
          </span>
        ) : (
          <span>
            <input type="checkbox" />
            {this.state.input}
          </span>
        )}
        <span>
          {this.state.edit ? (
            <span className="item-submit-btn">
              <input type="button" value="submit" onClick={this.handleSubmit} />
            </span>
          ) : (
            <span className="item-edit-btn">
              <input type="button" value="edit" onClick={this.handleEdit} />
            </span>
          )}

          <span className="item-delete-btn">
            <input type="button" onClick={this.handleDelete} value="X" />
          </span>
        </span>
      </div>
    );
  }
}

export default TodoItem;
