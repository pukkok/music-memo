import { useEffect, useRef } from 'react'
import { koreanNames, tunes } from '../constants/pianoItems'

const noteColors = [
  '#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ffcc', '#99ccff', '#cc99ff', '#f9b7ff',
]

const NoteCanvas = ({ memo }) => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 1240
    canvas.height = 800

    ctx.clearRect(0, 0, canvas.width, canvas.height) // 캔버스 초기화
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let xOffset = 0 // 누적된 X 좌표

    memo.forEach(({ note, duration }) => {
      const color = noteColors[tunes.indexOf(note) % noteColors.length]
      const label = `${koreanNames[tunes.indexOf(note)]}4`
      const width = (duration / 1000) * 100 // 1초 = 100px

      ctx.fillStyle = color
      ctx.fillRect(xOffset, 50, width, 50)
      ctx.fillStyle = 'black'
      ctx.fillText(label, xOffset + 5, 65)

      xOffset += width // 다음 노트의 시작 X 위치
    })
  }, [memo])

  return <canvas ref={canvasRef}></canvas>
}

export default NoteCanvas
