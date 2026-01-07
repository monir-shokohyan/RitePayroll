import { Flex, Loader as Loading } from '@mantine/core'

import { SavedColors } from '@shared/constants'

const Loader = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      h="80vh"
    >
      <Loading
        color={SavedColors.highlite}
        size="md"
      />
    </Flex>
  )
}

export { Loader }
