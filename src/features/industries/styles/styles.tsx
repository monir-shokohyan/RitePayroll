import { Marquee, MarqueeProps } from '@gfazioli/mantine-marquee'
import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const StyledMarquee = styled(Marquee)<MarqueeProps>`
  width: 100%;`
export const StyledCard = styled(Card)<CardProps>`
  box-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.2),
    -2px -2px 8px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3),
    inset -2px -2px 4px rgba(0, 0, 0, 0.3);
`
