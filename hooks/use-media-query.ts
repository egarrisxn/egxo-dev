import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string) {
  const subscribe = (callback: () => void) => {
    if (typeof window === 'undefined') {
      return () => {}
    }

    const media = window.matchMedia(query)

    const handler = () => {
      callback()
    }

    media.addEventListener('change', handler)

    return () => {
      media.removeEventListener('change', handler)
    }
  }

  const getSnapshot = () => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia(query).matches
  }

  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
