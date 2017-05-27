import React from 'react';

let TodoList = ({addTodo, todos}) => {
  let input

  return (
    <div>
      <h3>todo list</h3>
      <input type="text" ref={(node) => {input = node}}/>
      <button type="button" onClick={() => addTodo(input.value.trim())}>todo</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.get('id')} 
                style={{textDecoration: todo.get('completed') ? 'line-throught': 'none'}}>{todo.get('text')}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;