import { Flex } from '@mantine/core';
import { SavedColors } from '@shared/constants';
import { IconType } from 'react-icons';
import TextWithFamily from './Typography/Typography';
import styled from 'styled-components';
import {Container as ContainerS} from './Container';
interface IconWithTextProps {
  icon: IconType;
  text?: string;
  iconColor?: string; 
  textColor?: string;
  font?: 'Barlow' | 'Roboto' | 'Nunito'
  handleClick?: () => void
  allowText?: boolean
  iconSize?: number
  padding?: string
  hoverActive?: boolean
}

const Container = styled.div<{hoverActive?:boolean}>`
cursor: pointer;
transition: transform 0.3s ease-in;
&:hover{
    transform: ${({hoverActive})=> hoverActive ? 'scale(105%)' : 'scale(100%)'};
}
`

const IconWithText = ({ icon: Icon,
     text,
     iconColor = SavedColors.Primaryblue,
     textColor = SavedColors.DarkWhite,
     font = 'Roboto',
     handleClick = () => {} ,
    allowText = true,
    iconSize = 20, 
    padding = '10px',
    hoverActive = true
    }: IconWithTextProps) => {
        return (
            <Container hoverActive={hoverActive}>
            <Flex gap={10} align="start" style={{padding}} onClick={handleClick}>

              <ContainerS h='25px' w='25px' justify="center" align="center">
                <Icon color={iconColor} size={iconSize} />
              </ContainerS>

            {
            allowText && <TextWithFamily font={font} color={textColor}>
                {text}
            </TextWithFamily>
            }
            </Flex>
            </Container>
  );
};

export default IconWithText;