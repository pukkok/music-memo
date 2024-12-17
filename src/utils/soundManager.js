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

  async playSequence(notes) {
    this.shouldStop = false // 정지 플래그 초기화

    for (const { note, duration } of notes) {
      if (this.shouldStop) break // 정지 버튼이 눌리면 중단
      this.playNote(note)

      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          this.stopNote(note)
          resolve()
        }, duration)

        // 정지 요청 시 타이머 중단
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
