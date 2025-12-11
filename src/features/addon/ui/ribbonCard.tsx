import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

const CardWrapper = styled.div`
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

const CardBody = styled.div`
  padding: 2rem 1.5rem;
  max-width: 25ch;
  margin: auto;
`

const CardIcon = styled.div`
  color: ${SavedColors.primaryBlue};
  margin-bottom: 1rem;
`

const CardTitle = styled.p`
  font-weight: 800;
  color: #121513;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
  height: 60px;
`

const CardParagraph = styled.p`
  color: #303830;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 60px;
`

const CardRibbon = styled.div`
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

const RibbonLabel = styled.label`
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

interface CardProps {
  title: string
  description: string
  number: number
  iconColor?: string
  Icon: IconType
  IconSize?: number
}

const RibbonCard: React.FC<CardProps> = ({
  title,
  description,
  number,
  Icon,
  iconColor = SavedColors.primaryBlue,
  IconSize = 32,
}) => {
  return (
    <CardWrapper>
      <CardBody>
        <CardIcon style={{ color: iconColor }}>
          <Icon size={IconSize} />
        </CardIcon>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{description}</CardParagraph>
      </CardBody>

      <CardRibbon>
        <RibbonLabel>{number}</RibbonLabel>
      </CardRibbon>
    </CardWrapper>
  )
}

export { RibbonCard }
