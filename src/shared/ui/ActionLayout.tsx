import { IconType } from 'react-icons'
import { ActionIcon, Flex } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

import { TextResponsive, TextWithFamily } from './Typography'

interface ActionLayoutProps {
  isButton?: boolean
  rotate?: number
  iconSize?: number
  buttonSize?: number | string
  title?: string
  titleNormal?: string
  description?: string
  descriptionNormal?: string
  justify?: 'flex-start' | 'center' | 'flex-end'
  align?: 'flex-start' | 'center' | 'flex-end'
  Icon: IconType | string
  currentWidth?: string
  $textalign?: 'left' | 'center' | 'right' | 'justify'
  textSize?: string
  titleSize?: string
  gap?: number
  descriptionSecond?: string
  descriptionThird?: string
  descriptionForth?: string
  handleClick?: () => void
  ariaLabel?: string
}

const ActionIconWrapper = styled.div<{
  $isButton: boolean
  $rotate: number
  $buttonSize: string | number
}>`
  && .mantine-ActionIcon-root {
    transform: rotate(${(props) => props.$rotate}deg);
    transition: all 0.2s ease;
    cursor: ${(props) => (props.$isButton ? 'pointer' : 'default')};
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) =>
      typeof props.$buttonSize === 'string'
        ? props.$buttonSize
        : `${props.$buttonSize}px`};
    height: ${(props) =>
      typeof props.$buttonSize === 'string'
        ? props.$buttonSize
        : `${props.$buttonSize}px`};
    background-color: ${SavedColors.Primaryblue} !important;

    &[data-disabled] {
      background-color: ${SavedColors.Primaryblue} !important;
      border: 2px solid transparent !important;
      opacity: 1 !important;
      cursor: default !important;
    }

    ${(props) =>
      props.$isButton &&
      `
      &:hover:not([data-disabled]) {
        background-color: transparent !important;
        border: 2px solid ${SavedColors.Primaryblue} !important;
        
        .icon-svg {
          color: ${SavedColors.Primaryblue} !important;
        }
      }
    `}
  }
`

const IconContainer = styled.div<{ $rotate: number }>`
  transform: rotate(${(props) => -props.$rotate}deg);
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-svg {
    transition: color 0.2s ease;
    color: ${SavedColors.DemWhite};
  }
`

const ActionLayout = ({
  isButton = false,
  rotate = 0,
  iconSize = 30,
  buttonSize = '65px',
  justify = 'flex-start',
  title,
  description,
  Icon,
  currentWidth = '48%',
  align = 'flex-start',
  $textalign = 'left',
  textSize = '18px',
  titleSize = '24px',
  gap = 3,
  titleNormal,
  descriptionNormal,
  descriptionSecond,
  descriptionThird,
  descriptionForth,
  handleClick = () => {},
  ariaLabel,
}: ActionLayoutProps) => {
  const titleId = title
    ? `title-${Math.random().toString(36).slice(2, 11)}`
    : undefined
  return (
    <Flex
      gap={gap}
      justify={justify}
      align={align}
      direction="column"
      w={{ base: '100%', lg: currentWidth }}
    >
      <ActionIconWrapper
        $isButton={isButton}
        $rotate={rotate}
        $buttonSize={buttonSize}
      >
        <ActionIcon
          size={buttonSize}
          disabled={!isButton}
          onClick={handleClick}
          aria-label={
            ariaLabel || (isButton && !title ? 'Action button' : undefined)
          }
          aria-labelledby={title && isButton ? titleId : undefined}
        >
          <IconContainer $rotate={rotate}>
            <Icon
              size={iconSize}
              className="icon-svg"
              aria-hidden="true"
            />{' '}
          </IconContainer>
        </ActionIcon>
      </ActionIconWrapper>
      {title ? (
        <>
          <TextResponsive
            id={titleId}
            $textalign={$textalign}
            $font="Nunito"
            fontSize={titleSize}
            fontWeight="600"
          >
            {title}
          </TextResponsive>
          <TextResponsive
            $textalign={$textalign}
            $font="Roboto"
            fontSize={textSize}
          >
            {description}
          </TextResponsive>
          {descriptionSecond && (
            <>
              <TextResponsive
                $textalign={$textalign}
                $font="Roboto"
                fontSize={textSize}
              >
                {descriptionSecond}
              </TextResponsive>
              <br />
              {descriptionThird && (
                <TextResponsive
                  $textalign={$textalign}
                  $font="Roboto"
                  fontSize={textSize}
                >
                  {descriptionThird}
                </TextResponsive>
              )}
              {descriptionForth && (
                <TextResponsive
                  $textalign={$textalign}
                  $font="Roboto"
                  fontSize={textSize}
                >
                  {descriptionForth}
                </TextResponsive>
              )}
            </>
          )}
        </>
      ) : null}
      {titleNormal && descriptionNormal ? (
        <>
          <TextWithFamily
            id={titleId}
            $textalign={$textalign}
            $font="Nunito"
            fontSize={titleSize}
            fontWeight="600"
          >
            {titleNormal}
          </TextWithFamily>
          <TextWithFamily
            $textalign={$textalign}
            $font="Roboto"
            fontSize={textSize}
          >
            {descriptionNormal}
          </TextWithFamily>
        </>
      ) : null}
    </Flex>
  )
}

export { ActionLayout }
