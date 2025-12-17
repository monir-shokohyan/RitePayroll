/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'
import { HoveredArrow } from '@shared/styles/arrowStyle'
import { Container } from '@shared/ui/Container'
import { CTC } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily, TitleWithFamily } from '@shared/ui/Typography'

import {
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
} from '../styles/styles'
import { WelcomeFeature } from './welcomeFeature'

const Welcome = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()
  const pageInfo = FindByName('Welcome')
  const isTableMobile = useMediaQuery('(max-width: 760px)')

  return (
    <section id="dashboard-welcome-section">
      <Wrapper
        rightSection={<WelcomeFeature pageInfo={pageInfo} />}
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

          <TitleWithFamily
            $font="Great Vibes"
            fontWeight="500"
            fontSize="50px"
            color={SavedColors.TextColorGreen}
            $textalign="left"
          >
            {pageInfo?.description}
          </TitleWithFamily>

          <WelcomeTitle
            $font="Nunito"
            fontWeight="800"
          >
            The <CTC text="Complete" /> Solution for <CTC text=" Resturant " />
            & <CTC text=" Bar " />.
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
              as="a"
              radius={20}
              size="sm"
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.Primaryblue}
              variant="transparent"
              href="/brochures/Rite eats.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: SavedColors.primaryBlue,
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Download product brochure
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
