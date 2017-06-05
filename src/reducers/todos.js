import {ADD_TODO, 
        TOGGLE_TODO,
        ADD_TODOS} from '../action_types';
import {List, Map, fromJS} from 'immutable';
import undoable from 'redux-undo'

const todos = (state = List(), action) => {
  switch(action.type) {
    case ADD_TODO: 
      return addTodo(state, action)

    case ADD_TODOS:
      return addTodos(state, action)
    
    case TOGGLE_TODO:
      return toggleTodo(state, action)
    
    default: 
      return state
  }
}

/**
 * 添加todo
 * @param {*} state 
 * @param {*} action 
 */
function addTodo(state, action) {
  let todo = Map({
    id: action.id,
    text: action.text,
    completed: false
  })

  return state.push(todo)
}

/**
 * 初始化的时候，批量导入todos
 * @param {*} state 
 * @param {*} action 
 */
function addTodos(state, action) {
  let todos = fromJS(action.todos)

  return state.concat(todos)
}

/**
 * 切换 todo 状态
 * @param {*} state 
 * @param {*} action 
 */
function toggleTodo(state, action) {
  let result = state.map((todo) => {
    // 找到action id 对应的todo
    if(todo.get('id') === action.id) {
      return todo.set('completed', !todo.get('completed'))
    }

    return todo
  })

  return result
}

let undoableTodos = undoable(todos)

export default undoableTodos