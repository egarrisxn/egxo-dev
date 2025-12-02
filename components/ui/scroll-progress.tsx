'use client'

import * as React from 'react'
import { motion, SpringOptions, useScroll, useSpring } from 'motion/react'
import { DEFAULT_SPRING_OPTIONS } from '@/lib/data'
import { cn } from '@/lib/utils'

export interface ScrollProgressProps {
  className?: string
  springOptions?: SpringOptions
  containerRef?: React.RefObject<HTMLDivElement>
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
