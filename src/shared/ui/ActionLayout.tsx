import { ActionIcon, Flex } from '@mantine/core'
import { SavedColors } from '@shared/constants'
import { MdRemoveRedEye } from 'react-icons/md'
import styled from 'styled-components'
import { TextResponsive } from './Typography'
import { IconType } from 'react-icons'

interface ActionLayoutProps {
  IsButton?: boolean
  rotate?: number
  iconSize?: number
  buttonSize?: number | string
  title: string,
  description: string,
  justify?: 'flex-start' | 'center' | 'flex-end'
  Icon: IconType
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
  Icon
}: ActionLayoutProps) => {
  return (
    <Flex gap={3} justify={justify} direction="column" w={{ base: '100%', lg: '48%' }}>
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
      <TextResponsive font='Nunito' fontSize='24px' fontWeight="600">{title}</TextResponsive>
      <TextResponsive font='Roboto' fontSize='12px'>{description}</TextResponsive>
    </Flex>
  )
}

export default ActionLayout