/**
 * @jest-environment node
 */
import React from "react";
import { shallow } from "enzyme";
import ToDoApp from "./ToDoApp";
import ToDoList from "./ToDoList";
import AddList from "./AddList";

describe("To Do App", () => {
  it("should render toDo app", () => {
    const wrapper = shallow(<ToDoApp />);
    expect(wrapper.find(".toDoApp")).toHaveLength(1);
  });

  it("should have 2 to do Lists", () => {
    const wrapper = shallow(<ToDoApp />);
    expect(wrapper.find(ToDoList)).toHaveLength(2);
  });

  it("should have an AddList component", () => {
    const wrapper = shallow(<ToDoApp />);
    expect(wrapper.find(AddList)).toHaveLength(1);
    //console.log(wrapper.children().filter("ToDoList").debug());
  });
});
