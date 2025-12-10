import { ReactNode } from 'react'
import { Flex, FlexProps } from '@mantine/core'
import styled, { css } from 'styled-components'

import { VerticalLine } from '@features/app-layout/styles'
import { SavedColors } from '@shared/constants'

import { TextResponsive } from './Typography'

const COLOR_TOP = '#FFFFFF'
const COLOR_BOTTOM = '#DFEDEE'

type GradientDirection = 'top-to-bottom' | 'bottom-to-top'

interface GradientFlexProps {
  gradientDirection?: GradientDirection
}

export const GradientFlex = styled(Flex)<GradientFlexProps & FlexProps>`
  padding-top: 130px;
  background: ${({ gradientDirection = 'top-to-bottom' }) =>
    gradientDirection === 'top-to-bottom'
      ? css`
          linear-gradient(to bottom, ${COLOR_TOP}, ${COLOR_BOTTOM});
        `
      : css`
          linear-gradient(to top, ${COLOR_TOP}, ${COLOR_BOTTOM});
        `};
`

const GradientContainer = ({
  children,
  direction = 'top-to-bottom',
  desTitle = '',
  title = '',
}: {
  children: ReactNode
  direction: GradientDirection
  desTitle: string
  title: string
}) => {
  return (
    <GradientFlex
      gradientDirection={direction}
      direction="column"
    >
      <Flex
        direction="column"
        align="center"
        style={{ width: '100vw' }}
      >
        <TextResponsive
          color={SavedColors.TextColorGreen}
          fontSize="40px"
          fontWeight="600"
          $font="Tangerine"
          $textalign="center"
        >
          {desTitle}
        </TextResponsive>
        <TextResponsive
          color={SavedColors.TextColor}
          fontSize="33px"
          fontWeight="600"
          $textalign="center"
        >
          {title}
        </TextResponsive>
        <VerticalLine />
      </Flex>
      {children}
    </GradientFlex>
  )
}

export { GradientContainer }
