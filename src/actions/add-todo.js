import {ADD_TODO, 
        ADD_TODOS,
        FETCH_TODOS_BEFORE} from '../action_types'

export const addTodo = (text) => {
  return {
    id: '' + (new Date()).getTime() + parseInt(Math.random()*10000, 10),
    text,
    type: ADD_TODO
  }
}

export const fetchTodosBefore = () => {
  return {
    type: FETCH_TODOS_BEFORE
  }
}

export const addTodos = todos => {
  return {
    todos,
    type: ADD_TODOS
  }
}

export const fetchTodos = (url) => (dispatch) => {
  dispatch(fetchTodosBefore())
  fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addTodos(json)))
}