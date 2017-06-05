import TodoList from '../components/todo-list'
import {connect} from 'react-redux'
import { addTodo, fetchTodos } from '../actions/add-todo'
import { toggleTodo } from '../actions/toggle-todo'

function getVisibleTodos(todos, filter) {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETE':
      let completeTodos = todos.filter((todo) => {
        return todo.get('completed')
      })

      return completeTodos
    case 'SHOW_UNCOMPLETE':
      let uncompleteTodos = todos.filter((todo) => {
        return !todo.get('completed')
      })

      return uncompleteTodos
    default:
      return todos
  }
}

const FETCH_INIT_URL = '/mock-todos.json'
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  getInitData: () => dispatch(fetchTodos(FETCH_INIT_URL))
})

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.filter)
})

const TodoListCtn = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListCtn