import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

import { Container as ContainerS } from './Container'
import { TextResponsive, TextWithFamily } from './Typography/Typography'

interface IconWithTextProps {
  icon: IconType
  text?: string
  textRes?: string
  iconColor?: string
  textColor?: string
  font?: 'Roboto' | 'Nunito'
  handleClick?: () => void
  allowText?: boolean
  allowTextRes?: boolean
  iconSize?: number
  padding?: string
  $hoveractive?: 'false' | 'true'
  $border?: string
  fontSize?: string
  $isActiveIconBg?: boolean
  $iconContainerSize?: 'sm' | 'md' | 'lg'
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
}

const Container = styled.div<{ $hoveractive?: 'false' | 'true' }>`
  transition: transform 0.3s ease-in;
  &:hover {
    cursor: ${({ $hoveractive }) =>
      $hoveractive === 'true' ? 'pointer' : 'default'};
    transform: ${({ $hoveractive }) =>
      $hoveractive === 'true' ? 'scale(105%)' : 'scale(100%)'};
  }
`

const IconWithText = ({
  icon: Icon,
  text,
  textRes,
  iconColor = SavedColors.TextColor,
  textColor = SavedColors.DarkWhite,
  font = 'Roboto',
  handleClick = () => {},
  allowText = true,
  allowTextRes = true,
  iconSize = 20,
  padding = '10px',
  $hoveractive = 'true',
  fontSize = '18px',
  fontWeight = '300',
  $isActiveIconBg = true,
  $border,
  $iconContainerSize = 'md',
}: IconWithTextProps) => {
  const ContainerSize = $iconContainerSize === 'sm' ? '30px' : '45px'
  return (
    <Container $hoveractive={$hoveractive}>
      <Flex
        gap={10}
        align="center"
        style={{ padding }}
        onClick={handleClick}
      >
        <ContainerS
          h={ContainerSize}
          w={ContainerSize}
          justify="center"
          align="center"
          $borderRadius="50%"
          background={$isActiveIconBg ? SavedColors.PrimaryWhite : 'none'}
          border={$border}
        >
          <Icon
            color={iconColor}
            size={iconSize}
            style={{ transition: 'all 0.3s ease-in-out' }}
          />
        </ContainerS>

        {allowText && (
          <TextWithFamily
            $font={font}
            color={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {text}
          </TextWithFamily>
        )}
        {allowTextRes && (
          <TextResponsive
            $font={font}
            color={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {textRes}
          </TextResponsive>
        )}
      </Flex>
    </Container>
  )
}

export { IconWithText }
