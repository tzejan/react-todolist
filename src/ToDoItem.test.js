/**
 * @jest-environment node
 */
import React from "react";
import { shallow } from "enzyme";
import ToDoItem from "./ToDoItem";

describe("ToDoItem", () => {
  it("should create the item", () => {
    const data = { description: "buy milk", isCompleted: false };
    const wrapper = shallow(<ToDoItem task={data} />);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.text()).toEqual(data.description);
  });

  it("should have no class assigned for uncompleted items", () => {
    const data = { description: "buy milk", isCompleted: false };
    const wrapper = shallow(<ToDoItem task={data} />);

    expect(wrapper.prop("className")).toEqual("");
  });

  it("should have the done class for completed items", () => {
    const data = { description: "buy milk", isCompleted: true };
    const wrapper = shallow(<ToDoItem task={data} />);

    expect(wrapper.prop("className")).toEqual("done");
  });

  it("should call the onTaskComplete function when clicked", () => {
    const data = { description: "buy milk", isCompleted: false };
    const mockHandler = jest.fn();
    const wrapper = shallow(<ToDoItem task={data} onTaskComplete={mockHandler}/>);

    wrapper.simulate("click");
    expect(mockHandler).toHaveBeenCalled();
  });
});
