import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

export const StyledCard = styled(Card)<CardProps & { onClick?: () => void }>`
  position: relative;
  border-radius: 20px;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  }
`

export const CardWrapper = styled.div`
  width: min(300px, 100%);
  height: 330px;
  margin: auto;
  background-color: #f4f5f2;
  text-align: center;
  border-top-left-radius: 4rem;
  border: 2px solid #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 30px;
    width: 120px;
    background-color: ${SavedColors.primaryBlue};
    top: 32px;
    right: -2.5px;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  }
`

export const CardBody = styled.div`
  padding: 2rem 1.5rem;
  max-width: 25ch;
  margin: auto;
`

export const CardIcon = styled.div`
  color: ${SavedColors.primaryBlue};
  margin-bottom: 1rem;
`

export const CardRibbon = styled.div`
  margin-top: 1.5rem;
  display: grid;
  place-items: center;
  height: 50px;
  background-color: ${SavedColors.primaryBlue};
  position: relative;
  width: 110%;
  left: -5%;
  top: 0px;
  border-radius: 0 0 2rem 2rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    aspect-ratio: 1/1;
    bottom: 100%;
    z-index: -2;
    background-color: #191c39;
  }

  &::before {
    left: 0;
    transform-origin: left bottom;
    transform: rotate(45deg);
  }

  &::after {
    right: 0;
    transform-origin: right bottom;
    transform: rotate(-45deg);
  }
`

export const RibbonLabel = styled.label`
  display: block;
  width: 84px;
  aspect-ratio: 1/1;
  background-color: #fff;
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 8px solid ${SavedColors.primaryBlue};
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 50%;
  }

  &::before {
    right: calc(100% + 4px);
    border-bottom-right-radius: 20px;
    box-shadow: 5px 5px 0 ${SavedColors.primaryBlue};
  }

  &::after {
    left: calc(100% + 4px);
    border-bottom-left-radius: 20px;
    box-shadow: -5px 5px 0 ${SavedColors.primaryBlue};
  }
`
