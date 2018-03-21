import React, { Component } from "react";

class AddList extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  render() {
    return (
      <div id="AddListTextBox">
        <input
          type="text"
          onKeyPress={this.handleKey}
          placeholder="Add new list"
        />
      </div>
    );
  }
  handleKey(event) {
    // console.log(event.key, event.target.value);
    if (event.key !== "Enter" || event.target.value === "") {
      return;
    }
    this.props.onAddList(event.target.value);
    event.target.value = "";
  }
}

export default AddList;
