import { MdBlock } from 'react-icons/md'
import { Flex } from '@mantine/core'

import { VerticalLine } from '@features/app-layout/styles'
import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { ActionLayout } from '@shared/ui/ActionLayout'
import { TextResponsive, TitleWithFamily } from '@shared/ui/Typography'

import { ProductsType } from '../types'

function ProductsEditions({ page }: { page: ProductsType }) {
  const product = FindByName(page)
  const edition = product?.edition || null
  if (!edition) {
    return null
  }
  return (
    <Flex
      direction="column"
      gap={20}
      pt={40}
    >
      <TextResponsive
        color={SavedColors.Primaryblue}
        fontSize="18px"
        fontWeight="600"
      >
        Editions
      </TextResponsive>
      <TitleWithFamily
        $font="Nunito"
        fontSize="48px"
        fontWeight="800"
      >
        {edition?.name || 'Editions'}
      </TitleWithFamily>
      <VerticalLine opacity={20} />

      <Flex
        wrap="wrap"
        gap={20}
      >
        {edition?.editions
          ? edition.editions.map((edition) => {
              return (
                <ActionLayout
                  key={edition.name}
                  title={edition.name}
                  description={edition.description}
                  Icon={edition.icon ?? MdBlock}
                  ariaLabel={edition.name}
                />
              )
            })
          : null}
      </Flex>
    </Flex>
  )
}

export { ProductsEditions }
