import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "../todoActions";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store = mockStore({ todos: [] });


describe("checking if dispatch sends correct actions to store", () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
    store = mockStore({ todos: [] });
  });

  it("mock request with 200 status", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });

    const expectedActions = [ actions.GET_TODOS_SUCCESS ];

    return store.dispatch(actions.GetTodos()).then(() => {

      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActions);
    });
  });
});

