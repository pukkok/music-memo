import Soundfont from 'soundfont-player'

class SoundManager {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.player = null
    this.activeNotes = {}
  }

  async loadInstrument(instrument = 'acoustic_grand_piano') {
    this.player = await Soundfont.instrument(this.audioContext, instrument)
  }

  playNote(note) {
    if (this.player && !this.activeNotes[note]) {
      this.activeNotes[note] = this.player.play(note)
    }
  }

  stopNote(note) {
    if (this.activeNotes[note]) {
      this.activeNotes[note].stop()
      delete this.activeNotes[note]
    }
  }
}

export default new SoundManager()
