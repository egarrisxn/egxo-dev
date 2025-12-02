'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import * as Tone from 'tone'
import { SYNTH_KEY_MAP } from '@/lib/data'
import SynthLabeledSlider from '@/components/tools/synth/synth-labeled-slider'
import SynthWaveformVisualizer from '@/components/tools/synth/synth-waveform-visualizer'
import SynthKeyboard from '@/components/tools/synth/synth-keyboard'
import SynthNoteInfo from '@/components/tools/synth/synth-note-info'
import SynthPitchShift from '@/components/tools/synth/synth-pitch-shift'
import SynthAudioVisualizer from '@/components/tools/synth/synth-audio-visualizer'

export class SynthEngine {
  synth: Tone.PolySynth
  filter: Tone.Filter
  delay: Tone.FeedbackDelay
  reverb: Tone.Reverb
  tremolo: Tone.Tremolo
  bitCrusher: Tone.BitCrusher
  distortion: Tone.Distortion
  pitchShift: Tone.PitchShift
  output: Tone.Gain

  constructor() {
    this.output = new Tone.Gain(1).toDestination()

    this.filter = new Tone.Filter({
      type: 'lowpass',
      frequency: 1000,
      rolloff: -12,
    })

    this.delay = new Tone.FeedbackDelay({
      delayTime: 0.25,
      feedback: 0.3,
      wet: 0.2,
    })

    this.reverb = new Tone.Reverb({
      decay: 2,
      wet: 0.2,
    })

    this.tremolo = new Tone.Tremolo({
      frequency: 2,
      depth: 0.5,
      wet: 0,
    }).start()

    this.bitCrusher = new Tone.BitCrusher(8)
    this.bitCrusher.wet.value = 0

    this.distortion = new Tone.Distortion({
      distortion: 0.5,
      wet: 0,
    })

    this.pitchShift = new Tone.PitchShift({
      pitch: 0,
      windowSize: 0.1,
      delayTime: 0,
      feedback: 0,
    })

    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: 'triangle',
      },
      envelope: {
        attack: 0.05,
        decay: 0.3,
        sustain: 0.4,
        release: 0.8,
      },
    }).chain(
      this.filter,
      this.delay,
      this.reverb,
      this.tremolo,
      this.bitCrusher,
      this.distortion,
      this.pitchShift,
      this.output,
    )
  }

  connect(destination: Tone.ToneAudioNode) {
    this.output.connect(destination)
  }

  setFilterFrequency(freq: number) {
    this.filter.frequency.value = freq
  }

  setDelayTime(time: number) {
    this.delay.delayTime.value = time
  }

  setReverbDecay(decay: number) {
    this.reverb.decay = decay
  }

  setTremoloDepth(depth: number) {
    this.tremolo.wet.value = depth
  }

  setBitCrusherDepth(depth: number) {
    this.bitCrusher.wet.value = depth
  }

  setDistortionDepth(depth: number) {
    this.distortion.wet.value = depth
  }

  setPitchShift(pitch: number) {
    this.pitchShift.pitch = pitch
  }

  dispose() {
    this.synth.dispose()
    this.filter.dispose()
    this.delay.dispose()
    this.reverb.dispose()
    this.tremolo.dispose()
    this.bitCrusher.dispose()
    this.distortion.dispose()
    this.pitchShift.dispose()
    this.output.dispose()
  }
}

