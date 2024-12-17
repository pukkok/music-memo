import { tunes, defaultShorcut } from '../constants/pianoItems'
import './styles/piano.css'
import { useEffect, useState } from 'react'
import soundManager from '../utils/soundManager'

const getValidDuration = (duration) => {
  const VALID_DURATIONS = [0.2, 0.4, 0.8, 1.2, 1.6, 2.4, 3.2]
  const seconds = duration / 1000 > 3.2 ? 3200 : duration + 100
  return seconds
}

const Piano = ({ pressed, setPressed, setMemo }) => {
  const [startTime, setStartTime] = useState({})

  const noteKeyDown = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    if (pressedNote && !pressed.includes(pressedNote)) {
      setPressed((prev) => [...prev, pressedNote])
      setStartTime((prev) => ({ ...prev, [pressedNote]: Date.now() }))
      soundManager.playNote(pressedNote)
    }
  }

  const noteKeyUp = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    if (pressedNote && pressed.includes(pressedNote)) {
      const rawDuration = Date.now() - startTime[pressedNote]
      const validDuration = getValidDuration(rawDuration)

      setMemo((prev) => [
        ...prev,
        { note: pressedNote, duration: validDuration },
      ])
      setPressed((prev) => prev.filter((key) => key !== pressedNote))
      soundManager.stopNote(pressedNote)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', noteKeyDown)
    window.addEventListener('keyup', noteKeyUp)
    return () => {
      window.removeEventListener('keydown', noteKeyDown)
      window.removeEventListener('keyup', noteKeyUp)
    }
  }, [pressed, startTime])

  return (
    <div className="notes">
      {tunes.map((note, idx) => (
        <button
          key={idx}
          className={`${pressed.includes(note) && 'active'} ${note.includes('#') && 'sharp'}`}
        ></button>
      ))}
    </div>
  )
}

export default Piano
