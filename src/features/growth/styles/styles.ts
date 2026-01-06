import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const StyledCard = styled(Card)<CardProps & { onClick?: () => void }>`
  position: relative;
  background: transparent;
  transition: all 0.3s ease;
  border: 1px solid lightgray;
  width: 20%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  min-width: 150px;
  padding: 0%;
`
