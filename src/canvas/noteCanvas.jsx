import { useEffect, useRef, useState } from 'react'
import { koreanNames, tunes } from '../constants/pianoItems'

const noteColors = [
  '#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ffcc', '#99ccff', '#cc99ff', '#f9b7ff',
]

const NOTEBOOK_HEIGHT = 100 // 공책 한 줄의 높이
const RECT_HEIGHT = 60 // 직사각형 높이
const LINE_PADDING = 20 // 세로 중앙정렬 기준
const NOTE_SPACING = 5 // 노트와 노트 사이 간격

const NoteCanvas = ({ memo }) => {
  const canvasRef = useRef()
  const [lines, setLines] = useState(5) // 동적으로 계산된 줄 개수

  useEffect(() => {
    const updateLines = () => {
      const CANVAS_HEIGHT = window.innerHeight - 300 // 캔버스 높이 계산
      const calculatedLines = Math.floor(CANVAS_HEIGHT / NOTEBOOK_HEIGHT) // 줄 개수 계산
      setLines(calculatedLines > 0 ? calculatedLines : 5) // 최소 5줄
    }

    updateLines() // 초기 줄 계산
    window.addEventListener('resize', updateLines) // 화면 리사이즈 이벤트에 반응

    return () => window.removeEventListener('resize', updateLines) // 이벤트 정리
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const CANVAS_WIDTH = 1240
    const CANVAS_HEIGHT = lines * NOTEBOOK_HEIGHT // 줄 개수에 맞춘 캔버스 높이
    const LINE_WIDTH = CANVAS_WIDTH // 공책 가로 길이

    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT

    // 캔버스 초기화
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // 동적으로 계산된 줄 그리기
    for (let i = 0; i < lines; i++) {
      const yPosition = i * NOTEBOOK_HEIGHT
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2
      ctx.strokeRect(0, yPosition, LINE_WIDTH, NOTEBOOK_HEIGHT)
    }

    let xOffset = 10 // X 위치 (누적된 직사각형 너비)
    let yOffset = 0 // Y 위치 (줄 위치)

    memo.forEach(({ note, duration }) => {
      const color = noteColors[tunes.indexOf(note) % noteColors.length]
      const label = `${koreanNames[tunes.indexOf(note)]}${note.split("").pop()}`
      const width = (duration / 1000) * 100 // 직사각형 너비 (1초 = 100px)

      // 다음 줄로 넘어가기
      if (xOffset + width + NOTE_SPACING > LINE_WIDTH) {
        xOffset = 10 // X 위치 초기화
        yOffset += NOTEBOOK_HEIGHT // 다음 줄로 이동
      }

      // 직사각형 그리기
      ctx.fillStyle = color
      ctx.fillRect(xOffset, yOffset + LINE_PADDING, width, RECT_HEIGHT)

      // 텍스트 그리기
      ctx.fillStyle = 'black'
      ctx.font = '16px Arial'
      ctx.fillText(label, xOffset + 5, yOffset + LINE_PADDING + RECT_HEIGHT / 2 + 5)

      // X 위치 갱신 (간격 추가)
      xOffset += width + NOTE_SPACING
    })
  }, [memo, lines])

  return <canvas ref={canvasRef}></canvas>
}

export default NoteCanvas
