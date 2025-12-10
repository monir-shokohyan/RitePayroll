import { Flex } from '@mantine/core'

import { HorWrapperType } from '@shared/types/horWrapper'
import { BgFlex } from '@shared/ui/BgFlex'

import { GradientContainer } from './gradeintContainer'

const horWrapper = ({
  isBgColor = false,
  RSJustify = 'flex-start',
  children,
  rightSection,
  bgImage,
  isReverseWrap,
  leftWidth = '55%',
  rightWidth = '45%',
  fullHeight = true,
  isSticky = false,
  desTitle = '',
  title = '',
  gradientDirection = 'bottom-to-top',
  doubleOption = true,
}: HorWrapperType) => {
  return (
    <GradientContainer
      direction={gradientDirection}
      title={title}
      desTitle={desTitle}
    >
      <BgFlex
        wrap={isReverseWrap ? 'wrap-reverse' : 'wrap'}
        bg={isBgColor ? `${bgImage}` : `'${bgImage}'`}
        w="100%"
        $isSticky={isSticky}
        opacity={0.25}
        h={{
          base: 'auto',
          sm: 'auto',
          md: 'auto',
          lg: isBgColor ? '60vh' : fullHeight ? '90vh' : 'auto',
        }}
        p={20}
        gap="5%"
        justify="center"
        align="flex-start"
      >
        {doubleOption ? (
          <>
            <Flex
              direction="column"
              w={{ base: '100%', lg: leftWidth }}
              h={{ base: 'auto', lg: '100%' }}
              gap={20}
              justify="center"
              align="center"
              p={{ base: '0px', lg: '0' }}
            >
              {children}
            </Flex>

            <BgFlex
              w={{ base: '100%', lg: rightWidth }}
              h="100%"
              justify={RSJustify}
              align="center"
              p={{ base: '0px', lg: '0' }}
            >
              {rightSection}
            </BgFlex>
          </>
        ) : (
          <Flex
            direction="column"
            w={{ base: '100%' }}
            h={{ base: 'auto', lg: '100%' }}
            gap={20}
            justify="center"
            align="center"
          >
            {children}
          </Flex>
        )}
      </BgFlex>
    </GradientContainer>
  )
}

export { horWrapper }
