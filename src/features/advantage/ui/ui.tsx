import { memo, useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import { Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { EmblaCarouselType } from 'embla-carousel'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive } from '@shared/ui/Typography'

import { AdvantageRightSection } from './advantageRightSection'

const Ui = memo(() => {
  const pageInfo = FindByName('advantage')
  const isMobile = useMediaQuery('(max-width: 760px)')

  const emblaRef = useRef<EmblaCarouselType | null>(null)

  const changeImage = (id: number) => {
    emblaRef.current?.scrollTo(id)
  }

  return (
    <div id="dashboard-advantage-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={
          <AdvantageRightSection
            pageInfo={pageInfo}
            isMobile={isMobile}
            changeImage={(id) => changeImage(id)}
          />
        }
        RSJustify="center"
        leftWidth="40%"
        rightWidth="50%"
        activeHead={false}
        $paddingLeftTop={isMobile ? '80px' : '120px'}
        $paddingRightTop={isMobile ? '20px' : '50px'}
        activeSticker={false}
        secondSticker={true}
      >
        <Flex
          w="100%"
          wrap="wrap"
          justify="center"
          direction="column"
          px={20}
          gap={30}
        >
          <TextResponsive
            $font="Roboto"
            fontWeight="500"
            fontSize="18px"
            color={SavedColors.TextHighlite}
            $textalign="left"
          >
            {pageInfo?.dTitle}
          </TextResponsive>
          <TextResponsive
            $font="Roboto"
            fontWeight="500"
            fontSize="32px"
            color={SavedColors.TextColor}
            $textalign="left"
          >
            {pageInfo?.title}
          </TextResponsive>

          <Carousel
            withControls={false}
            height="100%"
            initialSlide={0}
            getEmblaApi={(embla) => (emblaRef.current = embla)}
          >
            {pageInfo?.imageUrlSet?.map((img) => (
              <Carousel.Slide key={img.id}>
                <Image
                  src={img.url}
                  alt="about us image"
                  h={{ base: 200, sm: 200, md: 400, lg: 500 }}
                  fit="contain"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
