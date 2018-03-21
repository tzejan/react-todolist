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
          tasks: homeTodos,
          newTask: ""
        },
        {
          name: "Work ToDos",
          tasks: workTodos,
          newTask: ""
        }
      ]
    };
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
    this.addNewList = this.addNewList.bind(this);
    this.updateNewTask = this.updateNewTask.bind(this);
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
            onUpdateNewTask={this.updateNewTask}
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

  updateNewTask(listIndex, taskName){
    let newTaskName = taskName;
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists[listIndex].newTask = newTaskName;
    this.setState({updateToDoLists});
  }

  addTaskToList(listIndex, taskName) {
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists[listIndex].tasks.push({
      description: taskName,
      isCompleted: false
    });
    updateToDoLists[listIndex].newTask = "";
    this.setState({ updateToDoLists });
  }

  addNewList(newListName){
    let updateToDoLists = this.state.toDoLists;
    updateToDoLists.push({
      name: newListName,
      tasks: [],
      newTask: ""
    });
    this.setState({ updateToDoLists });
  }
}

export default ToDoApp;
