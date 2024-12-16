// 음계 정보 배열
const items = [
  { color: "#F28B82", pitch: "C4", koreanName: "도", englishName: "Do" },
  { color: "#F28B82", pitch: "C#4", koreanName: "도#", englishName: "Do#" },
  { color: "#FBAF85", pitch: "D4", koreanName: "레", englishName: "Re" },
  { color: "#FBAF85", pitch: "D#4", koreanName: "레#", englishName: "Re#" },
  { color: "#F2D769", pitch: "E4", koreanName: "미", englishName: "Mi" },
  { color: "#A3D181", pitch: "F4", koreanName: "파", englishName: "Fa" },
  { color: "#A3D181", pitch: "F#4", koreanName: "파#", englishName: "Fa#" },
  { color: "#78C0E0", pitch: "G4", koreanName: "솔", englishName: "Sol" },
  { color: "#78C0E0", pitch: "G#4", koreanName: "솔#", englishName: "Sol#" },
  { color: "#93B0C3", pitch: "A4", koreanName: "라", englishName: "La" },
  { color: "#93B0C3", pitch: "A#4", koreanName: "라#", englishName: "La#" },
  { color: "#C8A2C8", pitch: "B4", koreanName: "시", englishName: "Si" },
  { color: "#F28B82", pitch: "C5", koreanName: "도", englishName: "Do" },
]

const Board = () => {
  const board = document.createElement('div')
  board.className = "notes"
  const pianoNotes = items.map(note => {
    const button = document.createElement('button')
    note.pitch.includes("#") ? button.className = "sharp" : button.className = ""
    return button
  })
  board.append(...pianoNotes)
  return board
}

const notes = Board()

export default notes