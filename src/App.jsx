import Piano from './component/piano'
import './App.css'
import Container from './component/container'
import NoteCanvas from './canvas/noteCanvas'
import { useState } from 'react'

function App() {
  const [pressed, setPressed] = useState([]) // 현재 누른 키들
  const [memo, setMemo] = useState([]) // 직사각형 메모 데이터

  return (
    <Container>
      <NoteCanvas memo={memo} />
      <Piano pressed={pressed} setPressed={setPressed} setMemo={setMemo} />
    </Container>
  )
}

export default App
