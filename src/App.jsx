import Piano from './component/piano'
import Controls from './component/controls'
import './App.css'
import Container from './component/container'
import NoteCanvas from './canvas/noteCanvas'
import { useState } from 'react'

function App() {
  const [pressed, setPressed] = useState([])
  const [memo, setMemo] = useState([])
  const [pinsetIndex, setPinsetIndex] = useState(0)

  const handleReset = () => {
    setMemo([])
    setPinsetIndex(0)
  }

  const handleDelete = () => {
    setMemo((prev) => prev.filter((_, idx) => idx !== prev.length - 1))
  }

  return (
    <Container>
      <NoteCanvas memo={memo} onPinsetChange={setPinsetIndex} />
      <Piano pressed={pressed} setPressed={setPressed} setMemo={setMemo} />
      <Controls memo={memo} onReset={handleReset} onDelete={handleDelete} pinsetIndex={pinsetIndex} />
    </Container>
  )
}

export default App
