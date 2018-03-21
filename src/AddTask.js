import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onKeyPress={this.handleKey}
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
}

export default AddTask;
