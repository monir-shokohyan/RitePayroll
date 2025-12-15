import { memo } from 'react'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import { StyledCard, StyledMarquee } from '../styles'

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
                    // eslint-disable-next-line react/jsx-pascal-case
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
