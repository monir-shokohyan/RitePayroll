import { Button, ButtonProps } from '@mantine/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { fadeIn } from '@shared/styles/animation'
import { TextWithFamily } from '@shared/ui/Typography'

import { BubbleProps } from '../types'

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
  ButtonProps & { onClick: () => void }
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
const Bubble = styled(motion.div)<BubbleProps & { $size?: number }>`
  position: absolute;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => `${$size}rem` || '7rem'};
  height: ${({ $size }) => `${$size}rem` || '7rem'};
  flex-direction: column;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transform: ${({ rotate }) => `rotate(${rotate})`};
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
`

export {
  Bubble,
  Container,
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
}
