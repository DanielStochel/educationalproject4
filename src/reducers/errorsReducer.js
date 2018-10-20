import * as TodoActions from '../actions/todoActions'

export function ErrorsReducer(state = '', action) {
  switch (action.type) {

    case TodoActions.DISPLAY_ERRORS: {
      return action.error
    }

    case TodoActions.HIDE_ERRORS: {
      return action.error
    }

    default:
      return state
  }
}
