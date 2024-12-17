import LeftControls from "./leftControls"
import Piano from "./piano"
import RightControls from "./rightControls"
import './styles/main.css';

const Main = ({pressed, setPressed, memo, setMemo, pinsetIndex, onReset, onDelete}) => {

  return (
    <main>
      <Piano pressed={pressed} setPressed={setPressed} setMemo={setMemo}/>
      <LeftControls memo={memo} pinsetIndex={pinsetIndex}/>
      <RightControls onReset={onReset} onDelete={onDelete}/>
    </main>
  )
}
export default Main