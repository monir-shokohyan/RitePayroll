import React, { CSSProperties, ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface RadialHoverEffectProps {
  children: ReactNode
  color?: string
  opacity?: number
  duration?: number
  borderRadius?: string
  className?: string
  style?: CSSProperties
}

interface RippleState {
  x: number
  y: number
  size: number
  isActive: boolean
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const RippleCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transform-origin: center;
`

const RadialHoverEffect: React.FC<RadialHoverEffectProps> = ({
  children,
  color = 'rgba(59, 130, 246, 1)',
  opacity = 1,
  duration = 1.2,
  borderRadius = '50%',
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rippleState, setRippleState] = useState<RippleState>({
    x: 0,
    y: 0,
    size: 0,
    isActive: false,
  })

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const size = Math.max(rect.width, rect.height) * 2.5

    setRippleState({
      x,
      y,
      size,
      isActive: true,
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setRippleState((prev) => ({
      ...prev,
      x,
      y,
      isActive: false,
    }))
  }

  return (
    <Container
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={style}
    >
      <RippleCircle
        style={{
          left: rippleState.x,
          top: rippleState.y,
          width: rippleState.size,
          height: rippleState.size,
          backgroundColor: color,
          opacity,
          borderRadius,
        }}
        animate={{
          scale: rippleState.isActive ? 1 : 0,
          x: '-50%',
          y: '-50%',
        }}
        transition={{
          duration,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      {children}
    </Container>
  )
}

export { RadialHoverEffect }
