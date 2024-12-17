import soundManager from '../utils/soundManager'
import './styles/controls.css'
import { useEffect } from 'react'

const Controls = ({memo}) => {

  useEffect(() => {
    soundManager.loadInstrument()
  }, [])

  return (
    <div className="controls">
      <button onClick={() => soundManager.playSequence(memo)}>시작</button>
      <button onClick={() => soundManager.stopSequence()}>정지</button>
    </div>
  )
}

export default Controls