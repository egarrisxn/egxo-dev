'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import type {
  Transcript,
  ISpeechRecognition,
  SpeechRecognitionConstructor,
  SpeechRecognitionEvent,
  SpeechRecognitionErrorEvent,
} from '@/lib/types'
import { Button } from '@/components/ui/button'
import { MicIcon, MicOffIcon, SettingsIcon } from '@/components/icons'
import LanguageSettings from '@/components/tools/transcribe/language-settings'

export default function TranscribeLive() {
  const [isListening, setIsListening] = useState(false)
  const [transcripts, setTranscripts] = useState<Transcript[]>([])
  const [currentTranscript, setCurrentTranscript] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    'en-US',
    'hi-IN',
  ])
  const [error, setError] = useState<string | null>(null)

  const recognitionRef = useRef<ISpeechRecognition | null>(null)
  const transcriptContainerRef = useRef<HTMLDivElement>(null)
  const isListeningRef = useRef(false) // tracks desired listening state

  // Keep ref in sync with state
  useEffect(() => {
    isListeningRef.current = isListening
  }, [isListening])

  // Initialize SpeechRecognition once on mount (and when languages change)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const SpeechRecognitionCtor: SpeechRecognitionConstructor | undefined =
      // Some browsers expose `SpeechRecognition`, some `webkitSpeechRecognition`
      (
        window as typeof window & {
          webkitSpeechRecognition?: SpeechRecognitionConstructor
          SpeechRecognition?: SpeechRecognitionConstructor
        }
      ).SpeechRecognition ??
      (
        window as typeof window & {
          webkitSpeechRecognition?: SpeechRecognitionConstructor
        }
      ).webkitSpeechRecognition

    if (!SpeechRecognitionCtor) {
      const nav = navigator as Navigator & { maxTouchPoints?: number }

      const isIOS =
        /iPad|iPhone|iPod/.test(nav.userAgent) ||
        (nav.platform === 'MacIntel' && (nav.maxTouchPoints ?? 0) > 1)

      setTimeout(() => {
        setError(
          isIOS
            ? "Speech recognition isn't available in iOS browsers yet. Try this app on a desktop browser (Chrome or Edge) for live transcription."
            : 'Speech recognition is not supported in this browser. Please try Chrome or Edge on desktop.',
        )
      }, 0)

      return
    }

    const recognition = new SpeechRecognitionCtor()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = selectedLanguages[0] || 'en-US' // Use the primary selected language

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = ''
      let finalTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results.item(i)
        const transcript = result[0].transcript

        if (result.isFinal) {
          finalTranscript += transcript + ' '
        } else {
          interimTranscript += transcript
        }
      }

      if (finalTranscript) {
        const newTranscript: Transcript = {
          id: Date.now().toString(),
          text: finalTranscript.trim(),
          timestamp: Date.now(),
          isFinal: true,
        }
        setTranscripts((prev) => [...prev, newTranscript])
        setCurrentTranscript('')
      } else {
        setCurrentTranscript(interimTranscript)
      }
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error)

      // Ignore benign / expected errors
      if (event.error === 'no-speech' || event.error === 'aborted') {
        return
      }

      setError(`Error: ${event.error}`)
      setIsListening(false)
      isListeningRef.current = false
    }

    recognition.onend = () => {
      // Auto-restart if we *want* to be listening
      if (isListeningRef.current) {
        try {
          recognition.start()
        } catch (e) {
          console.error('Error restarting recognition:', e)
        }
      }
    }

    recognitionRef.current = recognition

    return () => {
      try {
        recognition.stop()
      } catch {
        // ignore
      }
      recognitionRef.current = null
    }
  }, [selectedLanguages])

  // Keep lang in sync if languages change while recognition exists
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = selectedLanguages[0] || 'en-US'
    }
  }, [selectedLanguages])

  // Auto-scroll transcripts
  useEffect(() => {
    if (transcriptContainerRef.current) {
      transcriptContainerRef.current.scrollTop =
        transcriptContainerRef.current.scrollHeight
    }
  }, [transcripts, currentTranscript])

  const toggleListening = () => {
    if (!recognitionRef.current) {
      setError('Speech recognition not initialized')
      return
    }

    if (isListening) {
      // STOP LISTENING, but keep existing text
      try {
        recognitionRef.current.stop()
      } catch (e) {
        console.error('Error stopping recognition:', e)
      }
      isListeningRef.current = false
      setIsListening(false)
    } else {
      // START LISTENING; do NOT clear history here
      setError(null)
      setCurrentTranscript('')

      try {
        recognitionRef.current.start()
        isListeningRef.current = true
        setIsListening(true)
      } catch (e) {
        console.error('Error starting recognition:', e)
        setError('Unable to start speech recognition. Please try again.')
        isListeningRef.current = false
        setIsListening(false)
      }
    }
  }

  const clearTranscripts = () => {
    setTranscripts([])
    setCurrentTranscript('')
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <header className="container mx-auto flex items-center justify-center">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="cursor-pointer text-foreground select-none"
        >
          <div className="inline-flex items-center justify-center overflow-hidden">
            <SettingsIcon />
          </div>
        </button>
      </header>

      {showSettings && (
        <LanguageSettings
          selectedLanguages={selectedLanguages}
          onLanguagesChange={setSelectedLanguages}
          onClose={() => setShowSettings(false)}
        />
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <div
          ref={transcriptContainerRef}
          className="flex-1 space-y-4 overflow-y-auto px-4 py-6"
        >
          {transcripts.length === 0 && !currentTranscript && !isListening && (
            <div className="flex h-full items-center justify-center">
              <div className="space-y-2 text-center">
                <div className="text-lg text-muted-foreground">
                  Tap the microphone to start
                </div>
                <div className="text-sm text-muted-foreground">
                  Speak in English, Hindi, or mix both languages..
                </div>
              </div>
            </div>
          )}

          {transcripts.map((transcript) => (
            <div
              key={transcript.id}
              className="flex flex-col gap-6 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm"
            >
              <p className="text-lg leading-relaxed text-balance text-card-foreground">
                {transcript.text}
              </p>
            </div>
          ))}

          {currentTranscript && (
            <div className="flex flex-col gap-6 rounded-xl border-2 border-accent/30 bg-muted/50 p-4 text-card-foreground shadow-sm">
              <p className="text-lg leading-relaxed text-balance text-muted-foreground">
                {currentTranscript}
              </p>
            </div>
          )}

          {isListening && !currentTranscript && transcripts.length === 0 && (
            <div className="flex items-center justify-center py-8">
              <div className="space-y-2 text-center">
                <div className="flex justify-center">
                  <div className="animate-pulse">
                    <MicIcon className="size-8 text-accent" />
                  </div>
                </div>
                <p className="text-muted-foreground">Listening...</p>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="px-4 py-3">
            <p className="text-center text-sm text-destructive">{error}</p>
          </div>
        )}

        <div className="p-4">
          <div className="container mx-auto max-w-md space-y-3">
            <Button
              onClick={toggleListening}
              size="lg"
              className={cn(
                'h-16 w-full text-lg font-medium transition-all',
                isListening
                  ? 'bg-destructive text-foreground hover:bg-destructive/90'
                  : 'bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              {isListening ? (
                <>
                  <MicOffIcon className="mr-2 size-6" />
                  Stop Recording
                </>
              ) : (
                <>
                  <MicIcon className="mr-2 size-6" />
                  Start Recording
                </>
              )}
            </Button>

            {transcripts.length > 0 && (
              <Button
                onClick={clearTranscripts}
                variant="outline"
                size="sm"
                className="w-full bg-transparent"
              >
                Clear Transcripts
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
