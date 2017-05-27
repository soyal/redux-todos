import {ADD_TODO} from '../action_types'

let id = 0

export const addTodo = (text) => {
  return {
    id: id++,
    text,
    type: ADD_TODO
  }
}