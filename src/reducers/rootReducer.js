import {combineReducers} from 'redux'
import {TodoListReducer} from './todoReducers'

const rootReducer = combineReducers({
  todos: TodoListReducer
})

export default rootReducer
