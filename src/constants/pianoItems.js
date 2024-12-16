const tunes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4',"A#4", "B4", "C5"]
const pithches = [3, 4, 5]
const koreanNames = ["도", "도#", "레", "레#", "미", "파", "파#", "솔", "솔#", "라", "라#", "시", "도"]

const defaultShorcut = {
  'A' : 'C4', 'W' : 'C#4', //도
  'S' : 'D4', 'E' : 'D#4', //레
  'D' : 'E4', //미
  'F' : 'F4', 'T' : 'F#4', //파
  'G' : 'G4', 'Y' : 'G#4', //솔 
  'H' : 'A4', 'U' : 'A#4', //라
  'J' : 'B4', //시
  'K' : 'C5', 'O' : 'C#5', //도
  'L' : 'D5', 'P' : 'D#5' //레
}

export { tunes, pithches, koreanNames, defaultShorcut }