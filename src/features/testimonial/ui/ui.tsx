import { memo, useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import { Flex, Image, Rating } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { TextResponsive } from '@shared/ui/Typography'
import { VerWrapper } from '@shared/ui/VerWrapper'

import { SCard } from '../styles'

import '@mantine/carousel/styles.css'

const Ui = memo(() => {
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  const pageInfo = FindByName('Tesimonials')

  return (
    <section id="dashboard-testimonial-section">
      <VerWrapper
        sectionTitle={pageInfo?.name}
        title={pageInfo?.title}
      >
        <TextResponsive
          $font="Roboto"
          fontSize="18px"
        >
          {pageInfo?.description}
        </TextResponsive>
        <Carousel
          withIndicators
          height={500}
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          emblaOptions={{ loop: true, align: 'center' }}
          w="100%"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          nextControlProps={{ 'aria-label': 'Next testimonial' }}
          previousControlProps={{ 'aria-label': 'Previous testimonial' }}
        >
          {pageInfo?.features?.map((testim) => {
            return (
              <Carousel.Slide
                key={testim.name}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <SCard
                  w={{ base: '300px', lg: '436px' }}
                  h="436px"
                  p={30}
                >
                  <Flex
                    w="100%"
                    h="100%"
                    justify="start"
                    align="center"
                    direction="column"
                    gap={20}
                  >
                    <Rating
                      value={testim.star}
                      size="lg"
                      readOnly
                      color={SavedColors.Primaryblue}
                    />

                    <Flex
                      w="100%"
                      h="500px"
                      justify="center"
                      align="center"
                    >
                      <TextResponsive
                        $font="Roboto"
                        fontSize="18px"
                      >
                        {testim?.description}
                      </TextResponsive>
                    </Flex>

                    <Image
                      radius="50%"
                      src={`/people/${testim?.imageUrl}`}
                      h={90}
                      w={90}
                      alt={`${testim?.name} image`}
                    />
                    <TextResponsive
                      $font="Roboto"
                      fontSize="24px"
                    >
                      {testim?.name}
                    </TextResponsive>
                    <TextResponsive
                      $font="Roboto"
                      fontSize="18px"
                    >
                      {testim?.position}
                    </TextResponsive>
                  </Flex>
                </SCard>
              </Carousel.Slide>
            )
          })}
        </Carousel>
      </VerWrapper>
    </section>
  )
})

export { Ui }
