import './styles/rightControls.css'

const RightControls = ({onReset, onDelete}) => {

  return (
    <div className='right-controls'>
      <button onClick={onReset}>💣</button>
      <button onClick={onDelete}>🗑️</button>
    </div>
  )
}

export default RightControls