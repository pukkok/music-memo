import { tunes, defaultShorcut } from '../constants/pianoItems'
import './styles/piano.css'
import { useEffect, useState } from 'react'
import soundManager from '../utils/soundManager'

const getValidDuration = (duration) => {
  const VALID_DURATIONS = [0.2, 0.4, 0.8, 1.2, 1.6, 2.4, 3.2]
  const seconds = duration / 1000 > 3.2 ? 3200 : duration + 50
  return seconds
}

/**
 * Piano 컴포넌트는 피아노 키보드와 관련된 기능을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트의 props
 * @param {Array} props.pressed - 현재 눌려진 키의 배열
 * @param {Function} props.setPressed - 눌려진 키 배열을 업데이트하는 함수
 * @param {Function} props.setMemo - 메모를 업데이트하는 함수
 * 
 * 주요 기능:
 * - 키보드 단축키를 눌렀을 때와 뗐을 때의 이벤트를 처리합니다.
 * - 마우스 클릭 및 이동 이벤트를 처리합니다.
 * - useEffect 훅을 사용하여 컴포넌트가 마운트될 때와 언마운트될 때 이벤트 리스너를 추가 및 제거합니다.
 * 
 * useEffect:
 * - 컴포넌트가 마운트될 때 'keydown', 'keyup', 'mousedown', 'mousemove', 'mouseup' 이벤트 리스너를 추가합니다.
 * - 컴포넌트가 언마운트될 때 'keydown', 'keyup' 이벤트 리스너를 제거합니다.
 * - 'keydown' 이벤트는 noteKeyDown 함수와 연결되어 키보드 단축키를 눌렀을 때의 동작을 처리합니다.
 * - 'keyup' 이벤트는 noteKeyUp 함수와 연결되어 키보드 단축키를 뗐을 때의 동작을 처리합니다.
 * - 'mousedown' 이벤트는 noteMouseDown 함수와 연결되어 마우스를 눌렀을 때의 동작을 처리합니다.
 * - 'mousemove' 이벤트는 noteMouseMove 함수와 연결되어 마우스를 이동할 때의 동작을 처리합니다.
 * - 'mouseup' 이벤트는 noteMouseUp 함수와 연결되어 마우스를 뗐을 때의 동작을 처리합니다.
 * 
 * @returns {JSX.Element} 피아노 키보드 UI를 렌더링합니다.
 */
const Piano = ({ pressed, setPressed, setMemo }) => {
  const [startTime, setStartTime] = useState({})

  // TODO : 단축키 눌렀을때
  const noteKeyDown = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    if (pressedNote && !pressed.includes(pressedNote)) {
      setPressed((prev) => [...prev, pressedNote])
      setStartTime((prev) => ({ ...prev, [pressedNote]: Date.now() }))
      soundManager.playNote(pressedNote)
    }
  }

  // 
  /**
   * Handles the key up event for a piano note.
   * 
   * @param {KeyboardEvent} e - The keyboard event triggered on key up.
   * @returns {void}
   */
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

  const handleMouseDown = (note) => {
    if (!pressed.includes(note)) {
      setPressed((prev) => [...prev, note])
      setStartTime((prev) => ({ ...prev, [note]: Date.now() }))
      soundManager.playNote(note)
    }
  }

  const handleMouseUp = (note) => {
    if (pressed.includes(note)) {
      const rawDuration = Date.now() - startTime[note]
      const validDuration = getValidDuration(rawDuration)

      setMemo((prev) => [
        ...prev,
        { note, duration: validDuration },
      ])
      setPressed((prev) => prev.filter((key) => key !== note))
      soundManager.stopNote(note)
    }
  }

  const handleMouseLeave = (note) => {
    if (pressed.includes(note)) {
      const rawDuration = Date.now() - startTime[note]
      const validDuration = getValidDuration(rawDuration)

      setMemo((prev) => [
        ...prev,
        { note, duration: validDuration },
      ])
      setPressed((prev) => prev.filter((key) => key !== note))
      soundManager.stopNote(note)
    }
  }

  const handleTouchStart = (note) => {
    handleMouseDown(note)
  }

  const handleTouchEnd = (note) => {
    handleMouseUp(note)
  }

  return (
    <div className="notes">
      {tunes.map((note, idx) => (
        <button
          key={idx}
          className={`${pressed.includes(note) ? 'active' : ""} ${note.includes('#') ? 'sharp' : ""}`}
          onMouseDown={(e) => {
            e.preventDefault()
            handleMouseDown(note)
          }}
          onMouseUp={(e) => {
            e.preventDefault()
            handleMouseUp(note)
          }}
          onMouseLeave={(e) => {
            e.preventDefault()
            handleMouseLeave(note)
          }}
          onTouchStart={(e) => {
            e.preventDefault()
            handleTouchStart(note)
          }}
          onTouchEnd={(e) => {
            e.preventDefault()
            handleTouchEnd(note)
          }}
        ></button>
      ))}
    </div>
  )
}

export default Piano
