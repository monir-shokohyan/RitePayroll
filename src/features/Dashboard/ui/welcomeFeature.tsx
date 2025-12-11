import { Flex } from '@mantine/core'

import { RotatingFeaturesWheel } from './RotatingFeature'

const WelcomeFeature = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      align="center"
    >
      <RotatingFeaturesWheel />
    </Flex>
  )
}

export { WelcomeFeature }
