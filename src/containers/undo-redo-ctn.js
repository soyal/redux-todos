import UndoRedo from '../components/undo-redo'
import {ActionCreators} from 'redux-undo'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  let todos = state.todos
  return {
    canUndo: todos.past.length > 0,
    canRedo: todos.future.length > 0
  }
}

let mapDispatchToProps = ({
  doUndo: ActionCreators.undo,
  doRedo: ActionCreators.redo
})

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo)