import {combineReducers} from 'redux'
import todos from './todos'

let appTodo = combineReducers({
  todos
})

export default appTodo