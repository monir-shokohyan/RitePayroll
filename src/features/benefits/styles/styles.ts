import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const StyledCard = styled(Card)<CardProps>`
  transition: all 0.3s ease;
  width: 20%;
  aspect-ratio: 1 / 1;
  min-width: 150px;
  padding: 1px;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
`
