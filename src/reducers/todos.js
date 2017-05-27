import {ADD_TODO, TOGGLE_TODO} from '../action_types';
import {List, Map} from 'immutable';

export default (state = List(), action) => {
  switch(action.type) {
    case ADD_TODO: 
      return addTodo(state, action)
    
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
 * 切换 todo 状态
 * @param {*} state 
 * @param {*} action 
 */
function toggleTodo(state, action) {
  state.map((todo) => {
    // 找到action id 对应的todo
    if(todo.id === action.id) {
      return todo.set('completed', !todo.get('completed'))
    }

    return todo
  })
}