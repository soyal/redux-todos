import React from 'react'

let UndoRedo = ({canUndo, canRedo, doUndo, doRedo}) => {
  return (
    <div>
      <button type="button" onClick={doUndo} disabled={!canUndo}>undo</button>
      <button type="button" onClick={doRedo} disabled={!canRedo}>redo</button>
    </div>
  )
}

export default UndoRedo