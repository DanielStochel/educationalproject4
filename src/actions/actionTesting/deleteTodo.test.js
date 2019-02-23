import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "../todoActions";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store = mockStore({ todos: [] });
const todo = {
  id: 141,
  todo: {
    id: 141,
    created_by: "Daniel",
    created_at: "Daniel"
  }
};

describe("compare deleting actions with store", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
    store = mockStore({ todos: [] });
  });

  it("mock request with 204 status", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204,
        response: todo
      });
    });

    const expectedActions = [
      { type: actions.DELETE_TODO, todo },
      { id: todo.id, todo, type: actions.DELETE_TODO_SUCCESS }
    ];

    return (
      store.dispatch(actions.DeleteTodo(todo)),
      store.dispatch(actions.DeleteTodoSuccess(todo)),
      expect(expectedActions).toEqual(store.getActions())
    );
  });
});
