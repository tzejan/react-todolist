import React, { Component } from "react";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    //console.log(typeof this.props.toDoList);
    return (
      <div className="toDoList">
        <h2>{this.props.toDoList.name}</h2>
        {this.props.toDoList.tasks.map((task, idx) => {
          return (
            <ToDoItem
              key={idx}
              task={task}
              onTaskComplete={this.handleClick.bind(
                this,
                this.props.list_id,
                idx
              )}
            />
          );
        })}
        <AddTask
          list_id={this.props.list_id}
          onAddTask={this.props.onAddTask}
        />
      </div>
    );
  }

  handleClick(listID, taskID) {
    this.props.onTaskComplete(listID, taskID);
  }
}

export default ToDoList;
