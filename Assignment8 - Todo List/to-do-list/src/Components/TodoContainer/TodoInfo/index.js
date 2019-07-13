import React from "react";

function TodoInfo(props) {
  const onAllClick = () => {
    props.changeListType("all");
  };

  const onActiveClick = () => {
    props.changeListType("active");
  };

  const onCompletedClick = () => {
    props.changeListType("completed");
  };

  return (
    //TODO: change inline style and add class
    <div
      className={
        "todo-actions-container " +
        (props.totalCount === 0 ? "display-none" : "")
      }
      style={{ display: props.display }}
    >
      <span className="active-count">{props.activeCount + " "}items left</span>
      <span>
        <button
          className={
            "todotype-btn " +
            (props.currentType !== "all" ? "todo-btn-inactive" : "")
          }
          onClick={onAllClick}
        >
          All
        </button>
        <button
          className={
            "todotype-btn " +
            (props.currentType !== "active" ? "todo-btn-inactive" : "")
          }
          onClick={onActiveClick}
        >
          Active
        </button>
        <button
          className={
            "todotype-btn " +
            (props.currentType !== "completed" ? "todo-btn-inactive" : "")
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
