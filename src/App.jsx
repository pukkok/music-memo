import Container from './component/container'
import NoteCanvas from './canvas/noteCanvas'
import { useState } from 'react'
import Main from './main/main'
import Header from './header/header'

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
      <Header />
      <NoteCanvas memo={memo} onPinsetChange={setPinsetIndex} />
      <Main 
        pressed={pressed} 
        setPressed={setPressed} 
        memo={memo}
        setMemo={setMemo} 
        pinsetIndex={pinsetIndex}
        onReset={handleReset}
        onDelete={handleDelete}
      />
    </Container>
  )
}

export default App
