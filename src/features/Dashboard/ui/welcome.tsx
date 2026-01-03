/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { FaCalendarAlt, FaDownload } from 'react-icons/fa'
import { Button, Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'
import { Container } from '@shared/ui/Container'
import { CTC } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TitleWithFamily } from '@shared/ui/Typography'

import { WelcomeText, WelcomeTitle } from '../styles/styles'
import { WelcomeFeature } from './welcomeFeature'

const Welcome = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()
  const pageInfo = FindByName('Welcome')

  return (
    <section id="dashboard-welcome-section">
      <Wrapper
        rightSection={<WelcomeFeature pageInfo={pageInfo} />}
        leftWidth="45%"
        rightWidth="45%"
        doubleOption={true}
        activeHead={false}
        $paddingTop="10px"
        isReverseWrap={true}
        bgWave={true}
      >
        <Flex
          px={10}
          direction="column"
          gap={20}
        >
          <TitleWithFamily
            $font="Roboto"
            fontWeight="500"
            fontSize="30px"
            $textalign="left"
          >
            {pageInfo?.description}
          </TitleWithFamily>
          <WelcomeTitle
            $font="Roboto"
            fontWeight="500"
          >
            The <CTC text="RitePayroll" /> - Smart Payroll{' '}
            <CTC text=" Software " />
            for Growing Businesses.
          </WelcomeTitle>
          <WelcomeText
            $font="Roboto"
            fontWeight="400"
          >
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
            <Button
              radius={20}
              leftSection={<FaCalendarAlt />}
              size="sm"
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.TextColor}
              onClick={() =>
                navigateAndScroll('/', 'dashboard-contact-section')
              }
            >
              Request a live demo
            </Button>

            <Button
              component="a"
              radius={20}
              size="sm"
              leftSection={<FaDownload />}
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.TextColor}
              variant="outline"
              href="/brochures/RitePayroll.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: SavedColors.TextColor,
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Download product brochure
            </Button>
          </Container>
        </Flex>
      </Wrapper>
    </section>
  )
})

export { Welcome }
