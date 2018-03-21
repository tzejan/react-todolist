import React, { Component } from "react";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
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
          value={this.props.toDoList.newTask}
          onAddTask={this.props.onAddTask}
          onUpdateNewTask={this.props.onUpdateNewTask.bind(this, this.props.list_id)}
        />
      </div>
    );
  }

  handleClick(listID, taskID) {
    this.props.onTaskComplete(listID, taskID);
  }
}

export default ToDoList;
