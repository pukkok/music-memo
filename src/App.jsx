import Piano from './component/piano'
import Controls from './component/controls'
import './App.css'
import Container from './component/container'
import NoteCanvas from './canvas/noteCanvas'
import { useState } from 'react'

function App() {
  const [pressed, setPressed] = useState([]) // 현재 누른 키들
  const [memo, setMemo] = useState([]) // 메모 데이터

  // 메모 초기화 함수
  const handleReset = () => {
    setMemo([])
  }
  const handleDelete = () => {
    setMemo(prev => prev.filter((_, idx) => idx !== prev.length - 1))
  }

  return (
    <Container>
      <NoteCanvas memo={memo} />
      <Piano pressed={pressed} setPressed={setPressed} setMemo={setMemo} />
      <Controls memo={memo} onReset={handleReset} onDelete={handleDelete}/>
    </Container>
  )
}

export default App
