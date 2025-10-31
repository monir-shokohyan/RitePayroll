import { memo } from 'react'
import { MdBlock } from 'react-icons/md'
import { Flex, Image } from '@mantine/core'

import { VerticalLine } from '@features/app-layout/styles'
import { SavedColors } from '@shared/constants'
import FindByName from '@shared/helpers/findByName'
import ActionLayout from '@shared/ui/ActionLayout'
import Wrapper from '@shared/ui/horWrapper'
import { TextResponsive, TitleWithFamily } from '@shared/ui/Typography'
import { useMediaQuery } from '@mantine/hooks'

const Ui = memo(() => {
  const pageInfo = FindByName('why choose us')
  const isTablet = useMediaQuery('(max-width: 760px)')
  const isMobile = useMediaQuery('(max-width: 450px)')

  return (
    <section id="dashboard-whyus-section">
      <Wrapper
        bgImage={isTablet ? 'bgNet_tablet.webp': isMobile ? 'bgNet_mobile.webp' : '/bgNet.webp'}
        isReverseWrap={false}
        fullHeight={false}
        rightSection={
          <Image
            src="/why_us.png"
            alt="growth image"
            miw={300}
            style={{ objectFit: 'contain' }}
            height="100%"
          />
        }
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

        <TextResponsive
          $font="Roboto"
          fontSize="18px"
        >
          {pageInfo?.description}
        </TextResponsive>

        <Flex
          wrap="wrap"
          gap={20}
        >
          {pageInfo?.features?.map((feature) => {
            return (
              <ActionLayout
                key={feature.name}
                title={feature.name}
                description={feature.description}
                Icon={feature.icon ?? MdBlock}
                ariaLabel={feature.name}
              />
            )
          })}
        </Flex>
      </Wrapper>
    </section>
  )
})

export { Ui }
