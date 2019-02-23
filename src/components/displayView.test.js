import DisplayView from "./DisplayView";
import { mount } from "enzyme";
import React from "react";

it("renders welcome message", () => {
  const wrapper = mount(<DisplayView error="ktos" />);
  expect(wrapper.props().error).toEqual("ktos");
});
