import { useState } from 'react'
import { tunes, defaultShorcut } from '../constants/pianoItems'
import './styles/piano.css'
import { useEffect } from 'react'

const Piano = () => {

  const [pressed, setPressed] = useState([])

  const noteClick = () => {
    console.log('노트 클릭')
  }

  const noteKeyDown = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    console.log('노트 키다운')
    setPressed(prev => [...prev, pressedNote])
  }
  const noteKeyUp = (e) => {
    const pressedNote = defaultShorcut[e.key.toUpperCase()]
    console.log('노트 키업')
    setPressed(prev => prev = prev.filter(key => key !== pressedNote))
  }

  useEffect(() => {
    window.addEventListener('keydown', noteKeyDown)
    window.addEventListener('keyup', noteKeyUp)
    return () => {
      window.removeEventListener('keydown', noteKeyDown)
      window.removeEventListener('keyup', noteKeyUp)
    }
  }, [])

  return <div className="notes">
    {tunes.map((note, idx) => {
      return <button 
        key={idx} 
        className={`
          ${note.includes("#") ? "sharp" : ""}
          ${pressed.includes(note) && "active"} `}
        onClick={noteClick}
        ></button>
    })}
  </div>
}

export default Piano