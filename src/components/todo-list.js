import React from 'react';

class TodoList extends React.Component {
  render() {
    let { addTodo, todos, toggleTodo } = this.props
    let input
    return (
      <div>
        <h3>todo list</h3>
        <input type="text" ref={(node) => { input = node }} />
        <button type="button" onClick={() => {
          addTodo(input.value.trim())
          input.value = ''
        }}>todo</button>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.get('id')}
                style={{ textDecoration: todo.get('completed') ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(todo.get('id'))}>{todo.get('text')}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.getInitData()
  }
}

export default TodoList;