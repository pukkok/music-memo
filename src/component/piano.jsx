import {tunes} from '../constants/pianoItems'
import './styles/piano.css'

const Piano = () => {

  return <div className="notes">
    {tunes.map((note, idx) => {
      return <button key={idx} className={note.includes("#") ? "sharp" : ""}></button>
    })}
  </div>
}

export default Piano