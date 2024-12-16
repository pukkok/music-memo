const notes = [
  'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1',
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
  'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8'
]

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

const scoreTitles = [
  '네가있어행복해', 
  '나무의노래',
  '달팽이의하루',
]

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