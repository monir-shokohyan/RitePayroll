import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { SavedColors } from '@shared/constants';

interface StyledTextProps {
  font?: 'Barlow' | 'Roboto' | 'Nunito';
  fontSize?: string;
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  responsive?: boolean;
  lineHeight?: string;
}


const textStyles = css<StyledTextProps>`
  font-family: ${({ font }) => font || 'Roboto'}, sans-serif;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || SavedColors.TextColor};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  text-decoration: none;

`;

const TextWithFamily = styled.div<StyledTextProps>`
  ${textStyles}
`;
const TitleWithFamily = styled.h1<StyledTextProps>`
  ${textStyles}
  @media (max-width:1024px){
    font-size: 24px;
  }
`;


const LinkS = styled(Link)<StyledTextProps>`
  ${textStyles}
  cursor: pointer;

  &:hover {
    color: ${SavedColors.Primaryblue};
  }
`;

const NavLinkS = styled(NavLink)<StyledTextProps>`
  ${textStyles}
  cursor: pointer;

  &:hover {
    color: ${SavedColors.Primaryblue};
  }

  &.active {
    font-weight: ${({ fontWeight }) => (fontWeight ? Math.min(parseInt(fontWeight) + 100, 900) : '500')};
  }
`;


const TextResponsive = styled.h1<StyledTextProps>`
  ${textStyles}
  
  ${({ fontSize = '16px', responsive = true }) => {
    if (!responsive) return '';
    
    const baseSize = parseFloat(fontSize);
    const unit = fontSize.replace(baseSize.toString(), '');
    
    return `
      // Mobile (base)
      font-size: ${baseSize * 0.9}${unit};
      
      // Small tablets
      @media (min-width: 480px) {
        font-size: ${baseSize}${unit};
      }
      
      // Tablets
      @media (min-width: 768px) {
        font-size: ${baseSize * 1.1}${unit};
      }
      
      // Small desktop
      @media (min-width: 1024px) {
        font-size: ${baseSize * 1.25}${unit};
      }
      
      // Large desktop
      @media (min-width: 1440px) {
        font-size: ${baseSize * 1.5}${unit};
      }
    `;
  }}
`;



export {TextResponsive, TitleWithFamily, TextWithFamily, LinkS, NavLinkS };
export default TextWithFamily;