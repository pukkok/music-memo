const RightControls = ({onReset, onDelete}) => {

  return (
    <div>
      <button onClick={onReset}>💣</button>
      <button onClick={onDelete}>🗑️</button>
    </div>
  )
}

export default RightControls