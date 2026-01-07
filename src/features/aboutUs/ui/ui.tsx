import { memo } from 'react'
import { Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import { AboutRightSection } from './aboutRightSection'

const Ui = memo(() => {
  const pageInfo = FindByName('aboutUs')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-aboutUs-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={
          <AboutRightSection
            pageInfo={pageInfo}
            isMobile={isMobile}
          />
        }
        RSJustify="center"
        leftWidth="40%"
        rightWidth="50%"
        activeHead={false}
        $paddingLeftTop={isMobile ? '80px' : '120px'}
        $paddingRightTop={isMobile ? '20px' : '50px'}
        activeSticker={true}
      >
        <Flex
          w="100%"
          wrap="wrap"
          justify="center"
          direction="column"
          px={20}
          gap={20}
        >
          <TextWithFamily
            $font="Roboto"
            fontWeight="300"
            fontSize="18px"
            color={SavedColors.TextHighlite}
            $textalign="left"
          >
            {pageInfo?.dTitle}
          </TextWithFamily>
          <TextWithFamily
            $font="Roboto"
            fontWeight="500"
            fontSize="32px"
            color={SavedColors.TextColor}
            $textalign="left"
          >
            {pageInfo?.title}
          </TextWithFamily>
          <Image
            src={pageInfo?.imageUrl || '/aboutUs.png'}
            alt="about us image"
            h={{ base: 200, sm: 200, md: 400, lg: 500 }}
            fit="contain"
          />
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
