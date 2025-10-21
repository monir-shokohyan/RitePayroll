import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { SavedColors } from '@shared/constants';

interface StyledTextProps {
  font?: 'Barlow' | 'Roboto' | 'Nunito';
  fontSize?: string;
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
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

export { TextWithFamily, LinkS, NavLinkS };
export default TextWithFamily;