import {FETCH_TODOS_BEFORE, ADD_TODOS} from '../action_types'

export default (isfetching = false, action) => {
  switch(action.type) {
    case FETCH_TODOS_BEFORE:
      return true
    case ADD_TODOS:
      return false
    default:
      return isfetching
  }
}