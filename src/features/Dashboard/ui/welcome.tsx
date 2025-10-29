import { memo } from 'react'
import { Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import FindByName from '@shared/helpers/findByName'
import useNavigationScroll from '@shared/hooks/useNavigationScroll'
import { CTC } from '@shared/ui/CTC'
import Container from '@shared/ui/Container'
import Wrapper from '@shared/ui/horWrapper'

import {
  HoveredButtonWithBorder,
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
} from '../styles/styles'

const Welcome = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()
  const pageInfo = FindByName('Welcome')

  return (
    <section id="dashboard-welcome-section">
      <Wrapper
        rightSection={
          <Image
            src="/welcome.svg"
            alt="software employee image"
            miw={300}
          />
        }
        bgImage="/landing bg.svg"
        isReverseWrap={true}
      >
        <Image
          src="/bgNet.webp"
          alt="background image"
          style={{
            position: 'absolute',
            top: '10%',
            left: '0%',
            opacity: '40%',
          }}
          loading="lazy"
        />

        <WelcomeText
          $font="Roboto"
          fontWeight="600"
        >
          {pageInfo?.description}
        </WelcomeText>

        <WelcomeTitle
          $font="Nunito"
          fontWeight="800"
        >
          Empowering <CTC text="Africa's" /> Businesses with Smart, Scalable
          <CTC text="Software" /> & Technology <CTC text="Solutions" />.
        </WelcomeTitle>

        <WelcomeText $font="Roboto">{pageInfo?.descriptionSecond}</WelcomeText>

        <Container
          gap={20}
          wrap="wrap"
          w="100%"
          justify="start"
          align="center"
        >
          <HoveredButtonWithBorder
            radius="md"
            size="md"
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            color={SavedColors.Primaryblue}
            onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
          >
            Request a demo
          </HoveredButtonWithBorder>

          <HoveredButtonWithoutBorder
            radius={20}
            size="md"
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            color={SavedColors.Primaryblue}
            variant="transparent"
            onClick={() => {
              window.location.href = 'https://wa.me/+256755818183'
            }}
          >
            Talk to Our Experts on WhatsApp
          </HoveredButtonWithoutBorder>
        </Container>
      </Wrapper>
    </section>
  )
})

export { Welcome }
