import React, { useEffect, useMemo, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

interface HeroWavesProps {
  colors?: string[]
  speed?: 'slow' | 'normal' | 'fast'
  waveOpacity?: number
  waveWidth?: number
  blur?: number
  amplitude?: number
  className?: string
}

const lightColors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#d8b4fe', '#e9d5ff']

export const HeroWaves: React.FC<HeroWavesProps> = ({
  colors = lightColors,
  speed = 'normal',
  waveOpacity = 0.5,
  waveWidth = 14,
  blur = 12,
  amplitude = 140,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const lastFrameTimeRef = useRef<number>(0)

  const speedValue = useMemo(() => {
    switch (speed) {
      case 'slow':
        return 0.0008
      case 'fast':
        return 0.0025
      default:
        return 0.0015
    }
  }, [speed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
    })
    if (!ctx) return

    const noise3D = createNoise3D()
    let nt = 0
    const TARGET_FPS = 30
    const FRAME_INTERVAL = 1000 / TARGET_FPS

    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const render = (currentTime: number) => {
      if (currentTime - lastFrameTimeRef.current < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(render)
        return
      }
      lastFrameTimeRef.current = currentTime

      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)
      nt += speedValue

      colors.forEach((color, i) => {
        const phaseOffset = i * 1.8
        const frequency = 500 + i * 120
        const yOffset = h / 2 + (i - colors.length / 2) * 40

        ctx.beginPath()
        ctx.lineWidth = waveWidth + i * 3
        ctx.strokeStyle = color
        ctx.globalAlpha = waveOpacity

        const step = 8
        let first = true

        for (let x = -100; x < w + 100; x += step) {
          const noiseValue = noise3D(x / frequency, phaseOffset, nt)
          const y = yOffset + noiseValue * amplitude

          if (first) {
            ctx.moveTo(x, y)
            first = false
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(render)
    }

    animationRef.current = requestAnimationFrame(render)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resize)
    }
  }, [colors, speedValue, waveOpacity, waveWidth, amplitude])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        filter: `blur(${blur}px)`,
        zIndex: -1,
        opacity: 0.7,
      }}
      className={className}
    />
  )
}
