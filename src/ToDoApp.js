import React, { Component } from "react";
import ToDoList from "../src/ToDoList";

export const homeTodos = [
  { description: "buy milk", isCompleted: false },
  { description: "drink juice", isCompleted: false },
  { description: "eat lunch", isCompleted: false }
];

export const workTodos = [
  { description: "learn react", isCompleted: false },
  { description: "learn javascript", isCompleted: false }
];

class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {
      toDoLists: [
        {
          name: "Home ToDos",
          tasks: homeTodos
        },
        {
          name: "Work ToDos",
          tasks: workTodos
        }
      ]
    };
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }
  render() {
    return (
      <div className="toDoApp">
        {this.state.toDoLists.map((list, idx) => (
          <ToDoList key={idx} id={idx} toDoList={list} onTaskComplete={this.updateTaskStatus} />
        ))}
      </div>
    );
  }

  updateTaskStatus(listIndex, taskIndex){
    console.log(listIndex, taskIndex);
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists[listIndex].tasks[taskIndex].isCompleted = !updateToDoLists[listIndex].tasks[taskIndex].isCompleted;
    this.setState({updateToDoLists});
  }
}

export default ToDoApp;
