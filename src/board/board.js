import { tunes } from "../pianoConstant"

// * 피아노 건반 만들기
const Board = document.createElement('div')
Board.className = "notes"
const pianoNotes = tunes.map(note => {
  const button = document.createElement('button')
  note.includes("#") ? button.className = "sharp" : button.className = ""
  return button
})
Board.append(...pianoNotes)

export default Board