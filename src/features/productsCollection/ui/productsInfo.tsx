import { ImCheckmark } from 'react-icons/im'
import { MdBlock } from 'react-icons/md'
import { Flex } from '@mantine/core'

import { VerticalLine } from '@features/app-layout/styles'
import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { ActionLayout } from '@shared/ui/ActionLayout'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { IconWithText } from '@shared/ui/IconWithText'
import { TextResponsive, TitleWithFamily } from '@shared/ui/Typography'

import { ProductsType } from '../types'
import { ProductsEditions } from './productsEditions'
import { ProductsTableOfContent } from './productsMenu'

function ProductsInfo({ page }: { page: ProductsType }) {
  const product = FindByName(page)
  return (
    <Wrapper
      bgImage="/texture.png"
      isReverseWrap={false}
      fullHeight={false}
      rightSection={<ProductsTableOfContent />}
      leftWidth="60%"
      rightWidth="40%"
      RSJustify="center"
      isSticky={true}
    >
      <TextResponsive
        color={SavedColors.Primaryblue}
        fontSize="18px"
        fontWeight="600"
      >
        About Product
      </TextResponsive>
      <TitleWithFamily
        $font="Nunito"
        fontSize="48px"
        fontWeight="800"
      >
        {product?.name}
      </TitleWithFamily>
      <VerticalLine opacity={20} />
      <Flex direction="column">
        {product?.features.map((feature) => {
          return (
            <IconWithText
              key={feature.name}
              fontWeight="600"
              fontSize="18px"
              $hoveractive="false"
              iconSize={25}
              icon={ImCheckmark}
              allowTextRes
              textRes={feature.name}
              textColor={SavedColors.TextColor}
            />
          )
        })}
      </Flex>
      <TextResponsive
        $font="Roboto"
        fontSize="18px"
      >
        {product?.description || product?.overview || 'info about product'}
      </TextResponsive>

      <Flex
        wrap="wrap"
        gap={20}
      >
        {product?.section?.map((section) => {
          return (
            <ActionLayout
              key={section.name}
              title={section.name}
              description={section.description}
              Icon={section.icon ?? MdBlock}
              ariaLabel={section.name}
            />
          )
        })}
      </Flex>
      <ProductsEditions page={page} />
    </Wrapper>
  )
}

export { ProductsInfo }
