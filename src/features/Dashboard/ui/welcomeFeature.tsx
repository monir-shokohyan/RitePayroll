import { Flex } from '@mantine/core'

import { TotalDataItem } from '@shared/constants/allTexts'

import { RotatingFeaturesWheel } from './RotatingFeature'

const WelcomeFeature = ({ pageInfo }: { pageInfo?: TotalDataItem }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      align="center"
    >
      <RotatingFeaturesWheel pageInfo={pageInfo} />
    </Flex>
  )
}

export { WelcomeFeature }
