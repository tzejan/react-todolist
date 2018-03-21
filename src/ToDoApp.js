import React, { Component } from "react";
import ToDoList from "../src/ToDoList";
import AddList from "../src/AddList"

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
    this.addTaskToList = this.addTaskToList.bind(this);
    this.addNewList = this.addNewList.bind(this);
  }
  render() {
    return (
      <div className="toDoApp">
        {this.state.toDoLists.map((list, idx) => (
          <ToDoList
            key={idx}
            list_id={idx}
            toDoList={list}
            onTaskComplete={this.updateTaskStatus}
            onAddTask={this.addTaskToList}
          />
        ))}
        <AddList onAddList={this.addNewList}/>
      </div>
    );
  }

  updateTaskStatus(listIndex, taskIndex) {
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists[listIndex].tasks[taskIndex].isCompleted = !updateToDoLists[listIndex].tasks[taskIndex].isCompleted;
    this.setState({ updateToDoLists });
  }

  addTaskToList(listIndex, taskName) {
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists[listIndex].tasks.push({
      description: taskName,
      isCompleted: false
    });
    this.setState({ updateToDoLists });
  }

  addNewList(newListName){
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists.push({
      name: newListName,
      tasks: []
    });
    this.setState({ updateToDoLists });
  }
}

export default ToDoApp;
