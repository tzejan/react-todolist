/**
 * @jest-environment node
 */
import React from "react";
import { shallow } from "enzyme";
import ToDoList from "./ToDoList";
import AddList from "./AddList";
import ToDoItem from "./ToDoItem";

describe("To Do List", () => {
  it("should render toDo List properly", () => {
    const toDoListData = {
      name: "Home ToDos",
      tasks: [
        { description: "buy milk", isCompleted: false },
        { description: "drink juice", isCompleted: false },
        { description: "eat lunch", isCompleted: false }
      ]
    };
    const mockHandler = jest.fn();
    const wrapper = shallow(<ToDoList list_id="1" toDoList={toDoListData} onUpdateNewTask={mockHandler}/>);
    expect(wrapper.find(ToDoItem)).toHaveLength(3);
    expect(wrapper.find("h2").at(0).text()).toBe(toDoListData.name);
  });
});
