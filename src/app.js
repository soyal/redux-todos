import React from 'react'
import TodoListCtn from './containers/todo-list-ctn'
import FooterCtn from './containers/footer-ctn'

let App = () => {
  return (
    <div>
      <TodoListCtn></TodoListCtn>
      <FooterCtn></FooterCtn>
    </div>
  );
}

export default App;