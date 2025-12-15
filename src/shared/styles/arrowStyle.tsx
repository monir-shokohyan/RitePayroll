import styled from 'styled-components'

export const HoveredArrow = styled.div`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(10px);
  }
`
