import {
  CREATE_TODO_SUCCESS,
  GET_TODOS_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  START_EDITING,
  CANCEL_EDITING
} from "../actions/actionsConst";

export function TodoListReducer(state = [], action) {
  switch (action.type) {
    case CREATE_TODO_SUCCESS: {
      return [...state, action.todo];
    }

    case GET_TODOS_SUCCESS: {
      return action.todos.data;
    }

    case START_EDITING: {
      return state.map(s => todo(s, action));
    }

    case CANCEL_EDITING: {
      return state.map(s => todo(s, action));
    }

    case UPDATE_TODO: {
      return state.map(s => todo(s, action));
    }

    case UPDATE_TODO_SUCCESS: {
      return state.map(s => todo(s, action));
    }

    case DELETE_TODO: {
      return state.filter(s => s.id !== action.todo.id);
    }

    case DELETE_TODO_SUCCESS: {
      return state.filter(s => todo(s, action));
    }

    default:
      return state;
  }
}

const todo = (state, action) => {
  if (state.id !== (action.id || action.todo.id)) {
    return state;
  }

  switch (action.type) {
    case START_EDITING: {
      return {
        ...state,
        editing: true
      };
    }

    case CANCEL_EDITING: {
      return {
        ...state,
        editing: false
      };
    }

    case UPDATE_TODO: {
      return {
        ...state,
        editing: false,
        updating: true
      };
    }

    case UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        ...action.todo,
        updating: false,
        editing: false
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        deleting: true
      };
    }

    default: {
      return state;
    }
  }
};
