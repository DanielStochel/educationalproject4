import EditTodo from "../editTodo";
import React from 'react';
import { mount } from "enzyme";

it("should accept the props to state", () => {
  const todo = { title: "", description: "", created_by: "Daniel" };
  const wrapper = mount(<EditTodo todo={todo} />);
  
  const instance = wrapper.instance().state;
  expect(instance).toEqual(todo);
})

it("should not accept the props to state", () => {
  const todo = { title: "", description: "", created_by: "" };
  const wrapper = mount(<EditTodo todo={todo} />);

  const instance = wrapper.instance().state;
  expect(instance).toEqual(todo);
})