export default function SynthPlayer() {
  const synthRef = useRef<SynthEngine | null>(null)
  const [analyser, setAnalyser] = useState<Tone.Analyser | null>(null)

  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [activeNotes, setActiveNotes] = useState<string[]>([])
  const [resetKey, setResetKey] = useState(0)

  const [filterValue, setFilterValue] = useState(0)
  const [delayValue, setDelayValue] = useState(0)
  const [reverbValue, setReverbValue] = useState(0)
  const [tremoloValue, setTremoloValue] = useState(0)
  const [bitCrusherValue, setBitCrusherValue] = useState(0)
  const [distortionValue, setDistortionValue] = useState(0)

  useEffect(() => {
    // Instantiate the heavy objects
    const newSynth = new SynthEngine()
    const newAnalyser = new Tone.Analyser('waveform', 128)

    newSynth.connect(newAnalyser)
    synthRef.current = newSynth

    const timer = setTimeout(() => {
      setAnalyser(newAnalyser)
    }, 0)

    return () => {
      clearTimeout(timer)
      newSynth.dispose()
      newAnalyser.dispose()
    }
  }, [])

  const handleNoteOn = useCallback((note: string) => {
    if (synthRef.current) {
      synthRef.current.synth.triggerAttack(note)
      setActiveNotes((prev) => Array.from(new Set([...prev, note])))
      setResetKey((prevKey) => prevKey + 1)
    }
  }, [])

  const handleNoteOff = useCallback((note: string) => {
    if (synthRef.current) {
      synthRef.current.synth.triggerRelease(note)
      setActiveNotes((prev) => prev.filter((n) => n !== note))
      setResetKey((prevKey) => prevKey + 1)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!synthRef.current || activeKeys.has(e.key.toLowerCase())) return

      const note = SYNTH_KEY_MAP[e.key.toLowerCase()]
      if (note) {
        synthRef.current.synth.triggerAttack(note)
        setActiveKeys((prev) => new Set(prev).add(e.key.toLowerCase()))
        setActiveNotes((prev) => Array.from(new Set([...prev, note])))
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!synthRef.current) return
      const note = SYNTH_KEY_MAP[e.key.toLowerCase()]
      if (note) {
        synthRef.current.synth.triggerRelease(note)
        setActiveKeys((prev) => {
          const newSet = new Set(prev)
          newSet.delete(e.key.toLowerCase())
          return newSet
        })
        setActiveNotes((prev) => prev.filter((n) => n !== note))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [activeKeys])

  const handleFilterFrequency = (value: number) => {
    if (synthRef.current) {
      synthRef.current.setFilterFrequency(value * 10000)
      setFilterValue(value)
    }
  }

  const handleDelayTime = (value: number) => {
    if (synthRef.current) {
      synthRef.current.setDelayTime(value)
      setDelayValue(value)
    }
  }

  const handleReverbDecay = (value: number) => {
    if (synthRef.current) {
      synthRef.current.setReverbDecay(value * 10)
      setReverbValue(value)
    }
  }

  const handleTremoloDepth = (value: number) => {
    if (synthRef.current) {
      synthRef.current.setTremoloDepth(value)
      setTremoloValue(value)
    }
  }

  const handleBitCrusherDepth = (value: number) => {
    if (synthRef.current) {
      synthRef.current.setBitCrusherDepth(value)
      setBitCrusherValue(value)
    }
  }

  const handleDistortionDepth = (value: number) => {
    if (synthRef.current) {
      synthRef.current.setDistortionDepth(value)
      setDistortionValue(value)
    }
  }

  const handlePitchShift = useCallback((pitch: number) => {
    if (synthRef.current) {
      synthRef.current.setPitchShift(pitch)
    }
  }, [])

  // If analyser is not yet set in state, show loading
  // if (!analyser) return <div>Loading Audio Engine...</div>;

  return (
    <div className="w-[375px] sm:w-[500px] sm:rounded-xl sm:border sm:border-border sm:bg-card sm:p-6 sm:shadow-lg md:w-[800px]">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1 h-[100px]">
          <SynthWaveformVisualizer analyser={analyser} />
        </div>
        <div className="col-span-1 h-[100px]">
          <SynthNoteInfo activeNotes={activeNotes} />
        </div>
      </div>
      <div className="grid grid-cols-4 items-start gap-2 md:gap-4">
        <div className="col-span-1 flex items-center justify-center">
          <SynthPitchShift onChange={handlePitchShift} />
        </div>
        <div className="col-span-3 mt-2 space-y-6">
          <div className="grid grid-cols-3 items-center gap-2 px-2 md:gap-4 md:px-4">
            <SynthLabeledSlider
              label="Filter"
              value={filterValue}
              onChange={handleFilterFrequency}
            />
            <SynthLabeledSlider
              label="Delay"
              value={delayValue}
              onChange={handleDelayTime}
            />
            <SynthLabeledSlider
              label="Reverb"
              value={reverbValue}
              onChange={handleReverbDecay}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2 px-2 md:gap-4 md:px-4">
            <SynthLabeledSlider
              label="Tremolo"
              value={tremoloValue}
              onChange={handleTremoloDepth}
            />
            <SynthLabeledSlider
              label="BitCrush"
              value={bitCrusherValue}
              onChange={handleBitCrusherDepth}
            />
            <SynthLabeledSlider
              label="Distort"
              value={distortionValue}
              onChange={handleDistortionDepth}
            />
          </div>
        </div>
      </div>

      <div className="mb-6 flex size-full items-center justify-center overflow-hidden rounded-sm border border-gray-200 bg-white">
        <SynthAudioVisualizer activeNotes={activeNotes} resetKey={resetKey} />
      </div>

      <SynthKeyboard
        activeKeys={activeKeys}
        onNoteOn={handleNoteOn}
        onNoteOff={handleNoteOff}
      />
    </div>
  )
}
