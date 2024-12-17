import { NOTEBOOK_HEIGHT, NOTE_SPACING } from '../constants/canvasLayouts'

// 메모 및 페이지 계산
const calculatePageMemo = (memo, currentPage, CANVAS_HEIGHT, LINE_WIDTH) => {
  let xOffset = 10
  let yOffset = 0
  let currentPageCounter = 0
  const currentPageMemo = []

  memo.forEach(({ note, duration }) => {
    const width = (duration / 1000) * 200

    if (xOffset + width + NOTE_SPACING > LINE_WIDTH) {
      xOffset = 10
      yOffset += NOTEBOOK_HEIGHT
    }

    if (yOffset >= CANVAS_HEIGHT) {
      currentPageCounter++
      yOffset = 0
      xOffset = 10
    }

    if (currentPageCounter === currentPage) {
      currentPageMemo.push({ note, xOffset, yOffset, width })
    }

    xOffset += width + NOTE_SPACING
  })

  return { currentPageMemo, totalPages: currentPageCounter + 1 }
}

export default calculatePageMemo