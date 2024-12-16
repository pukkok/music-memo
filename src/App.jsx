import Piano from './component/piano'
import './App.css'
import Container from './component/container'
import NoteCanvas from './canvas/noteCanvas'

function App() {
  return (
    <>
      <Container>
        <NoteCanvas />
        <Piano />
      </Container>
    </>
  )
}

export default App
