import PinsetCarButtons from './pinsetCarButtons'
import TrafficLight from './trafficLight'
import './styles/leftControls.css'

const LeftControls = ({ memo, pinsetIndex }) => {
  

  return (
    <div className="left-controls">
      <TrafficLight memo={memo} pinsetIndex={pinsetIndex}/>
      <PinsetCarButtons />
    </div>
  )
}

export default LeftControls
{/* 🎁 */}