// import './styles/controls.css'
import TrafficLight from './trafficLight'

const LeftControls = ({ memo, pinsetIndex }) => {
  

  return (
    <div className="controls">
      <TrafficLight memo={memo} pinsetIndex={pinsetIndex}/>
    </div>
  )
}

export default LeftControls
{/* 🎁 */}