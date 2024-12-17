import Soundfont from 'soundfont-player'

class SoundManager {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.player = null
    this.activeNotes = {}
    this.shouldStop = false
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

  async playSequence(notes, startIndex = 0) {
    this.stopSequence() // 기존 재생 중단
    this.shouldStop = false // 중단 플래그 초기화
  
    for (let i = startIndex; i < notes.length; i++) {
      if (this.shouldStop) break // 정지 플래그 확인
      const { note, duration } = notes[i]
      this.playNote(note)
  
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          this.stopNote(note)
          resolve()
        }, duration)
  
        if (this.shouldStop) {
          clearTimeout(timeout)
          this.stopNote(note)
          resolve()
        }
      })
    }
  }  

  stopSequence() {
    this.shouldStop = true // 재생 중단 플래그 활성화
    Object.keys(this.activeNotes).forEach((note) => this.stopNote(note)) // 모든 재생 중인 노트 중단
  }
}

export default new SoundManager()
