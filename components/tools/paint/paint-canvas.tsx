'use client'

import type React from 'react'
import { useRef, useState, useEffect } from 'react'
import { CANVAS_PAINT_COLORS } from '@/lib/data'
import type { DrawingEvent } from '@/lib/types'
import { Button } from '@/components/ui/button'
import PaintCanvasHeader from '@/components/tools/paint/paint-canvas-header'
import PaintCanvasToolbar from '@/components/tools/paint/paint-canvas-toolbar'
import PaintCanvasPalette from '@/components/tools/paint/paint-canvas-palette'

export default function PaintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null) // outer overlay
  const canvasContainerRef = useRef<HTMLDivElement>(null) // inner drawing area

  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#000000')
  const [tool, setTool] = useState('brush')
  const [windowState, setWindowState] = useState<'normal' | 'minimized'>(
    'normal',
  )
  const [showNewCanvasButton, setShowNewCanvasButton] = useState(false)

  // Resize canvas to match container (and re-run on orientation / resize)
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current
      const container = canvasContainerRef.current
      if (!canvas || !container) return

      const context = canvas.getContext('2d')
      if (!context) return

      const rect = container.getBoundingClientRect()
      const scale = window.devicePixelRatio || 1

      // Set the internal pixel size
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale

      // Make drawing coordinates map 1:1 to CSS pixels
      context.setTransform(scale, 0, 0, scale, 0, 0)

      // Fill with white background
      context.fillStyle = '#FFFFFF'
      context.fillRect(0, 0, rect.width, rect.height)
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('orientationchange', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('orientationchange', resizeCanvas)
    }
  }, [])

  const getCoords = (e: DrawingEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const rect = canvas.getBoundingClientRect()
    let clientX: number
    let clientY: number

    if ('touches' in e) {
      const touch = e.touches[0] || e.changedTouches[0]
      if (!touch) return null
      clientX = touch.clientX
      clientY = touch.clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    return { x, y }
  }

  const performDraw = (x: number, y: number) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (context) {
      requestAnimationFrame(() => {
        context.lineTo(x, y)
        context.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color
        context.lineWidth = tool === 'eraser' ? 20 : 2
        context.lineCap = 'round'
        context.stroke()
      })
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const coords = getCoords(e)
    if (!coords) return

    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (context) {
      context.beginPath()
      context.moveTo(coords.x, coords.y)
      setIsDrawing(true)
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const coords = getCoords(e)
    if (!coords) return

    performDraw(coords.x, coords.y)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const coords = getCoords(e)
    if (!coords) return

    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (context) {
      context.beginPath()
      context.moveTo(coords.x, coords.y)
      setIsDrawing(true)
    }
  }

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    e.preventDefault()
    const coords = getCoords(e)
    if (!coords) return

    performDraw(coords.x, coords.y)
  }

  const minimizeWindow = () => {
    setWindowState((prevState) =>
      prevState === 'minimized' ? 'normal' : 'minimized',
    )
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.style.visibility =
        windowState === 'minimized' ? 'hidden' : 'visible'
    }
  }, [windowState])

  useEffect(() => {
    const container = containerRef.current
    let handleMaximize: () => void
    if (windowState === 'minimized' && container) {
      handleMaximize = () => {
        setWindowState('normal')
      }
      document.addEventListener('click', handleMaximize)
    }
    return () => {
      if (handleMaximize) {
        document.removeEventListener('click', handleMaximize)
      }
    }
  }, [windowState])

  const clearCanvas = () => {
    if (window.confirm('Are you sure you want to start new?')) {
      const canvas = canvasRef.current
      const container = canvasContainerRef.current
      if (canvas && container) {
        const context = canvas.getContext('2d')
        if (context) {
          const rect = container.getBoundingClientRect()
          context.fillStyle = '#FFFFFF'
          context.fillRect(0, 0, rect.width, rect.height)
        }
      }
    }
  }

  const closeWindow = () => {
    if (window.confirm('Are you sure you want to close?')) {
      if (containerRef.current) {
        containerRef.current.style.visibility = 'hidden'
        setShowNewCanvasButton(true)
      }
    }
  }

  const newCanvas = () => {
    if (containerRef.current) {
      containerRef.current.style.visibility = 'visible'
      setShowNewCanvasButton(false)
      const canvas = canvasRef.current
      const container = canvasContainerRef.current
      if (canvas && container) {
        const context = canvas.getContext('2d')
        if (context) {
          const rect = container.getBoundingClientRect()
          context.fillStyle = '#FFFFFF'
          context.fillRect(0, 0, rect.width, rect.height)
        }
      }
    }
  }

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      const message =
        'Your drawing will be lost. Are you sure you want to leave?'
      return message
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <>
      {showNewCanvasButton && (
        <Button
          className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform"
          onClick={newCanvas}
        >
          New Canvas
        </Button>
      )}

      <div
        ref={containerRef}
        className="fixed inset-0 z-40 flex items-center justify-center"
      >
        <div className="w-[90vw] max-w-[740px] rounded-2xl border border-accent-foreground/40 bg-card shadow-md ring-1 ring-muted/50 ring-inset">
          <PaintCanvasHeader
            onMinimize={minimizeWindow}
            onClose={closeWindow}
            onNew={clearCanvas}
          />
          <div className="flex">
            <PaintCanvasToolbar selectedTool={tool} onToolSelect={setTool} />

            {/* Drawing area adapts to viewport size and orientation */}
            <div
              ref={canvasContainerRef}
              className="h-[45vh] w-[90vw] max-w-[740px] touch-none overflow-hidden border-t border-accent-foreground/40 md:overflow-auto"
            >
              <canvas
                ref={canvasRef}
                className="block size-full touch-none"
                // Mouse Events (Desktop)
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                // Touch Events (Mobile/iPhone)
                onTouchStart={startDrawingTouch}
                onTouchMove={drawTouch}
                onTouchEnd={stopDrawing}
                onTouchCancel={stopDrawing}
              />
            </div>
          </div>
          <PaintCanvasPalette
            colors={CANVAS_PAINT_COLORS}
            selectedColor={color}
            onColorSelect={setColor}
          />
          <section className="rounded-b-2xl border-t border-accent-foreground/40 bg-card p-1.5 text-sm">
            For help, hit that help button above!
          </section>
        </div>
      </div>
    </>
  )
}
