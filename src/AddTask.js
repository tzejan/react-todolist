import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.handleKey} placeholder="Add new task" />
      </div>
    );
  }
  handleKey(event) {
    // console.log(event.key, event.target.value);
    if (event.key !== "Enter" || event.target.value === "") {
      return;
    }
    this.props.onAddTask(this.props.listID, event.target.value);
    event.target.value = "";
  }
}

export default AddTask;
