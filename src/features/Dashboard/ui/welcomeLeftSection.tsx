import { Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
import { AnimatedChartComponent } from '@shared/ui/AnimatedWelcome'
import { TextWithFamily } from '@shared/ui/Typography'

import { Bubble, Container } from '../styles'

const WelcomeLeftSection = ({
  pageInfo,
  activeBubble = false,
}: {
  pageInfo?: TotalDataItem
  activeBubble?: boolean
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Container style={Style}>
      <Image
        src="/dashboard5.svg"
        alt="Welcome"
        c={SavedColors.highlite}
        style={{ zIndex: 12 }}
      />
      <AnimatedChartComponent />
      {activeBubble &&
        pageInfo?.bubbles?.map((Buble) => {
          const {
            icon: Icon,
            iconColor,
            iconSize,
            text,
            textFontSize,
          } = Buble.content
          return (
            <Bubble
              key={Buble.id}
              top={Buble.top}
              left={Buble.left}
              rotate={Buble.rotate}
              animate={Buble.animate}
              initial={Buble.initial}
              whileInView={Buble.whileInView}
              viewport={Buble.viewport}
              transition={Buble.transition}
              whileHover={Buble.whileHover}
              $size={isMobile ? 5 : Buble.size}
            >
              <Flex
                align="center"
                gap={8}
                direction="column"
              >
                <Icon
                  color={iconColor}
                  size={iconSize}
                />
                <TextWithFamily
                  $font="Roboto"
                  fontWeight="500"
                  fontSize={textFontSize}
                  color={SavedColors.TextColor}
                  $textalign="center"
                >
                  {text}
                </TextWithFamily>
              </Flex>
            </Bubble>
          )
        })}
    </Container>
  )
}
export { WelcomeLeftSection }
