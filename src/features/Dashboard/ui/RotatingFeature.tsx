import { useEffect, useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
import { TextResponsive } from '@shared/ui/Typography'

import {
  Bubble,
  Card,
  CardContent,
  Center,
  Connector,
  Container,
  ElectricPulse,
  ElectricTrail,
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
  const [pulseActive, setPulseActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true)
      setTimeout(() => setPulseActive(false), 2000)
    }, 5000)

    setPulseActive(true)
    setTimeout(() => setPulseActive(false), 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <RotatingBackground>
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <Connector
            key={angle}
            $angle={angle}
          >
            <ElectricTrail
              $active={pulseActive}
              $delay={index * 0.08}
            />
            <ElectricPulse
              $active={pulseActive}
              $delay={index * 0.08}
            />
          </Connector>
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
