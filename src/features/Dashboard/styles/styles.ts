import { Button, ButtonProps, PolymorphicComponentProps } from '@mantine/core'
import styled, { keyframes } from 'styled-components'

import { SavedColors } from '@shared/constants'
import { fadeIn } from '@shared/styles/animation'
import { TextWithFamily } from '@shared/ui/Typography'

const WelcomeText = styled(TextWithFamily)`
  animation: ${fadeIn} 1s ease-out 0.8s both;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`
const WelcomeTitle = styled(TextWithFamily)`
  animation: ${fadeIn} 1s ease-out 0.5s both;
  font-size: 3.2rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`

const HoveredButtonWithoutBorder = styled(Button)<
  PolymorphicComponentProps<'button', ButtonProps>
>`
  animation: ${fadeIn} 1s ease-out 0.8s both;

  &:hover {
    color: ${SavedColors.Primaryblue};
    opacity: 50% !important;
    background-color: transparent;
    transition: all 0.3s ease-in;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`
const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

// Responsive container using vmin for perfect scaling
const Container = styled.div`
  position: relative;
  width: min(90vw, 90vh, 520px);
  height: min(90vw, 90vh, 520px);
  max-width: 520px;
  max-height: 520px;
  aspect-ratio: 1 / 1;
  margin: 40px auto;

  @media (max-width: 480px) {
    margin: 20px auto;
  }
`

const RotatingBackground = styled.div`
  position: absolute;
  inset: 0;
  animation: ${spin} 60s linear infinite;
`
const Icon = styled.div`
  color: ${SavedColors.TextColorGreen};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32%;
  height: 32%;
  min-width: 100px;
  min-height: 100px;
  background: white;
  border-radius: 50%;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.3),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #111;
  padding: 16px;
  ${Icon} svg {
    width: clamp(16px, 6vw, 32px);
    height: clamp(16px, 6vw, 32px);
  }
`

// Responsive connector lines
const Connector = styled.div<{ $angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15%;
  height: 2px;
  background: #e5e7eb;
  transform: rotate(${(p) => p.$angle}deg) translateX(100%);
  transform-origin: left center;

  @media (max-width: 480px) {
    height: 1.5px;
  }
`

// Responsive SVG ring
const SegmentedRing = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  pointer-events: none;
`

// Bubbles scale with container
const Bubble = styled.div<{ $angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28%;
  height: 28%;
  min-width: 100px;
  min-height: 100px;
  margin: -14% 0 0 -14%;
  transform: rotate(${(p) => p.$angle}deg) translateX(120%)
    rotate(-${(p) => p.$angle}deg);
  transform-origin: center;

  @media (max-width: 640px) {
    width: 30%;
    height: 30%;
  }

  @media (max-width: 480px) {
    width: 30%;
    height: 30%;
  }
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.3),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }

  ${Icon} svg {
    width: clamp(16px, 6vw, 32px);
    height: clamp(16px, 6vw, 32px);
  }
`

export {
  Bubble,
  Card,
  Center,
  Connector,
  Container,
  HoveredButtonWithoutBorder,
  Icon,
  RotatingBackground,
  SegmentedRing,
  WelcomeText,
  WelcomeTitle,
}
