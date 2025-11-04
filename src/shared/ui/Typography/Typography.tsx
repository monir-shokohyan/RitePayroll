import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { SavedColors } from '@shared/constants'

export interface StyledTextProps {
  $font?: 'Roboto' | 'Nunito'
  fontSize?: string
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
  color?: string
  $textalign?: 'left' | 'center' | 'right' | 'justify'
  responsive?: boolean
  lineHeight?: string
}

const textStyles = css<StyledTextProps>`
  font-family: ${({ $font }) => $font || 'Roboto'}, sans-serif;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || SavedColors.TextColor};
  text-align: ${({ $textalign }) => $textalign || 'left'};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`

const TextWithFamily = styled.div<StyledTextProps>`
  ${textStyles}
`
const TitleWithFamily = styled.h1<StyledTextProps>`
  ${textStyles}
  @media (max-width:1024px) {
    font-size: 24px;
  }
`

const LinkS = styled(Link)<StyledTextProps>`
  ${textStyles}
  cursor: pointer;

  &:hover {
    color: ${SavedColors.Primaryblue};
  }
`

const NavLinkS = styled(NavLink)<StyledTextProps>`
  ${textStyles}
  cursor: pointer;

  &:hover {
    color: ${SavedColors.Primaryblue};
  }

  &.active {
    font-weight: ${({ fontWeight }) =>
      fontWeight ? Math.min(Number.parseInt(fontWeight) + 100, 900) : '500'};
  }
`

const TextResponsive = styled.h1<StyledTextProps>`
  ${textStyles}

  ${({ fontSize = '16px', responsive = true }) => {
    if (!responsive) return ''

    const baseSize = Number.parseFloat(fontSize)
    const unit = fontSize.replace(baseSize.toString(), '')

    return `
      // Mobile (base)
      font-size: ${baseSize * 0.8}${unit};
      
      // Small tablets
      @media (min-width: 480px) {
        font-size: ${baseSize * 0.85}${unit};
      }
      
      // Tablets
      @media (min-width: 768px) {
        font-size: ${baseSize * 0.9}${unit};
      }
      
      // Small desktop
      @media (min-width: 1024px) {
        font-size: ${baseSize * 0.95}${unit};
      }
      
      // Large desktop
      @media (min-width: 1440px) {
        font-size: ${baseSize}${unit};
      }
    `
  }}
`

export { LinkS, NavLinkS, TextResponsive, TextWithFamily, TitleWithFamily }
export default TextWithFamily
