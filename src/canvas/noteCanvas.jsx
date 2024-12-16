import { useEffect, useRef } from "react"

const NoteCanvas = () => {
  const canvasRef = useRef()
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = 1240
    canvas.height = 800

    ctx.fillStyle = "pink"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
  }, [])

  return <canvas ref={canvasRef}></canvas>
}

export default NoteCanvas