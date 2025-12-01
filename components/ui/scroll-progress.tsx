'use client'

import * as React from 'react'
import { motion, SpringOptions, useScroll, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

export type ScrollProgressProps = {
  className?: string
  springOptions?: SpringOptions
  containerRef?: React.RefObject<HTMLDivElement>
}

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
}

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  })

  return (
    <motion.div
      className={cn('inset-x-0 top-0 h-1 origin-left', className)}
      style={{
        scaleX,
      }}
    />
  )
}
