import { TodoApi } from '../api/todoApi'

export const CREATE_TODO = '[Todo] CREATE_TODO'
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS'
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR'

export const HIDE_ERRORS = 'HIDE_ERRORS'
export const DISPLAY_ERRORS = 'DISPLAY_ERRORS'

export const GET_TODOS = '[Todo] GET_TODOS'
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS'
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR'

export const START_EDITING ='[Todo] START_EDITING'
export const CANCEL_EDITING = '[Todo] CANCEL_EDITING'

export const UPDATE_TODO = '[Todo] UPDATE_TODO'
export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR'

export const COMPLETE_TODO = 'COMPLETE_TODO'

export const DELETE_TODO = '[Todo] DELETE_TODO'
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS'
export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR'

export function CreateTodo(todo) {
  return (dispatch, getState) => {
    return TodoApi.createTodo(todo).then(res => {
      dispatch(CreateTodoSuccess(res.data))
      dispatch(HideErrors())
    })
    .catch(error => {
      dispatch(DisplayErrors(error.response.data.message))
    })
  }
}

export function HideErrors() {
  return {
    type: HIDE_ERRORS,
    error: ''
  }
}

export function DisplayErrors(error) {
  return {
    type: DISPLAY_ERRORS,
    error
  }
}

export function CreateTodoSuccess(todo){
  return {
    type:CREATE_TODO_SUCCESS,
    todo
  }
}

export function GetTodos(){
  return (dispatch, getState) => {
    return TodoApi.getTodo().then(res => {
      dispatch(GetTodoSuccess(res))
    })
  }
}

export function GetTodoSuccess(todos){
  return {
    type:GET_TODOS_SUCCESS,
    todos
  }
}

export function StartEditing(id) {
  return {
    type: START_EDITING,
    id
  }
}

export function CancelEditing(id) {
  return {
    type: CANCEL_EDITING,
    id
  }
}

export function UpdateTodo(todo) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_TODO,
      todo
  })

    TodoApi.updateTodo(todo)
    dispatch(UpdateTodoSuccess(todo))
  }
}

export function UpdateTodoSuccess(todo) {
  return {
    type: UPDATE_TODO_SUCCESS,
    todo,
    id: todo.id
  }
}

export function DeleteTodo(todo) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TODO,
      todo
    })
    
    TodoApi.removeTodo(todo).then(res => {
      if (res.status === 204) {
        dispatch(DeleteTodoSuccess(todo))
      }
    })
  }
}

export function DeleteTodoSuccess(todo) {
  return {
    type: DELETE_TODO_SUCCESS,
    todo,
    id: todo.id
  }
}
