import { Flex, Text, TextProps } from '@mantine/core';
import { SavedColors } from '@shared/constants';
import { IconType } from 'react-icons';
import TextWithFamily, { TextResponsive } from './Typography/Typography';
import styled from 'styled-components';
import {Container as ContainerS} from './Container';
interface IconWithTextProps {
  icon: IconType;
  text?: string;
  textRes?: string;
  iconColor?: string; 
  textColor?: string;
  font?: 'Barlow' | 'Roboto' | 'Nunito'
  handleClick?: () => void
  allowText?: boolean
  allowTextRes?: boolean
  iconSize?: number
  padding?: string
  hoverActive?: boolean
  fontSize?: string
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

}

const Container = styled.div<{hoverActive?:boolean}>`
transition: transform 0.3s ease-in;
&:hover{
    cursor: ${({hoverActive})=> hoverActive ? 'pointer' : 'default'};
    transform: ${({hoverActive})=> hoverActive ? 'scale(105%)' : 'scale(100%)'};
}
`

const IconWithText = ({ icon: Icon,
     text,
     textRes,
     iconColor = SavedColors.Primaryblue,
     textColor = SavedColors.DarkWhite,
     font = 'Roboto',
     handleClick = () => {} ,
    allowText = true,
    allowTextRes = true,
    iconSize = 20, 
    padding = '10px',
    hoverActive = true,
    fontSize = '16px',
    fontWeight = '400',
    }: IconWithTextProps) => {
        return (
            <Container hoverActive={hoverActive}>
            <Flex gap={10} align="center" style={{padding}} onClick={handleClick} >

              <ContainerS h='25px' w='25px' justify="center" align="center">
                <Icon color={iconColor} size={iconSize} style={{transition:'all 0.3s ease-in-out'}}/>
              </ContainerS>

            {
            allowText && <TextWithFamily font={font} color={textColor} fontSize={fontSize}>
                {text}
            </TextWithFamily>
            }
            {
            allowTextRes && <TextResponsive font={font} color={textColor} fontSize={fontSize} fontWeight={fontWeight} >
                {textRes}
            </TextResponsive>
            }
            </Flex>
            </Container>
  );
};

export default IconWithText;