import React from 'react'
import TodoListCtn from './containers/todo-list-ctn'
import FooterCtn from './containers/footer-ctn'
import UndoRedoCtn from './containers/undo-redo-ctn'

let App = () => {
  return (
    <div>
      <TodoListCtn></TodoListCtn>
      <FooterCtn></FooterCtn>
      <UndoRedoCtn></UndoRedoCtn>
    </div>
  );
}

export default App;