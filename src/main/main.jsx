import LeftControls from "./leftControls"
import Piano from "./piano"
import RightControls from "./rightControls"

const Main = ({pressed, setPressed, memo, setMemo, pinsetIndex, onReset, onDelete}) => {

  return (
    <main>
      <LeftControls memo={memo} pinsetIndex={pinsetIndex}/>
      <Piano pressed={pressed} setPressed={setPressed} setMemo={setMemo}/>
      <RightControls onReset={onReset} onDelete={onDelete}/>
    </main>
  )
}
export default Main