import { ActionIcon, Flex } from '@mantine/core'
import { SavedColors } from '@shared/constants'
import { MdRemoveRedEye } from 'react-icons/md'
import styled from 'styled-components'
import { TextResponsive, TextWithFamily } from './Typography'
import { IconType } from 'react-icons'

interface ActionLayoutProps {
  IsButton?: boolean
  rotate?: number
  iconSize?: number
  buttonSize?: number | string
  title?: string,
  titleNormal?: string,
  description?: string,
  descriptionNormal?: string,
  justify?: 'flex-start' | 'center' | 'flex-end'
  align?: 'flex-start' | 'center' | 'flex-end'
  Icon: IconType | string,
  currentWidth?: string
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  textSize? : string,
  titleSize?: string,
  gap?:number
  descriptionSecond?: string
  descriptionThird?: string
  descriptionForth?: string
}

const ActionIconWrapper = styled.div<{ 
  $isButton: boolean; 
  $rotate: number;
  $buttonSize: string | number;
}>`
  && .mantine-ActionIcon-root {
    transform: rotate(${props => props.$rotate}deg);
    transition: all 0.2s ease;
    cursor: ${props => props.$isButton ? 'pointer' : 'default'};
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => typeof props.$buttonSize === 'string' ? props.$buttonSize : `${props.$buttonSize}px`};
    height: ${props => typeof props.$buttonSize === 'string' ? props.$buttonSize : `${props.$buttonSize}px`};
    background-color: ${SavedColors.Primaryblue} !important;

    &[data-disabled] {
      background-color: ${SavedColors.Primaryblue} !important;
      border: 2px solid transparent !important;
      opacity: 1 !important;
      cursor: default !important;
    }

    ${props => props.$isButton && `
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
  transform: rotate(${props => -props.$rotate}deg);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .icon-svg {
    transition: color 0.2s ease;
    color: ${SavedColors.DemWhite};
  }

`

const ActionLayout = ({ 
  IsButton = false, 
  rotate = 0, 
  iconSize = 30, 
  buttonSize = "65px", 
  justify = "flex-start",
  title,
  description,
  Icon,
  currentWidth = "48%",
  align = 'flex-start',
  textAlign = 'left',
  textSize = '18px',
  titleSize = '24px',
  gap = 3,
  titleNormal,
  descriptionNormal,
  descriptionSecond,
  descriptionThird,
  descriptionForth,

}: ActionLayoutProps) => {
  return (
    <Flex gap={gap} justify={justify} align={align} direction="column" w={{ base: '100%', lg: currentWidth }}>
      <ActionIconWrapper 
        $isButton={IsButton}
        $rotate={rotate}
        $buttonSize={buttonSize}
      >
        <ActionIcon 
          size={buttonSize}   
          disabled={!IsButton}
        >
          <IconContainer $rotate={rotate}>
            <Icon size={iconSize} className="icon-svg" />
          </IconContainer>
        </ActionIcon>
      </ActionIconWrapper>
      {title && description ?
      <>
      <TextResponsive textAlign={textAlign} font='Nunito' fontSize={titleSize} fontWeight="600">{title}</TextResponsive>
      <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize} >{description}</TextResponsive>
      {
        <>
        <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize} >{descriptionSecond}</TextResponsive>
        <br/>
        <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize} >{descriptionThird}</TextResponsive>
        <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize} >{descriptionForth}</TextResponsive>
        </>
        }
      </>
      : null}
      {titleNormal && descriptionNormal ?
      <>
      <TextWithFamily textAlign={textAlign} font='Nunito' fontSize={titleSize} fontWeight="600">{titleNormal}</TextWithFamily>
      <TextWithFamily textAlign={textAlign} font='Roboto' fontSize={textSize} >{descriptionNormal}</TextWithFamily>
      </>
      : null}
    </Flex>
  )
}

export default ActionLayout