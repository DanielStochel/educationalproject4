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
    created_at: "dsadsa"
  }
}

describe("compare actions", () => {
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
      });
    });

  const expectedActions = [
      { type: actions.DELETE_TODO, todo }
    ];

    return (
      store.dispatch(actions.DeleteTodo(todo)),
      expect(expectedActions).toEqual(store.getActions())
    );
  });
});
