import TodoList from '../components/todo-list'
import {connect} from 'react-redux'
import { addTodo } from '../actions/add-todo'

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text))
})

const mapStateToProps = (state) => ({
  todos: state.todos
})

const TodoListCtn = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListCtn