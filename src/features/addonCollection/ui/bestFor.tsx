import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive } from '@shared/ui/Typography'

import { CircleCard, IconWrapper, InnerCircle } from '../styles'
import { ProductsType } from '../types'

const BestFor = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <Wrapper
      bgImage="/texture.png"
      isReverseWrap={false}
      fullHeight={false}
      leftWidth="60%"
      rightWidth="40%"
      RSJustify="center"
      desTitle="Experience"
      title="BEST FOR"
      isSticky={true}
      doubleOption={false}
    >
      <Flex
        justify="center"
        gap={{ base: 10, sm: 10, md: 20, lg: 40 }}
        wrap="wrap"
      >
        {product?.bestFor?.map((bestItem) => {
          const Icon = bestItem.icon

          return (
            <CircleCard
              key={bestItem.label}
              style={{
                width: '9rem',
                height: '9rem',
              }}
            >
              <InnerCircle>
                <IconWrapper $isMobile={isMobile}>
                  <Icon />
                </IconWrapper>
                <TextResponsive
                  width="70%"
                  $textalign="center"
                  fontSize="12px"
                  fontWeight="600"
                >
                  {bestItem.label}
                </TextResponsive>
              </InnerCircle>
            </CircleCard>
          )
        })}
      </Flex>
    </Wrapper>
  )
}

export { BestFor }
