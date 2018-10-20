import {combineReducers} from 'redux'
import {TodoListReducer} from './todoReducers'
import {ErrorsReducer} from './errorsReducer'

const rootReducer = combineReducers({
  todos: TodoListReducer,
  errors: ErrorsReducer
})

export default rootReducer
