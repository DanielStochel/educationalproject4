import {TodoListReducer} from "./todoReducers";

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(TodoListReducer(undefined, {})).toEqual([]);
  })
  
})