import { TodoApi } from "../api/todoApi";
import {
  CREATE_TODO_SUCCESS,
  HIDE_ERRORS,
  DISPLAY_ERRORS,
  GET_TODOS_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  START_EDITING,
  CANCEL_EDITING
} from "./actionsConst";

export const CreateTodo = todo => async (dispatch, getState) => {
  try {
    const createTodos = await TodoApi.createTodo(todo);
    await dispatch(CreateTodoSuccess(createTodos.data));
    dispatch(HideErrors());
  } catch (error) {
    dispatch(DisplayErrors(error.response.data.message));
  }
};

export function HideErrors() {
  return {
    type: HIDE_ERRORS,
    error: ""
  };
}

export function DisplayErrors(error) {
  return {
    type: DISPLAY_ERRORS,
    error
  };
}

export function CreateTodoSuccess(todo) {
  return {
    type: CREATE_TODO_SUCCESS,
    todo
  };
}

export const GetTodos = () => async (dispatch, getState) => {
  try {
    const getTodo = await TodoApi.getTodo();
    await dispatch(GetTodoSuccess(getTodo));
  } catch (error) {
    console.log(error);
  }
};

export function GetTodoSuccess(todos) {
  return {
    type: GET_TODOS_SUCCESS,
    todos
  };
}

export function StartEditing(id) {
  return {
    type: START_EDITING,
    id
  };
}

export function CancelEditing(id) {
  return {
    type: CANCEL_EDITING,
    id
  };
}

export function UpdateTodo(todo) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_TODO,
      todo
    });

    TodoApi.updateTodo(todo);
    dispatch(UpdateTodoSuccess(todo));
  };
}

export function UpdateTodoSuccess(todo) {
  return {
    type: UPDATE_TODO_SUCCESS,
    todo,
    id: todo.id
  };
}

export function DeleteTodo(todo) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TODO,
      todo
    });

    TodoApi.removeTodo(todo).then(res => {
      if (res.status === 204) {
        dispatch(DeleteTodoSuccess(todo));
      }
    });
  };
}

export function DeleteTodoSuccess(todo) {
  return {
    type: DELETE_TODO_SUCCESS,
    todo,
    id: todo.id
  };
}
