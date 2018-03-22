/**
 * @jest-environment node
 */
import React from "react";
import { shallow } from "enzyme";
import AddTask from "./AddTask";

describe("AddTask", () => {
  it("should create AddTask properly", () => {
    const data = "some data";
    const wrapper = shallow(<AddTask value={data} />);

    expect(wrapper.exists()).toEqual(true);
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("value")
    ).toEqual(data);
  });
  xit("should call updateNewTask on key entered", () => {
    const data = "some data";
    const mockUpdateFunction = jest.fn().mockName("onUpdateNewTask");
    const wrapper = shallow(<AddTask value={data} />);

    console.log(wrapper.find("input").debug());
    // wrapper.find("input").simulate('keyPress', {target: {value: 'My new value'}})
    wrapper.find("input").simulate("change", { target: { value: "a" } });
    console.log(wrapper.find("input").debug());
    expect(mockUpdateFunction).toHaveBeenCalled();
    // expect(mockUpdateFunction.mock.calls).toEqual(4);
  });
});
