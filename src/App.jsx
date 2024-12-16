import Piano from './component/piano'
import './App.css'
import Container from './component/container'
import NoteCanvas from './canvas/noteCanvas'
import { useState } from 'react'

function App() {
  const [pressed, setPressed] = useState([])

  return (
    <>
      <Container>
        <NoteCanvas pressed={pressed} timer={timer}/>
        <Piano pressed={pressed} setPressed={setPressed}/>
      </Container>
    </>
  )
}

export default App
