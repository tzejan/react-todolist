import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    //console.log(typeof this.props.toDoList);
    return (
      <div>
        <h2>{this.props.toDoList.name}</h2>
        {this.props.toDoList.tasks.map((task, idx) => {
          return (
            <li
              key={idx}
              id={this.props.id + "_" + idx}
              className = {task.isCompleted ? "done" : ""}
              onClick={this.handleClick}
            >
              {task.description}
            </li>
          );
        })}
      </div>
    );
  }

  handleClick(e) {
    console.log(e.target.id);
    let taskIDs = e.target.id.split("_");
    this.props.onTaskComplete(taskIDs[0], taskIDs[1]);
  }
}

export default ToDoList;
