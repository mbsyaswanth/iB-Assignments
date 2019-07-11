import React, { Component } from "react";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  render() {
    return (
      <div className="todo-item-container">
        {this.state.edit ? (
          <span>
            <input type="text" value={this.props.todoText} />
          </span>
        ) : (
          <span>
            <input type="checkbox" />
            {this.props.todoText}
          </span>
        )}
        <span>
          <span className="item-edit-btn">
            <input type="button" value="edit" onClick={this.props.edit} />
          </span>
          <span className="item-submit-btn">
            <input type="button" value="submit" onClick={this.props.submit} />
          </span>
          <span className="item-delete-btn">
            <input type="button" value="X" />
          </span>
        </span>
      </div>
    );
  }
}

export default TodoItem;
