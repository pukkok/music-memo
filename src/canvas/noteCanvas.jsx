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
  const [currentPage, setCurrentPage] = useState(0) // 현재 페이지
  const [totalPages, setTotalPages] = useState(1) // 전체 페이지 수
  const [lines, setLines] = useState(5) // 화면에 보이는 줄 개수

  useEffect(() => {
    // 화면 높이에 따라 줄 개수 계산
    const updateLines = () => {
      const CANVAS_HEIGHT = window.innerHeight - 300
      const calculatedLines = Math.floor(CANVAS_HEIGHT / NOTEBOOK_HEIGHT)
      setLines(calculatedLines > 0 ? calculatedLines : 5)
    }

    updateLines()
    window.addEventListener('resize', updateLines)
    return () => window.removeEventListener('resize', updateLines)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const CANVAS_WIDTH = 1240
    const CANVAS_HEIGHT = lines * NOTEBOOK_HEIGHT // 전체 높이
    const LINE_WIDTH = CANVAS_WIDTH

    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT

    // 캔버스 초기화
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // 공책 줄 그리기
    for (let i = 0; i < lines; i++) {
      const yPosition = i * NOTEBOOK_HEIGHT
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2
      ctx.strokeRect(0, yPosition, LINE_WIDTH, NOTEBOOK_HEIGHT)
    }

    // 페이지별 메모 데이터 계산
    const maxHeight = CANVAS_HEIGHT // 캔버스 높이 기준
    let xOffset = 10
    let yOffset = 0
    let pageCounter = 0 // 페이지 수 계산용
    let currentPageMemo = [] // 현재 페이지에 그릴 메모

    memo.forEach(({ note, duration }) => {
      const width = (duration / 1000) * 100 // 노트 너비
      if (xOffset + width + NOTE_SPACING > LINE_WIDTH) {
        xOffset = 10
        yOffset += NOTEBOOK_HEIGHT
      }

      // yOffset이 높이를 초과하면 다음 페이지로 이동
      if (yOffset >= maxHeight) {
        pageCounter++ // 다음 페이지로
        yOffset = 0
        xOffset = 10
      }

      if (pageCounter === currentPage) {
        currentPageMemo.push({ note, duration, xOffset, yOffset, width })
      }

      xOffset += width + NOTE_SPACING
    })

    setTotalPages(pageCounter + 1) // 전체 페이지 수 업데이트

    // 현재 페이지에 해당하는 메모 그리기
    currentPageMemo.forEach(({ note, duration, xOffset, yOffset, width }) => {
      const color = noteColors[tunes.indexOf(note) % noteColors.length]
      const label = `${koreanNames[tunes.indexOf(note)]}${note.split("").pop()}`

      ctx.fillStyle = color
      ctx.fillRect(xOffset, yOffset + LINE_PADDING, width, RECT_HEIGHT)

      ctx.fillStyle = 'black'
      ctx.font = '16px Arial'
      ctx.fillText(label, xOffset + 5, yOffset + LINE_PADDING + RECT_HEIGHT / 2 + 5)
    })
  }, [memo, currentPage, lines])

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          style={{ marginRight: '10px' }}
        >
          앞장
        </button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          style={{ marginLeft: '10px' }}
        >
          뒷장
        </button>
      </div>
    </div>
  )
}

export default NoteCanvas
