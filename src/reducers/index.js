import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'

let appTodo = combineReducers({
  todos,
  filter
})

export default appTodo