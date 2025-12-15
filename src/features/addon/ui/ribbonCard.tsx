import React from 'react'

import { SavedColors } from '@shared/constants'
import { TextWithFamily } from '@shared/ui/Typography'

import {
  CardBody,
  CardIcon,
  CardRibbon,
  CardWrapper,
  RibbonLabel,
} from '../styles'
import { CardProps } from '../types'

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
        <TextWithFamily
          style={{ height: '70px' }}
          $font="Nunito"
          fontWeight="800"
          fontSize="18px"
        >
          {title}
        </TextWithFamily>
        <TextWithFamily
          style={{ height: '70px' }}
          $font="Nunito"
          fontWeight="500"
          fontSize="14px"
        >
          {description}
        </TextWithFamily>
      </CardBody>

      <CardRibbon>
        <RibbonLabel>{number}</RibbonLabel>
      </CardRibbon>
    </CardWrapper>
  )
}

export { RibbonCard }
