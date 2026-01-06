import { memo } from 'react'
import { Marquee } from '@gfazioli/mantine-marquee'
import { Card } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

const Ui = memo(() => {
  const pageInfo = FindByName('benefits')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-benefits-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={null}
        RSJustify="center"
        desTitle={pageInfo?.dTitle}
        title={pageInfo?.title}
        doubleOption={false}
        paddingToTopLayer={isMobile ? '10px' : '80px'}
        headTextAlign="left"
      >
        <Marquee bg={SavedColors.darkBlue}>
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
      </Wrapper>
    </div>
  )
})

export { Ui }
