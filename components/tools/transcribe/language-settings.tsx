'use client'

import { Button } from '@/components/ui/button'

interface IconProps {
  className?: string
}

const XCloseIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

interface LanguageSettingsProps {
  selectedLanguages: string[]
  onLanguagesChange: (languages: string[]) => void
  onClose: () => void
}

const AVAILABLE_LANGUAGES = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
  { code: 'hi-IN', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
]

export default function LanguageSettings({
  selectedLanguages,
  onLanguagesChange,
  onClose,
}: LanguageSettingsProps) {
  const toggleLanguage = (code: string) => {
    if (selectedLanguages.includes(code)) {
      // Keep at least one language selected
      if (selectedLanguages.length > 1) {
        onLanguagesChange(selectedLanguages.filter((l) => l !== code))
      }
    } else {
      onLanguagesChange([code, ...selectedLanguages])
    }
  }

  return (
    <div className="sm:rounded-xl sm:border sm:border-border sm:bg-card sm:shadow-lg">
      <div className="container mx-auto p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Language Settings
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <XCloseIcon className="size-5" />
          </Button>
        </div>

        <div className="space-y-2">
          <p className="mb-3 text-muted-foreground">
            Primary language for recognition (first selected):
          </p>

          <div className="grid grid-cols-1 gap-2">
            {AVAILABLE_LANGUAGES.map((lang) => (
              <div
                key={lang.code}
                className={`flex cursor-pointer flex-col rounded-xl p-3 text-card-foreground shadow-sm transition-all ${
                  selectedLanguages.includes(lang.code)
                    ? 'border-accent bg-accent/10'
                    : 'bg-card hover:bg-muted/50'
                }`}
                onClick={() => toggleLanguage(lang.code)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium text-card-foreground">
                      {lang.name}
                    </span>
                  </div>
                  {selectedLanguages[0] === lang.code && (
                    <span className="rounded bg-accent px-2 py-1 text-xs text-accent-foreground">
                      Primary
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-muted-foreground">
            Note: The browser will use the primary language for recognition.
            Mixed language speech may be transcribed in the primary language
            script.
          </p>
        </div>
      </div>
    </div>
  )
}
