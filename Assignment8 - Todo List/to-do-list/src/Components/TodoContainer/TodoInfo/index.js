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
    <div className="todo-actions-container">
      <span className="active-count">{props.activeCount + " "}items left</span>
      <span>
        <button className="todotype-btn" onClick={onAllClick}>
          All
        </button>
        <button className="todotype-btn" onClick={onActiveClick}>
          Active
        </button>
        <button className="todotype-btn" onClick={onCompletedClick}>
          Completed
        </button>
      </span>
      <span>
        <button className="todotype-btn" onClick={props.clearList}>
          Clear all
        </button>
      </span>
    </div>
  );
}

TodoInfo.defaultProps = {
  activeCount: 1
};

export default TodoInfo;
