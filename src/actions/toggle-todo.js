import {TOGGLE_TODO} from '../action_types'

export const toggleTodo = (id) => {
  return {
    id,
    type: TOGGLE_TODO
  }
}