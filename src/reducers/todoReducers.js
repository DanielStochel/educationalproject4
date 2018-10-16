import * as TodoActions from '../actions/todoActions'

export function TodoListReducer(state = [], action) {
  switch (action.type) {

        // The cases ordered in CRUD order.

        // Create
    case TodoActions.CREATE_TODO_SUCCESS: {
      return [
        ...state,
        action.todo,
      ];
    }
    //Read
    case TodoActions.GET_TODOS_SUCCESS: {
      return action.todos.data
    }

    // The following Cases handle the data by mapping it. Mostly because they are related with the modification of a single Data

    //Update
    case TodoActions.START_EDITING: {
      return state.map(s => todo(s, action))
    }

    case TodoActions.CANCEL_EDITING: {
      return state.map(s => todo(s, action))
    }
    case TodoActions.UPDATE_TODO: {
      return state.map(s => todo(s, action))
    }

    case TodoActions.UPDATE_TODO_SUCCESS: {
      return state.map(s => todo(s, action))
    }

    //Delete
    case TodoActions.DELETE_TODO: {
      return state.map(s => todo(s, action))
    }

    case TodoActions.DELETE_TODO_SUCCESS: {
      return state.filter(s => todo(s, action))
    }
    default:
      return state
  }
}


//The individual Reducer. It handles only one Todo Object.


const todo = (state, action) => {

// If the mapped todo of the previous state matches with the new ID of the action,
// Only then proceed to the Reducer Switch case

  if (state._id !== (action._id || action.todo._id)) {
    return state;
  }

  switch (action.type) {

    // Edit/modifies the individual Todos using ES6 spread operator. The cases are self explanatory.

    case TodoActions.START_EDITING:
      {
        return {
          ...state,
          editing: true
        }
      }

    case TodoActions.CANCEL_EDITING:
      {
        return {
          ...state,
          editing: false
        }
      }

    case TodoActions.UPDATE_TODO:
      {
        return {
          ...state,
          editing: false,
          updating: true
        }
      }

    case TodoActions.UPDATE_TODO_SUCCESS:
      {
        return {
          ...state,
          ...action.todo,
          updating: false
        }
      }

    case TodoActions.DELETE_TODO:
        {
          return {
            ...state,
            deleting: true
          }
        }

    case TodoActions.DELETE_TODO_SUCCESS:
      {
        return false
      }

    default:
      {
        return state;
      }
  }
}
