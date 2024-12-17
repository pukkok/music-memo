import soundManager from '../utils/soundManager'
import './styles/controls.css'
import { useEffect } from 'react'

const Controls = ({ memo, onReset, onDelete, pinsetIndex }) => {
  useEffect(() => {
    soundManager.loadInstrument()
  }, [])

  return (
    <div className="controls">
      <button onClick={() => soundManager.playSequence(memo, pinsetIndex)}>🟩</button>
      <button onClick={() => soundManager.stopSequence()}>🟥</button>
      <button onClick={onReset}>💣</button>
      <button onClick={onDelete}>🗑️</button>
    </div>
  )
}

export default Controls
