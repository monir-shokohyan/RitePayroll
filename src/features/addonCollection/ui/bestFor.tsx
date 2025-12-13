import { Flex, FlexProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsiveSmaller } from '@shared/ui/Typography'

import { ProductsType } from '../types'

interface AllowType {
  disallowBorder: boolean
}
const BoxForBest = styled(Flex)<FlexProps & AllowType>`
  border-right: ${({ disallowBorder }) =>
    disallowBorder ? '0px' : `1px solid ${SavedColors.TextColor}`};
`
const BestFor = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)
  const isTableMobile = useMediaQuery('(max-width: 760px)')

  return (
    <Wrapper
      bgImage="/texture.png"
      isReverseWrap={false}
      fullHeight={false}
      leftWidth="60%"
      rightWidth="40%"
      RSJustify="center"
      desTitle="Experience"
      gradientDirection="top-to-bottom"
      title="BEST FOR"
      isSticky={true}
      doubleOption={false}
    >
      <Flex justify="center">
        {product?.bestFor?.map((bestItem, index) => {
          const Icon = bestItem.icon
          return (
            <BoxForBest
              key={bestItem.label}
              direction="column"
              justify="flex-start"
              pt={{ base: 20, sm: 20, md: 40, lg: 60 }}
              align="center"
              gap={{ base: 10, sm: 10, md: 20, lg: 20 }}
              w={{ base: 80, sm: 80, md: 160, lg: 200 }}
              h={{ base: 80, sm: 80, md: 160, lg: 200 }}
              disallowBorder={Number(product.bestFor?.length) - 1 === index}
            >
              <Icon
                size={isTableMobile ? 22 : 32}
                color={SavedColors.TextColorGreen}
              />
              <TextResponsiveSmaller
                width="80%"
                $textalign="center"
              >
                {bestItem.label}
              </TextResponsiveSmaller>
            </BoxForBest>
          )
        })}
      </Flex>
    </Wrapper>
  )
}

export { BestFor }
