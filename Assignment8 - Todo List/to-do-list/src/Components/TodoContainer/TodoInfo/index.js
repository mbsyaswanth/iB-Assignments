import React from "react";

import todoFilterTypes from "../../constants";

function TodoInfo(props) {
  const onAllClick = () => {
    props.onChangeListType(todoFilterTypes.all);
  };

  const onActiveClick = () => {
    props.onChangeListType(todoFilterTypes.active);
  };

  const onCompletedClick = () => {
    props.onChangeListType(todoFilterTypes.completed);
  };

  return (
    <div
      className={
        "todo-actions-container " +
        (props.totalCount === 0 ? "display-none" : "")
      }
    >
      <span className="active-count">{props.activeCount + " "}items left</span>
      <span>
        <button
          className={
            "todotype-btn " +
            (props.currentType !== todoFilterTypes.all
              ? "todo-btn-inactive"
              : "")
          }
          onClick={onAllClick}
        >
          All
        </button>
        <button
          className={
            "todotype-btn " +
            (props.currentType !== todoFilterTypes.active
              ? "todo-btn-inactive"
              : "")
          }
          onClick={onActiveClick}
        >
          Active
        </button>
        <button
          className={
            "todotype-btn " +
            (props.currentType !== todoFilterTypes.completed
              ? "todo-btn-inactive"
              : "")
          }
          onClick={onCompletedClick}
        >
          Completed
        </button>
      </span>
      <span>
        <button className="todotype-btn" onClick={props.clearList}>
          Clear completed
        </button>
      </span>
    </div>
  );
}

export default TodoInfo;
