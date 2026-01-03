/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { Card, Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { StyledMarquee } from '@features/industries/styles'
import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

const Ui = memo(() => {
  const pageInfo = FindByName('aboutUs')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-aboutUs-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={
          <Flex
            align="center"
            justify="center"
            h="100%"
            pt={isMobile ? 0 : 150}
            direction="column"
            gap={isMobile ? 20 : 80}
            px={10}
            w="100%"
          >
            <TextWithFamily
              $font="Roboto"
              fontWeight="400"
            >
              {pageInfo?.description}
            </TextWithFamily>
            <StyledMarquee bg={SavedColors.highlite}>
              {pageInfo?.features?.map((Mcard) => {
                return (
                  <Card
                    key={Mcard.name}
                    padding="sm"
                    radius="md"
                    ml={20}
                    bg="transparent"
                  >
                    <TextWithFamily
                      $font="Roboto"
                      fontWeight="400"
                      style={{ textWrap: 'nowrap' }}
                    >
                      {Mcard.name}
                    </TextWithFamily>
                  </Card>
                )
              })}
            </StyledMarquee>
          </Flex>
        }
        RSJustify="center"
        leftWidth="40%"
        rightWidth="50%"
        activeHead={false}
        $paddingLeftTop={isMobile ? '60px' : '50px'}
        $paddingRightTop={isMobile ? '20px' : '50px'}
        activeSticker={true}
      >
        <Flex
          w="100%"
          wrap="wrap"
          justify="center"
          direction="column"
          px={20}
        >
          <TextWithFamily
            $font="Roboto"
            fontWeight="500"
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
