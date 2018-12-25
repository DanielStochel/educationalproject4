import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from "./TodoApp";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<TodoApp />);
});