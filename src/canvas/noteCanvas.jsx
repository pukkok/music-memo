import { useEffect, useRef } from 'react'
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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const CANVAS_WIDTH = 1240
    const CANVAS_HEIGHT = 800
    const LINE_WIDTH = CANVAS_WIDTH // 공책 가로 길이

    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT

    // 캔버스 초기화
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    let xOffset = 0 // X 위치 (누적된 직사각형 너비)
    let yOffset = 0 // Y 위치 (줄 위치)

    memo.forEach(({ note, duration }) => {
      const color = noteColors[tunes.indexOf(note) % noteColors.length]
      const label = `${koreanNames[tunes.indexOf(note)]}4`
      const width = (duration / 1000) * 100 // 직사각형 너비 (1초 = 100px)

      // 다음 줄로 넘어가기
      if (xOffset + width + NOTE_SPACING > LINE_WIDTH) {
        xOffset = 0 // X 위치 초기화
        yOffset += NOTEBOOK_HEIGHT // 다음 줄로 이동
      }

      // 공책 테두리 그리기
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2
      ctx.strokeRect(0, yOffset, LINE_WIDTH, NOTEBOOK_HEIGHT)

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
  }, [memo])

  return <canvas ref={canvasRef}></canvas>
}

export default NoteCanvas
