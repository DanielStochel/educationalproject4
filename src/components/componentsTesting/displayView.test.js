import DisplayView from "../DisplayView";
import { mount } from "enzyme";
import React from "react";

it("checks if the component renders correctly", () => {
  const wrapper = mount(<DisplayView error="validate" />);
  
  expect(wrapper.props().error).toEqual("validate");
  expect(wrapper.find("p").text()).toBe("validate");
});
