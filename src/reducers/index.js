import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import isfetching from './isfetching'

let appTodo = combineReducers({
  todos,
  filter,
  isfetching
})

export default appTodo