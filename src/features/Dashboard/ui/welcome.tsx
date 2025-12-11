/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'
import Container from '@shared/ui/Container'
import { CTC } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import {
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
} from '../styles/styles'
import { WelcomeFeature } from './welcomeFeature'

const HoveredArrow = styled.div`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(10px);
  }
`
const Welcome = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()
  const pageInfo = FindByName('Welcome')
  const isTableMobile = useMediaQuery('(max-width: 760px)')

  return (
    <section id="dashboard-welcome-section">
      <Wrapper
        rightSection={<WelcomeFeature />}
        leftWidth="45%"
        rightWidth="45%"
        doubleOption={true}
        activeHead={false}
        $paddingTop="10px"
        isReverseWrap={false}
      >
        <div style={{ paddingInline: '10px' }}>
          <Image
            src={isTableMobile ? 'bgNet_mobile.webp' : '/bgNet.webp'}
            alt="background image"
            style={{
              position: 'absolute',
              top: '10%',
              left: '0%',
              opacity: '25%',
              aspectRatio: '11/9',
            }}
            loading="eager"
            fit="contain"
          />

          <TextWithFamily
            $font="Tangerine"
            fontWeight="600"
            fontSize="40px"
            color={SavedColors.TextColorGreen}
            $textalign="left"
          >
            {pageInfo?.description}
          </TextWithFamily>

          <WelcomeTitle
            $font="Nunito"
            fontWeight="800"
          >
            Complete <CTC text="Resturant" /> & <CTC text=" Bar " /> Management
            <CTC text=" Software" />.
          </WelcomeTitle>

          <WelcomeText $font="Roboto">
            {pageInfo?.descriptionSecond}
          </WelcomeText>

          <Container
            gap={20}
            w="100%"
            wrap="wrap"
            justify="start"
            align="center"
            py={20}
          >
            <HoveredButtonWithoutBorder
              radius="md"
              size="sm"
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.Primaryblue}
              variant="transparent"
              onClick={() =>
                navigateAndScroll('/', 'dashboard-contact-section')
              }
            >
              Request a live demo
            </HoveredButtonWithoutBorder>

            <HoveredButtonWithoutBorder
              radius={20}
              size="sm"
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.Primaryblue}
              variant="transparent"
              onClick={() => {
                window.location.href = 'https://wa.me/+256755818183'
              }}
            >
              Speak to Sales
            </HoveredButtonWithoutBorder>

            <HoveredButtonWithoutBorder
              radius="md"
              size="sm"
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.Primaryblue}
              variant="transparent"
              onClick={() =>
                navigateAndScroll('/', 'dashboard-contact-section')
              }
            >
              Download Brochure
            </HoveredButtonWithoutBorder>
          </Container>
          <HoveredArrow
            onClick={() => navigateAndScroll('/', 'dashboard-editions-section')}
          >
            <Image
              src="/arrow-down-big.png"
              alt="background image"
              loading="eager"
              fit="contain"
              w={{ base: '0px', sm: '0px', md: '120px', lg: '150px' }}
            />
          </HoveredArrow>
        </div>
      </Wrapper>
    </section>
  )
})

export { Welcome }
