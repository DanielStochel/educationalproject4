import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "./todoActions";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store = mockStore({ todos: [] });
const todo = {
  created_by: "Daniel"
};

describe("async actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
    store = mockStore({ todos: [] });
  });

  it("mock request with 200 status", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: todo
      });
    });

    const expectedActions = [
      {
        type: actions.CREATE_TODO_SUCCESS,
        todo
      },
      { error: "", type: "HIDE_ERRORS" }
    ];

    return store.dispatch(actions.CreateTodo()).then(() => {
      expect(expectedActions).toEqual(store.getActions());
    });
  });
});

describe("async actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
    store = mockStore({ todos: [] });
  });

  it("mock request with 422 status", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 422,
        response: {
          error: undefined
        }
      });
    });

    const expectedActions = [{ error: undefined, type: "DISPLAY_ERRORS" }];

    return store.dispatch(actions.CreateTodo()).then(() => {
      expect(expectedActions).toEqual(store.getActions());
    });
  });
});
