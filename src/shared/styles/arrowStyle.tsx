import styled from 'styled-components'

export const HoveredArrow = styled.div`
  transition: transform 0.2s ease-in-out;
  z-index: 9999;

  &:hover {
    transform: translateY(10px);
  }
`
