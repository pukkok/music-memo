import { useEffect, useRef, useState } from 'react'
import { NOTEBOOK_HEIGHT } from '../constants/canvasLayouts'
import drawNotebookLines from '../utils/drawNoteLines'
import drawNotes from '../utils/drawNotes'
import calculatePageMemo from '../utils/calculatePageMemo'

const NoteCanvas = ({ memo }) => {
  const canvasRef = useRef()
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [lines, setLines] = useState(5)

  useEffect(() => {
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
    const CANVAS_HEIGHT = lines * NOTEBOOK_HEIGHT

    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT

    // 캔버스 초기화
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // 공책 줄 그리기
    drawNotebookLines(ctx, lines, CANVAS_WIDTH)

    // 메모 및 페이지 계산
    const { currentPageMemo, totalPages } = calculatePageMemo(memo, currentPage, CANVAS_HEIGHT, CANVAS_WIDTH)
    setTotalPages(totalPages)

    // 메모 그리기
    drawNotes(ctx, currentPageMemo)
  }, [memo, currentPage, lines])

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} style={{ marginRight: '10px' }}>
          앞장
        </button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} style={{ marginLeft: '10px' }}>
          뒷장
        </button>
      </div>
    </div>
  )
}

export default NoteCanvas
