import { Marquee } from '@gfazioli/mantine-marquee'
import { Card, Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
import { TextWithFamily } from '@shared/ui/Typography'

const AboutRightSection = ({
  pageInfo,
  isMobile,
}: {
  pageInfo?: TotalDataItem
  isMobile: boolean
}) => {
  return (
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
        fontWeight="300"
      >
        {pageInfo?.description}
      </TextWithFamily>
      <Marquee bg={SavedColors.highlite}>
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
                color="white"
              >
                {Mcard.name}
              </TextWithFamily>
            </Card>
          )
        })}
      </Marquee>
    </Flex>
  )
}

export { AboutRightSection }
