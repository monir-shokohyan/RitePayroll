import { Button, Group, Paper, Text } from '@mantine/core'
import styled, { keyframes } from 'styled-components'

import { fadeIn, float, pulse, rotate } from '@shared/styles/animation'

import { ButtonType } from '../types'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f4f8 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const BackgroundCircle = styled.div<{
  top: string
  left: string
  size: string
  delay: string
}>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: rgba(21, 179, 224, 0.1);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: ${pulse} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
  z-index: 0;
`

export const ContentWrapper = styled(Paper)`
  max-width: 700px;
  width: 100%;
  padding: 3rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(1, 41, 112, 0.15);
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`

export const Number = styled.div<{ delay: string }>`
  font-family: 'Nunito', sans-serif;
  font-size: 8rem;
  font-weight: 800;
  color: #15b3e0;
  line-height: 1;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || '0s'};

  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`

export const SearchIcon = styled.div`
  font-size: 8rem;
  color: #012970;
  animation: ${rotate} 10s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`

export const Title = styled(Text)`
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #012970;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const Description = styled(Text)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #012970;
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1s ease-out 0.6s both;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`

export const ButtonGroup = styled(Group)`
  animation: ${fadeIn} 1s ease-out 0.8s both;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`

export const StyledButton = styled(Button)<ButtonType>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(21, 179, 224, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
  }
`
