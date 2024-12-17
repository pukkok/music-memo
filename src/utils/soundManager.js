import Soundfont from 'soundfont-player'

class SoundManager {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.player = null
    this.activeNotes = {}
    this.playingSequence = null
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

  playSequence(notes) {
    this.stopSequence() // 기존 재생 중단
  
    if (!Array.isArray(notes) || notes.length === 0) {
      console.warn('playSequence expects a non-empty array')
      return
    }
  
    this.playingSequence = notes.reduce((promise, { note, duration }) => {
      return promise.then(() => {
        return new Promise((resolve) => {
          this.playNote(note)
          setTimeout(() => { 
            this.stopNote(note)
            resolve()
          }, duration)
        })
      })
    }, Promise.resolve())
  }
  

  stopSequence() {
    if (this.playingSequence) {
      this.playingSequence = null
      Object.keys(this.activeNotes).forEach((note) => this.stopNote(note))
    }
  }
}

export default new SoundManager()
