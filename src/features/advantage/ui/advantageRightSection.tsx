import { Flex } from '@mantine/core'

import { TotalDataItem } from '@shared/constants/allTexts'
import { TextWithFamily } from '@shared/ui/Typography'

import { TableComponent } from '../table'

const AdvantageRightSection = ({
  pageInfo,
  isMobile,
  changeImage,
}: {
  pageInfo?: TotalDataItem
  isMobile: boolean
  changeImage: (id: number) => void
}) => {
  return (
    <Flex
      align="flex-start"
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
        width={isMobile ? '100%' : '50%'}
      >
        {pageInfo?.description}
      </TextWithFamily>
      <TableComponent
        tableContent={pageInfo?.features}
        isMobile={isMobile}
        changeImage={(id) => changeImage(id)}
      />
    </Flex>
  )
}

export { AdvantageRightSection }
