import { memo } from 'react'
import { MdBlock } from 'react-icons/md'
import { Flex, Image } from '@mantine/core'

import { VerticalLine } from '@features/app-layout/styles'
import { SavedColors } from '@shared/constants'
import FindByName from '@shared/helpers/findByName'
import ActionLayout from '@shared/ui/ActionLayout'
import { BgFlex } from '@shared/ui/BgFlex'
import Wrapper from '@shared/ui/horWrapper'
import IconWithText from '@shared/ui/IconWithText'
import { TextResponsive, TitleWithFamily } from '@shared/ui/Typography'

import ContactForm from './contactForm'
import { useMediaQuery } from '@mantine/hooks'

const Ui = memo(() => {
  const pageInfo = FindByName('contact us')
  const isTableMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-contact-section">
      <Wrapper
        bgImage={isTableMobile ? 'bgNet_mobile.webp' : '/bgNet.webp'}
        isReverseWrap={false}
        fullHeight={false}
        rightSection={<ContactForm />}
        RSJustify="center"
        leftWidth="60%"
        rightWidth="40%"
      >
        <TextResponsive
          color={SavedColors.Primaryblue}
          fontSize="18px"
          fontWeight="600"
        >
          {pageInfo?.name}
        </TextResponsive>
        <TitleWithFamily
          $font="Nunito"
          fontSize="48px"
          fontWeight="800"
        >
          {pageInfo?.title}
        </TitleWithFamily>
        <VerticalLine opacity={20} />

        <Flex wrap="wrap">
          {pageInfo?.section?.map((section) => {
            return (
              <Flex
                key={section.name}
                direction="column"
                w={{ base: '100%', lg: '50%' }}
              >
                <IconWithText
                  fontWeight="600"
                  $hoveractive="false"
                  icon={section?.icon ?? MdBlock}
                  allowTextRes
                  textRes={section?.name}
                  textColor={SavedColors.TextColor}
                />
              </Flex>
            )
          })}
        </Flex>

        <TextResponsive
          $font="Roboto"
          fontSize="18px"
        >
          {pageInfo?.description}
        </TextResponsive>
        {pageInfo?.sectionSecond?.map((sectionSecond) => {
          return (
            <ActionLayout
              key={sectionSecond.name}
              title={sectionSecond?.name}
              description={sectionSecond?.description}
              descriptionSecond={sectionSecond?.description1}
              descriptionThird={sectionSecond?.description2}
              descriptionForth={sectionSecond?.description3}
              Icon={sectionSecond?.icon ?? MdBlock}
              ariaLabel={sectionSecond?.ariaLabel}
              textSize="16px"
            />
          )
        })}

        <Flex
          wrap="wrap"
          gap={20}
        />
      </Wrapper>

      <div
        style={{
          position: 'relative',
          height: '50vh',
          overflow: 'scroll',
          maxWidth: '100%',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4581.645858084475!2d32.602924194979494!3d0.32116104070131996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbe6a834714b%3A0x802d34bb32ac2e3a!2sLotus%20Technologies%20Ltd!5e0!3m2!1sen!2sug!4v1761568202387!5m2!1sen!2sug"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
          title="Map showing location at coordinates 0°19'16.6'N 32°36'10.2'E in Uganda"
        />
      </div>
      <BgFlex
        bg={SavedColors.lightBlue}
        w="100%"
        h={{ base: 'auto', sm: 'auto', md: 'auto', lg: '30vh' }}
        p={{
          base: '10px 16px',
          sm: '10px 24px',
          md: '10px 32px',
          lg: '20px 40px',
        }}
        justify="center"
        align="flex-start"
        gap={20}
        wrap="wrap"
        style={{ overflow: 'hidden' }}
      >
        <Image
          src={isTableMobile ? 'bgNet_mobile.webp' : '/bgNet.webp'}
          style={{ position: 'absolute', opacity: '0.25' }}
          alt="background image"
        />
        {pageInfo?.features.map((feature) => {
          return (
            <ActionLayout
              key={feature.name}
              title={feature?.name}
              description={feature?.description}
              Icon={feature?.icon ?? MdBlock}
              currentWidth="20%"
              ariaLabel={feature?.ariaLabel}
            />
          )
        })}
      </BgFlex>
    </div>
  )
})

export { Ui }
