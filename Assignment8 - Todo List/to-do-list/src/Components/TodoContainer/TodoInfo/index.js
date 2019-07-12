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
    <div className="todo-actions-container" style={{ display: props.display }}>
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

TodoInfo.defaultProps = {
  activeCount: 1
};

export default TodoInfo;
