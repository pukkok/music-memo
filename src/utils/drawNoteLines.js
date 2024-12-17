import { NOTEBOOK_HEIGHT } from "../constants/canvasLayouts"

// 공책 줄 그리기
const drawNotebookLines = (ctx, lines, CANVAS_WIDTH) => {
  for (let i = 0; i < lines; i++) {
    const yPosition = i * NOTEBOOK_HEIGHT
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.strokeRect(0, yPosition, CANVAS_WIDTH, NOTEBOOK_HEIGHT)
  }
}

export default drawNotebookLines