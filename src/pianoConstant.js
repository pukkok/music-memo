const tunes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A',"A#", "B", "C"]
const pithches = [1, 2, 3, 4, 5, 6, 7]
const koreanNames = ["도", "도#", "레", "레#", "미", "파", "파#", "솔", "솔#", "라", "라#", "시", "도"]

const defaultShorcut = {
  'C4' : 'A', 'C#4' : 'W', //도
  'D4' : 'S', 'D#4' : 'E', //레
  'E4' : 'D', //미
  'F4' : 'F', 'F#4' : 'T', //파
  'G4' : 'G', 'G#4' : 'Y', //솔 
  'A4' : 'H', 'A#4' : 'U', //라
  'B4' : 'J', //시
  'C5' : 'K', 'C#5' : 'O', //도
  'D5' : 'L', 'D#5' : 'P' //레
}

const allInstruments = [
  "accordion", "acoustic_bass", "acoustic_grand_piano", "acoustic_guitar_nylon", "acoustic_guitar_steel",
  "agogo", "alto_sax", "applause", "bagpipe", "banjo",
  "baritone_sax", "bassoon", "bird_tweet", "blown_bottle", "brass_section",
  "breath_noise", "bright_acoustic_piano", "celesta", "cello", "choir_aahs",
  "church_organ", "clarinet", "clavinet", "contrabass", "distortion_guitar", 
  "drawbar_organ", "dulcimer", "electric_bass_finger", "electric_bass_pick", "electric_grand_piano", 
  "electric_guitar_clean", "electric_guitar_jazz", "electric_guitar_muted", "electric_piano_1", "electric_piano_2", 
  "english_horn", "fiddle", "flute", "french_horn", "fretless_bass", "fx_1_rain", 
  "fx_2_soundtrack", "fx_3_crystal", "fx_4_atmosphere", "fx_5_brightness", "fx_6_goblins", 
  "fx_7_echoes", "fx_8_scifi", "glockenspiel", "guitar_fret_noise", "guitar_harmonics", 
  "gunshot", "harmonica", "harpsichord", "helicopter", "honkytonk_piano", "kalimba", 
  "koto", "lead_1_square", "lead_2_sawtooth", "lead_3_calliope", "lead_4_chiff", 
  "lead_5_charang", "lead_6_voice", "lead_7_fifths", "lead_8_bass__lead", "marimba", 
  "melodic_tom", "music_box", "muted_trumpet", "oboe", "ocarina", "orchestra_hit", "orchestral_harp", "overdriven_guitar", 
  "pad_1_new_age", "pad_2_warm", "pad_3_polysynth", "pad_4_choir", "pad_5_bowed", "pad_6_metallic", "pad_7_halo", "pad_8_sweep", 
  "pan_flute", "percussive_organ", "piccolo", "pizzicato_strings", "recorder", "reed_organ", "reverse_cymbal", "rock_organ", "seashore", "shakuhachi", "shamisen", "shanai", "sitar", 
  "slap_bass_1", "slap_bass_2", "soprano_sax", "steel_drums", 
  "string_ensemble_1", "string_ensemble_2", "synth_bass_1", "synth_bass_2", "synth_brass_1", "synth_brass_2", 
  "synth_choir", "synth_drum", "synth_strings_1", "synth_strings_2", "taiko_drum", 
  "tango_accordion", "telephone_ring", "tenor_sax", "timpani", "tinkle_bell", "tremolo_strings", 
  "trombone", "trumpet", "tuba", "tubular_bells", "vibraphone", "viola", 
  "violin", "voice_oohs", "whistle", "woodblock", "xylophone"
]

export { tunes }

// 음계 정보 배열
// const notes = [
//   { color: "#F28B82", pitch: "C4", koreanName: "도", englishName: "Do" },
//   { color: "#FBAF85", pitch: "D4", koreanName: "레", englishName: "Re" },
//   { color: "#F2D769", pitch: "E4", koreanName: "미", englishName: "Mi" },
//   { color: "#A3D181", pitch: "F4", koreanName: "파", englishName: "Fa" },
//   { color: "#78C0E0", pitch: "G4", koreanName: "솔", englishName: "Sol" },
//   { color: "#93B0C3", pitch: "A4", koreanName: "라", englishName: "La" },
//   { color: "#C8A2C8", pitch: "B4", koreanName: "시", englishName: "Si" },
//   { color: "#F28B82", pitch: "C5", koreanName: "도", englishName: "Do" },
// ]
