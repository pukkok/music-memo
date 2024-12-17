import { noteColors, LINE_PADDING, RECT_HEIGHT } from "../constants/canvasLayouts"
import { koreanNames, tunes } from "../constants/pianoItems"

// 메모 그리기
const drawNotes = (ctx, currentPageMemo) => {
  currentPageMemo.forEach(({ note, xOffset, yOffset, width }) => {
    const color = noteColors[tunes.indexOf(note) % noteColors.length]
    const label = `${koreanNames[tunes.indexOf(note)]}${note.split('').pop()}`

    ctx.fillStyle = color
    ctx.fillRect(xOffset, yOffset + LINE_PADDING, width, RECT_HEIGHT)

    ctx.fillStyle = 'black'
    ctx.font = '16px Arial'
    ctx.fillText(label, xOffset + 5, yOffset + LINE_PADDING + RECT_HEIGHT / 2 + 5)
  })
}

export default drawNotes