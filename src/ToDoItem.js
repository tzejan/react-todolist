import React from "react";

function ToDoItem(props) {
  return (
    <li
      className={props.task.isCompleted ? "done" : ""}
      onClick={props.onTaskComplete}
    >
      {props.task.description}
    </li>
  );
}

export default ToDoItem;
