import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.controlledHandleKey = this.controlledHandleKey.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          // onChange={this.controlledHandleKey} // doesn't take in Enter key
          // onKeyPress={this.handleKey} // is not controlled item
          onKeyPress={this.controlledHandleKey}
          placeholder="Add new task"
        />
      </div>
    );
  }
  handleKey(event) {
    if (event.key !== "Enter" || event.target.value === "") {
      return;
    }
    this.props.onAddTask(this.props.list_id, event.target.value);
    event.target.value = "";
  }

  controlledHandleKey(event) {
    if (event.key !== "Enter" || event.target.value === "") {
      this.props.onUpdateNewTask(this.props.value + event.key);
    } else {
      this.props.onAddTask(this.props.list_id, event.target.value);
    }
  }
}

export default AddTask;
