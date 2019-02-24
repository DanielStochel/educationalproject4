import { DISPLAY_ERRORS, HIDE_ERRORS } from "../actions/actionsConst";

export function ErrorsReducer(state = "", action) {
  switch (action.type) {
    case DISPLAY_ERRORS: {
      return action.error;
    }

    case HIDE_ERRORS: {
      return action.error;
    }

    default:
      return state;
  }
}
