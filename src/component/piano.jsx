import { tunes, defaultShorcut } from '../constants/pianoItems'
import './styles/piano.css'
import { useEffect, useState } from 'react'

const VALID_DURATIONS = [0.25, 0.5, 1, 1.5, 2, 3, 4] // 가능한 지속시간 리스트

const getValidDuration = (duration) => {
  const seconds = duration / 1000 // ms를 초 단위로 변환
  const validDuration = VALID_DURATIONS.find((time) => seconds <= time) || 4 // 올림 처리
  return validDuration * 1000 // ms 단위로 반환
}

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
      const rawDuration = Date.now() - startTime[pressedNote] // 지속 시간 계산
      const validDuration = getValidDuration(rawDuration) // 올림 처리 및 최대값 제한
      setMemo((prev) => [
        ...prev,
        { note: pressedNote, duration: validDuration }, // 유효한 지속시간 저장
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
