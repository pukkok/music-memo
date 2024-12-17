import { useEffect } from "react"
import soundManager from "../utils/soundManager"
import './styles/trafficLight.css'

const TrafficLight = ({memo, pinsetIndex}) => {
  useEffect(() => {
    soundManager.loadInstrument()
  }, [])

  return (
    <div className="traffic-light-wrapper">
      <div className="traffic-light">
        <button onClick={() => soundManager.stopSequence()}></button>
        <button onClick={() => soundManager.playSequence(memo, pinsetIndex)}></button>
      </div>
    </div>
  )
}

export default TrafficLight