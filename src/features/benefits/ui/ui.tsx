import { memo } from 'react'
import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive } from '@shared/ui/Typography'

import { StyledCard } from '../styles'

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
        <Flex
          wrap="wrap"
          w="100%"
          justify="center"
          gap={10}
        >
          {pageInfo?.features?.map((feature) => {
            const Icon = feature.icon as IconType
            return (
              <StyledCard
                key={feature.name}
                bg="white"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '0%',
                    height: '30px',
                    width: '100%',
                    background: SavedColors.highlite,
                  }}
                />
                <Icon
                  size="15%"
                  color={SavedColors.highlite}
                />
                <TextResponsive
                  $textalign="center"
                  style={{
                    paddingInline: '10px',
                    width: '90%',
                  }}
                  fontSize="17px"
                  fontWeight="500"
                >
                  {feature.name}
                </TextResponsive>
              </StyledCard>
            )
          })}
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
