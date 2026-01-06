import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const StyledCard = styled(Card)<CardProps>`
  position: relative;
  background: transparent;
  transition: all 0.3s ease;
  width: 20%;
  aspect-ratio: 1 / 1;
  min-width: 150px;
  padding: 1px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: lightgray;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
    transition: background 0.3s ease;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background: white;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
  }
`
