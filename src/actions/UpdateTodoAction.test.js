import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "./todoActions";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store = mockStore({ todos: [] });
const todo = {
  id: 141,
  todo: {
    id: 141,
    created_by: "dsadas",
  }
};

describe("checking if dispatches actions work", () => {
  beforeEach(function() {
    moxios.install();
    store = mockStore({ todos: [] });
  });

  afterEach(function() {
    moxios.uninstall();
    store = mockStore({ todos: [] });
  });

  it("mock request with 200 status", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204,
      });
    });
    
    const expectedActions = [{ type: actions.UPDATE_TODO, todo }, { type: actions.UPDATE_TODO_SUCCESS, todo, id: todo.id }];

    return (
      store.dispatch(actions.UpdateTodo(todo)),
      expect(expectedActions).toEqual(store.getActions())
    );
  });
});
