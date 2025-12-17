import { useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
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
      </RotatingBackground>

      <Center
        onClick={() => setLarge((prev) => !prev)}
        onTouchStart={() => setLarge((prev) => !prev)}
      >
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
              <Icon>{IconSymbol && <IconSymbol />}</Icon>
              <TextResponsive
                fontSize="10px"
                $textalign="center"
                fontWeight="600"
                style={{ whiteSpace: 'pre-line', lineHeight: '1.4' }}
              >
                {item.name}
              </TextResponsive>
            </Card>
          </Bubble>
        )
      })}
    </Container>
  )
}
