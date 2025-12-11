/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { Tooltip } from 'react-tooltip'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import {
  FeatureContainer,
  HoveredFeature,
  Line,
  ResImage,
  SideContainer,
} from '../style'

const Ui = memo(() => {
  const pageInfo = FindByName('features')

  return (
    <div id="dashboard-features-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={null}
        RSJustify="center"
        leftWidth="50%"
        rightWidth="50%"
        desTitle={pageInfo?.dTitle}
        title={pageInfo?.title}
        gradientDirection="top-to-bottom"
        doubleOption={false}
      >
        <ResImage src="/screenLaptop.png" />
        <FeatureContainer
          w="100%"
          wrap="wrap"
          gap="10%"
          justify="flex-start"
          px={10}
        >
          <SideContainer
            direction="column"
            align="start"
            gap={20}
          >
            {pageInfo?.features.slice(0, 3).map((feature, index) => (
              <Flex
                key={feature.name || index}
                align="center"
                w="100%"
                ml={{
                  base: 'auto',
                  sm: 'auto',
                  lg: feature.distance,
                }}
              >
                <HoveredFeature
                  data-tooltip-id={feature.ariaLabel}
                  data-tooltip-content={feature.description}
                >
                  {feature.icon && (
                    <feature.icon
                      size={22}
                      color={SavedColors.primaryBlue}
                    />
                  )}
                  <TextWithFamily style={{ textWrap: 'nowrap' }}>
                    {feature.name}
                  </TextWithFamily>
                </HoveredFeature>
                <Line />
                <Tooltip id={feature.ariaLabel} />
              </Flex>
            ))}
          </SideContainer>
          <SideContainer
            direction="column"
            align="end"
            gap={20}
          >
            {pageInfo?.features.slice(3, 7).map((feature, index) => (
              <Flex
                key={feature.name || index}
                w="100%"
                mr={{
                  base: 'auto',
                  sm: 'auto',
                  lg: feature.distance,
                }}
                align="center"
              >
                <Line />
                <HoveredFeature
                  data-tooltip-id={feature.ariaLabel}
                  data-tooltip-content={feature.description}
                >
                  {feature.icon && (
                    <feature.icon
                      size={22}
                      color={SavedColors.primaryBlue}
                    />
                  )}
                  <TextWithFamily style={{ textWrap: 'nowrap' }}>
                    {feature.name}
                  </TextWithFamily>
                </HoveredFeature>
                <Tooltip id={feature.ariaLabel} />
              </Flex>
            ))}
          </SideContainer>
        </FeatureContainer>
      </Wrapper>
    </div>
  )
})

export { Ui }
