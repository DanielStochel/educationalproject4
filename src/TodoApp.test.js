import React from 'react';
import TodoApp from "./TodoApp";
import { shallow } from "enzyme";
import ErrorsContainer from "./container/ErrorsContainer";

it("renders welcome message", () => {
  const wrapper = shallow(<TodoApp />);
  const welcome = <ErrorsContainer />;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});