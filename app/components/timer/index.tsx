'use client'

import React, {useEffect, useState} from 'react'
import styles from './timer.module.css'

const TimeOfDay = () => {
  return (
    <div className={styles.time} aria-label='Time of day'>
      <span className={styles.name}>Orlando, FL : </span>
      <TimeDisplay />
    </div>
  )
}

export default TimeOfDay

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div suppressHydrationWarning>
      {time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'America/New_York',
      })}
    </div>
  )
}
