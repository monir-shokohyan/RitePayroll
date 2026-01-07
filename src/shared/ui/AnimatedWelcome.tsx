import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { SavedColors } from '@shared/constants'

interface DataPoint {
  value: number
  label: string
}

interface AnimatedChartProps {
  data?: DataPoint[]
  animationDuration?: number
  loopDelay?: number
}

interface BarProps {
  height: number
  animate: boolean
  delay: number
}

const growBar = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`

const ChartWrapper = styled.div`
  border-radius: 16px;
  position: absolute;
  width: 45%;
  height: 30%;
  top: 50%;
  left: 21%;
  transform: translateY(-95%);
`

const BarsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11%;
  height: 100%;
  width: 100%;
`

const Bar = styled.div<BarProps>`
  flex: 1;
  max-width: 80px;
  height: ${(props) => props.height}%;
  border-radius: 5px 5px 0px 0px;
  background: ${SavedColors.highlite};
  transform-origin: bottom;
  transform: scaleY(0);
  opacity: 0;
  position: relative;

  ${(props) =>
    props.animate &&
    css`
      animation: ${growBar} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: ${props.delay}s;
    `}
`
const AnimatedChartComponent: React.FC<AnimatedChartProps> = ({
  data = [
    { value: 45 },
    { value: 68 },
    { value: 52 },
    { value: 78 },
    { value: 88 },
  ],
  animationDuration = 3000,
  loopDelay = 2000,
}) => {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const totalAnimationTime = animationDuration + loopDelay

    const interval = setInterval(() => {
      setAnimate(false)

      setTimeout(() => {
        setAnimate(true)
      }, 100)
    }, totalAnimationTime)

    return () => clearInterval(interval)
  }, [animationDuration, loopDelay])

  return (
    <ChartWrapper>
      <BarsContainer>
        {data.map((item, index) => (
          <Bar
            key={`${item.value}-${animate}`}
            height={item.value}
            animate={animate}
            delay={index * 0.15}
          />
        ))}
      </BarsContainer>
    </ChartWrapper>
  )
}

export { AnimatedChartComponent }
