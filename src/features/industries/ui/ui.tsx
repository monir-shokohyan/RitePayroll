/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import Marquee from 'react-fast-marquee'
import { Card, Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

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
      >
        <Marquee>
          {pageInfo?.features.map((Mcard) => {
            return (
              <Card
                key={Mcard.name}
                shadow="sm"
                padding="sm"
                radius="md"
                withBorder
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
              </Card>
            )
          })}
        </Marquee>
        <Marquee direction="right">
          {pageInfo?.features.map((Mcard) => {
            return (
              <Card
                key={Mcard.name}
                shadow="sm"
                padding="sm"
                radius="md"
                withBorder
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
              </Card>
            )
          })}
        </Marquee>
      </Wrapper>
    </div>
  )
})

export { Ui }
