import { useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
import { counterSpin } from '@shared/styles/animation'
import { TextResponsive } from '@shared/ui/Typography'

import {
  Bubble,
  Card,
  Center,
  Connector,
  Container,
  Icon,
  RotatingBackground,
  SegmentedRing,
} from '../styles'

// Create a wrapper for the card content that counter-rotates
const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${counterSpin} 60s linear infinite;
`

export function RotatingFeaturesWheel({
  pageInfo,
}: {
  pageInfo?: TotalDataItem
}) {
  const [large, setLarge] = useState(true)
  return (
    <Container>
      <RotatingBackground>
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <Connector
            key={angle}
            $angle={angle}
          />
        ))}

        <SegmentedRing viewBox="0 0 440 440">
          <circle
            cx="220"
            cy="220"
            r="180"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <circle
            cx="220"
            cy="220"
            r="180"
            fill="none"
            stroke={SavedColors.TextColorGreen}
            strokeWidth="2"
            strokeDasharray="4 4"
            transform="rotate(-30 220 220)"
          />
        </SegmentedRing>

        {pageInfo?.features.map((item, i) => {
          const angle = i * 60
          const IconSymbol = item.icon
          return (
            <Bubble
              key={item.name}
              $angle={angle}
              $large={large}
            >
              <Card $large={large}>
                <CardContent>
                  <Icon>{IconSymbol && <IconSymbol />}</Icon>
                  <TextResponsive
                    fontSize="10px"
                    $textalign="center"
                    fontWeight="600"
                    style={{ whiteSpace: 'pre-line', lineHeight: '1.4' }}
                  >
                    {item.name}
                  </TextResponsive>
                </CardContent>
              </Card>
            </Bubble>
          )
        })}
      </RotatingBackground>

      <Center onClick={() => setLarge((prev) => !prev)}>
        <Icon>
          <BsFillGrid3X3GapFill
            size={32}
            color={SavedColors.TextColorGreen}
          />
        </Icon>
        <TextResponsive
          fontSize="14px"
          $textalign="center"
          fontWeight="700"
        >
          Core
        </TextResponsive>
        <TextResponsive
          fontSize="14px"
          $textalign="center"
          fontWeight="700"
        >
          Highlights
        </TextResponsive>
      </Center>
    </Container>
  )
}
