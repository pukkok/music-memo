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

  // TODO : 처음 화면을 불러올때 화면 비율에 맞춰 노트 줄 수를 결정한다.
  useEffect(() => {
    const updateLines = () => {
      const CANVAS_HEIGHT = window.innerHeight - 400
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

    const CANVAS_WIDTH = window.innerWidth > 988 ? 988 : window.innerWidth
    const CANVAS_HEIGHT = lines * NOTEBOOK_HEIGHT

    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT

    // * 캔버스 초기화
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // * 공책 줄 그리기
    drawNotebookLines(ctx, lines, CANVAS_WIDTH)

    // * 메모 및 페이지 계산
    const { currentPageMemo, totalPages } = calculatePageMemo(memo, currentPage, CANVAS_HEIGHT, CANVAS_WIDTH)
    setTotalPages(totalPages)

    // * 메모 그리기(계이름)
    drawNotes(ctx, currentPageMemo)
  }, [memo, currentPage, lines])

  // TODO : 토탈페이지가 늘어난다 = 다음페이지가 생겼다.
  // * 토탈페이지가 증가하면 현재페이지를 다음페이지로 이동한다.
  useEffect(() => { 
    setCurrentPage(totalPages-1)
  }, [totalPages])

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div style={{ textAlign: 'center', marginTop: '5px' }}>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} style={{ marginRight: '10px' }}>
          ◀️
        </button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} style={{ marginLeft: '10px' }}>
        ▶️
        </button>
      </div>
    </div>
  )
}

export default NoteCanvas
