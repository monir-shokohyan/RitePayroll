import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import {
  FaBoxOpen,
  FaCashRegister,
  FaChartBar,
  FaDollarSign,
  FaHeart,
  FaUtensils,
} from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

import { SavedColors } from '@shared/constants'
import { TextResponsive, TextWithFamily } from '@shared/ui/Typography'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

// Responsive container using vmin for perfect scaling
const Container = styled.div`
  position: relative;
  width: min(90vw, 90vh, 520px);
  height: min(90vw, 90vh, 520px);
  max-width: 520px;
  max-height: 520px;
  aspect-ratio: 1 / 1;
  margin: 40px auto;

  @media (max-width: 480px) {
    margin: 20px auto;
  }
`

const RotatingBackground = styled.div`
  position: absolute;
  inset: 0;
  animation: ${spin} 60s linear infinite;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32%;
  height: 32%;
  min-width: 100px;
  min-height: 100px;
  background: white;
  border-radius: 50%;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.3),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #111;
  padding: 16px;
`

const Icon = styled.div`
  color: ${SavedColors.TextColorGreen};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// Responsive connector lines
const Connector = styled.div<{ $angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15%;
  height: 2px;
  background: #e5e7eb;
  transform: rotate(${(p) => p.$angle}deg) translateX(100%);
  transform-origin: left center;

  @media (max-width: 480px) {
    height: 1.5px;
  }
`

// Responsive SVG ring
const SegmentedRing = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  pointer-events: none;
`

// Bubbles scale with container
const Bubble = styled.div<{ $angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28%;
  height: 28%;
  min-width: 100px;
  min-height: 100px;
  margin: -14% 0 0 -14%;
  transform: rotate(${(p) => p.$angle}deg) translateX(120%)
    rotate(-${(p) => p.$angle}deg);
  transform-origin: center;

  @media (max-width: 640px) {
    width: 30%;
    height: 30%;
  }

  @media (max-width: 480px) {
    width: 30%;
    height: 30%;
  }
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.3),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }

  ${Icon} svg {
    width: clamp(16px, 6vw, 32px);
    height: clamp(16px, 6vw, 32px);
  }
`

const features = [
  { icon: <FaCashRegister />, label: 'Touch Screen\nPOS Billing' },
  { icon: <FaUtensils />, label: 'Kitchen & Bar Order\nAutomation' },
  { icon: <FaBoxOpen />, label: 'Inventory & Recipe\nCost Control' },
  {
    icon: <FaHeart />,
    label: 'Loyalty, Reservations &\nEvent Management',
  },
  {
    icon: <FaDollarSign />,
    label: 'Multi-Outlet & Multi-\nCurrency Support',
  },
  {
    icon: <FaChartBar />,
    label: 'Complete Accounting &\nFinancial Reports',
  },
]

export function RotatingFeaturesWheel() {
  return (
    <Container>
      {/* Rotating background layer */}
      <RotatingBackground>
        {/* Connector lines */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <Connector
            key={angle}
            $angle={angle}
          />
        ))}

        {/* Green segmented ring */}
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
            strokeDasharray="20 40 10"
            transform="rotate(-30 220 220)"
          />
        </SegmentedRing>
      </RotatingBackground>

      {/* Static center */}
      <Center>
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

      {/* Feature bubbles - counter-rotate text to stay upright */}
      {features.map((item, i) => {
        const angle = i * 60
        return (
          <Bubble
            key={item.label}
            $angle={angle}
          >
            <Card>
              <Icon>{item.icon}</Icon>
              <TextResponsive
                fontSize="10px"
                $textalign="center"
                fontWeight="600"
                style={{ whiteSpace: 'pre-line', lineHeight: '1.4' }}
              >
                {item.label}
              </TextResponsive>
            </Card>
          </Bubble>
        )
      })}
    </Container>
  )
}
