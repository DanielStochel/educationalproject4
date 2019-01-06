import { TodoListReducer } from "./todoReducers";
import * as TodoActions from "../actions/todoActions";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(TodoListReducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_TODO_SUCCESS", () => {
    expect(
      TodoListReducer([], {
        type: TodoActions.CREATE_TODO_SUCCESS,
        todo: { id: 1, title: "learning testing", created_by: "Daniel" }
      })
    ).toEqual([{ id: 1, title: "learning testing", created_by: "Daniel" }]);
  });

  it("should handle GET_TODOS_SUCCESS", () => {
    expect(
      TodoListReducer([], {
        type: TodoActions.GET_TODOS_SUCCESS,
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
          type: TodoActions.START_EDITING,
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
          type: TodoActions.CANCEL_EDITING,
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
          type: TodoActions.UPDATE_TODO,
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
          type: TodoActions.UPDATE_TODO_SUCCESS,
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
          type: TodoActions.DELETE_TODO,
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
    expect(TodoListReducer(
        [
          {
            todos: [
              { id: 1, title: "learning testing", created_by: "Daniel" }
            ]
          }
        ],
        {
          type: TodoActions.DELETE_TODO_SUCCESS,
          todo: { id: 1, title: "learning testing", created_by: "Daniel" }
        }
      )).toEqual([
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
