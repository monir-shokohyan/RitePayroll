import { Flex } from '@mantine/core'

import { TotalDataItem } from '@shared/constants/allTexts'

import { WelcomeLeftSection } from './welcomeLeftSection'

const WelcomeFeature = ({ pageInfo }: { pageInfo?: TotalDataItem }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      align="center"
    >
      <WelcomeLeftSection pageInfo={pageInfo} />
    </Flex>
  )
}

export { WelcomeFeature }
