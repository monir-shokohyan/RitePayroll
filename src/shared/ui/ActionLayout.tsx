import { ActionIcon, Flex } from '@mantine/core';
import { SavedColors } from '@shared/constants';
import { MdRemoveRedEye } from 'react-icons/md';
import styled from 'styled-components';
import { TextResponsive, TextWithFamily } from './Typography';
import { IconType } from 'react-icons';

interface ActionLayoutProps {
  IsButton?: boolean;
  rotate?: number;
  iconSize?: number;
  buttonSize?: number | string;
  title?: string;
  titleNormal?: string;
  description?: string;
  descriptionNormal?: string;
  justify?: 'flex-start' | 'center' | 'flex-end';
  align?: 'flex-start' | 'center' | 'flex-end';
  Icon: IconType | string;
  currentWidth?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textSize?: string;
  titleSize?: string;
  gap?: number;
  descriptionSecond?: string;
  descriptionThird?: string;
  descriptionForth?: string;
  handleClick?: () => void;
  ariaLabel?: string; // New prop for accessible name
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
`;

const IconContainer = styled.div<{ $rotate: number }>`
  transform: rotate(${props => -props.$rotate}deg);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .icon-svg {
    transition: color 0.2s ease;
    color: ${SavedColors.DemWhite};
  }
`;

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
  handleClick,
  ariaLabel, // Use new prop
}: ActionLayoutProps) => {
  // Generate a unique ID for aria-labelledby if title is used
  const titleId = title ? `title-${Math.random().toString(36).substr(2, 9)}` : undefined;

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
          onClick={handleClick}
          aria-label={ariaLabel || (IsButton && !title ? 'Action button' : undefined)} // Fallback accessible name
          aria-labelledby={title && IsButton ? titleId : undefined} // Link to title if available
        >
          <IconContainer $rotate={rotate}>
            <Icon size={iconSize} className="icon-svg" aria-hidden="true" /> {/* Icon is decorative */}
          </IconContainer>
        </ActionIcon>
      </ActionIconWrapper>
      {title && description ? (
        <>
          <TextResponsive 
            id={titleId} // Assign ID for aria-labelledby
            textAlign={textAlign} 
            font='Nunito' 
            fontSize={titleSize} 
            fontWeight="600"
          >
            {title}
          </TextResponsive>
          <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize}>
            {description}
          </TextResponsive>
          {descriptionSecond && (
            <>
              <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize}>
                {descriptionSecond}
              </TextResponsive>
              <br />
              {descriptionThird && (
                <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize}>
                  {descriptionThird}
                </TextResponsive>
              )}
              {descriptionForth && (
                <TextResponsive textAlign={textAlign} font='Roboto' fontSize={textSize}>
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
            id={titleId} // Assign ID for aria-labelledby
            textAlign={textAlign} 
            font='Nunito' 
            fontSize={titleSize} 
            fontWeight="600"
          >
            {titleNormal}
          </TextWithFamily>
          <TextWithFamily textAlign={textAlign} font='Roboto' fontSize={textSize}>
            {descriptionNormal}
          </TextWithFamily>
        </>
      ) : null}
    </Flex>
  );
};

export default ActionLayout;