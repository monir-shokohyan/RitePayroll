/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { Flex, FlexProps, Image, ImageProps } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

const HoveredFeature = styled(Flex)<FlexProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid gray;
  border-radius: 30px;
  padding-inline: 20px;
  padding-block: 5px;
  background: ${SavedColors.PrimaryWhite};
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media (max-width: 1100px) {
    width: 100% !important;
  }
`
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  height: 1px;

  @media (max-width: 1100px) {
    display: none;
  }
`

const ResImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  width: 460px;
  @media (max-width: 1204px) {
    width: 450px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`
const FeatureContainer = styled(Flex)<FlexProps>`
  padding-top: 100px;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 20px !important;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
  }
`
const SideContainer = styled(Flex)<FlexProps>`
  width: 45%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`

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
                <HoveredFeature>
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
                <HoveredFeature>
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
              </Flex>
            ))}
          </SideContainer>
        </FeatureContainer>
      </Wrapper>
    </div>
  )
})

export { Ui }
