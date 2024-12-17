import soundManager from '../utils/soundManager'
import './styles/controls.css'
import { useEffect } from 'react'

const Controls = ({ memo, onReset, onDelete }) => {
  useEffect(() => {
    soundManager.loadInstrument()
  }, [])

  return (
    <div className="controls">
      <button onClick={() => soundManager.playSequence(memo)}>시작</button>
      <button onClick={() => soundManager.stopSequence()}>정지</button>
      <button onClick={onReset}>초기화</button>
      <button onClick={onDelete}>마지막 값 지우기</button>
    </div>
  )
}

export default Controls
