import { tunes, defaultShorcut } from '../constants/pianoItems'
import './styles/piano.css'
import { useEffect, useState } from 'react'

const Piano = ({ pressed, setPressed, setMemo }) => {
  const [startTime, setStartTime] = useState({}) // 시작 시간 저장

  const noteKeyDown = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    if (pressedNote && !pressed.includes(pressedNote)) {
      setPressed((prev) => [...prev, pressedNote]) // 키 정보 저장
      setStartTime((prev) => ({ ...prev, [pressedNote]: Date.now() })) // 시작 시간 기록
    }
  }

  const noteKeyUp = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    if (pressedNote && pressed.includes(pressedNote)) {
      const duration = Date.now() - startTime[pressedNote] // 지속 시간 계산
      setMemo((prev) => [
        ...prev,
        { note: pressedNote, duration: Math.round(duration / 250) * 250 }, // 반올림된 duration
      ])
      setPressed((prev) => prev.filter((key) => key !== pressedNote)) // pressed에서 제거
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
