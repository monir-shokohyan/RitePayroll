import { Flex, Image, Rating } from "@mantine/core";
import { TextResponsive } from "@shared/ui/Typography";
import VerWrapper from "@shared/ui/VerWrapper";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { memo, useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';
import { testimonialMap } from "../constant";
import { SCard } from "../styles";


const Ui = memo(() => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <section id="dashboard-testimonial-section">
      <VerWrapper sectionTitle="Tesimonials" title="What they are saying about us">
        <TextResponsive font="Roboto" fontSize="18px">
          As a trusted partner for Tally Accounting software and a leading integrator of URA EFRIS, we are committed to delivering top-notch software solutions that drive efficiency and growth. We value the comments and suggestions of our users, always listening attentively to their feedback to create the best products tailored to their needs.
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
        >

          {
            testimonialMap?.map((testim) => {
              return (
                <Carousel.Slide style={{ display: 'flex', justifyContent: 'center' }}>
                  <SCard w={{ base: "300px", lg: '436px' }} h="436px" p={30}>
                    <Flex w="100%" h="100%" justify="start" align="center" direction="column" gap={20}>
                      <Rating value={testim.star} />
                      <TextResponsive font="Roboto" fontSize="18px">
                        {testim.comment}
                      </TextResponsive>
                      <Image radius={'50%'} src={`/people/${testim.imageUrl}`} h={90} w={90} alt={`${testim.name} image`} />
                      <TextResponsive font="Roboto" fontSize="24px">
                        {testim.name}
                      </TextResponsive>
                      <TextResponsive font="Roboto" fontSize="18px">
                        {testim.position}
                      </TextResponsive>

                    </Flex>

                  </SCard>
                </Carousel.Slide>
              )
            })
          }
        </Carousel>
      </VerWrapper>
    </section>
  );
})

export { Ui };


