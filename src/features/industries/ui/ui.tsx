/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import Marquee, { MarqueeProps } from 'react-fast-marquee'
import { Card, CardProps, Flex } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

const StyledMarquee = styled(Marquee)<MarqueeProps>`
  padding-block: 10px;
`
const StyledCard = styled(Card)<CardProps>`
  box-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.2),
    -2px -2px 8px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3),
    inset -2px -2px 4px rgba(0, 0, 0, 0.3);
`

const Ui = memo(() => {
  const pageInfo = FindByName('industries')

  return (
    <div id="dashboard-industries-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={null}
        RSJustify="center"
        leftWidth="50%"
        rightWidth="50%"
        desTitle="Explore"
        title=" INDUSTRIES SERVED"
        gradientDirection="top-to-bottom"
        doubleOption={false}
        $flexGap={0}
      >
        <StyledMarquee>
          {pageInfo?.features.map((Mcard) => {
            return (
              <StyledCard
                key={Mcard.name}
                padding="sm"
                radius="md"
                ml={20}
              >
                <Flex
                  justify="center"
                  align="center"
                  gap={20}
                >
                  {Mcard.icon && (
                    <Mcard.icon
                      color={SavedColors.TextColorGreen}
                      size={16}
                    />
                  )}
                  <TextWithFamily>{Mcard.name}</TextWithFamily>
                </Flex>
              </StyledCard>
            )
          })}
        </StyledMarquee>
        <StyledMarquee direction="right">
          {pageInfo?.features.map((Mcard) => {
            return (
              <StyledCard
                key={Mcard.name}
                padding="sm"
                radius="md"
                ml={20}
              >
                <Flex
                  justify="center"
                  align="center"
                  gap={20}
                >
                  {Mcard.icon && (
                    <Mcard.icon
                      color={SavedColors.TextColorGreen}
                      size={16}
                    />
                  )}
                  <TextWithFamily>{Mcard.name}</TextWithFamily>
                </Flex>
              </StyledCard>
            )
          })}
        </StyledMarquee>
      </Wrapper>
    </div>
  )
})

export { Ui }
