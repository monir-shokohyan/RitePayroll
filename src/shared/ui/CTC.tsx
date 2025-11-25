import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

interface CTCProps {
  text: string
  as?: 'span' | 'a'
  to?: string
  onClick?: () => void
}

const LinkStyle = styled(Link)`
  color: ${SavedColors.Primaryblue};
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.5;
  }
`

const SimpleColorText = styled.span`
  color: ${SavedColors.Primaryblue};
`

const CTC = ({ text, as = 'span', to }: CTCProps) => {
  if (as === 'a' && to) {
    return <LinkStyle to={to}>{text}</LinkStyle>
  }

  return <SimpleColorText>{text}</SimpleColorText>
}

export { CTC }
