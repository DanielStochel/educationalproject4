import { TodoListReducer } from "./todoReducers";
import * as TodoActions from "../actions/todoActions";
import {
  CREATE_TODO_SUCCESS,
  GET_TODOS_SUCCESS,
  START_EDITING,
  CANCEL_EDITING,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS
} from "../actions/actionsConst";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(TodoListReducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_TODO_SUCCESS", () => {
    expect(
      TodoListReducer([], {
        type: CREATE_TODO_SUCCESS,
        todo: { id: 1, title: "learning testing", created_by: "Daniel" }
      })
    ).toEqual([{ id: 1, title: "learning testing", created_by: "Daniel" }]);
  });

  it("should handle GET_TODOS_SUCCESS", () => {
    expect(
      TodoListReducer([], {
        type: GET_TODOS_SUCCESS,
        todos: {
          data: { id: 1, title: "learning testing", created_by: "Daniel" }
        }
      })
    ).toEqual({ id: 1, title: "learning testing", created_by: "Daniel" });
  });

  it("should handle START_EDITING", () => {
    expect(
      TodoListReducer(
        [{ id: 1, title: "learning testing", created_by: "Daniel" }],
        {
          type: START_EDITING,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 1,
        title: "learning testing",
        created_by: "Daniel",
        editing: true
      }
    ]);
  });

  it("should handle CANCEL_EDITING", () => {
    expect(
      TodoListReducer(
        [{ id: 1, title: "learning testing", created_by: "Daniel" }],
        {
          type: CANCEL_EDITING,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 1,
        title: "learning testing",
        created_by: "Daniel",
        editing: false
      }
    ]);
  });

  it("should handle UPDATE_TODO", () => {
    expect(
      TodoListReducer(
        [{ id: 1, title: "learning testing", created_by: "Daniel" }],
        {
          type: UPDATE_TODO,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 1,
        title: "learning testing",
        created_by: "Daniel",
        editing: false,
        updating: true
      }
    ]);
  });

  it("should handle UPDATE_TODO_SUCCESS", () => {
    expect(
      TodoListReducer(
        [{ id: 1, title: "learning testing", created_by: "Daniel" }],
        {
          type: UPDATE_TODO_SUCCESS,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 1,
        title: "learning testing",
        created_by: "Daniel",
        editing: false,
        updating: false
      }
    ]);
  });

  it("should handle DELETE_TODO", () => {
    expect(
      TodoListReducer(
        [
          {
            todos: [{ id: 1, title: "learning testing", created_by: "Daniel" }]
          }
        ],
        {
          type: DELETE_TODO,
          todo: { id: 1, title: "learning testing", created_by: "Daniel" }
        }
      )
    ).toEqual([
      {
        todos: [
          {
            id: 1,
            title: "learning testing",
            created_by: "Daniel"
          }
        ]
      }
    ]);
  });

  it("should handle DELETE_TODO_SUCCESS", () => {
    expect(
      TodoListReducer(
        [
          {
            todos: [{ id: 1, title: "learning testing", created_by: "Daniel" }]
          }
        ],
        {
          type: DELETE_TODO_SUCCESS,
          todo: { id: 1, title: "learning testing", created_by: "Daniel" }
        }
      )
    ).toEqual([
      {
        todos: [
          {
            id: 1,
            title: "learning testing",
            created_by: "Daniel"
          }
        ]
      }
    ]);
  });
});
