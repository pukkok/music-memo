import { useState } from 'react'
import './styles/pinsetCarButtons.css'

const PinsetCarButtons = () => {

  const arrows = ["⬆️", "⬇️", "⬅️", "➡️"]
  const [isActive, setIsActive] = useState(false)
  const openArrow = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='pinset-car'>
      {isActive && arrows.map(arrow => {
        return <button key={arrow}>{arrow}</button>
      })}
      <span className={isActive ? "active" : ""} onClick={openArrow}>🚗</span>
    </div>
  )
}

export default PinsetCarButtons