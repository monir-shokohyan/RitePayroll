import { HorWrapperType } from '@shared/types/horWrapper'
import { BgFlex } from '@shared/ui/BgFlex'

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
}: HorWrapperType) => {
  return (
    <>
      <BgFlex
        wrap={isReverseWrap ? 'wrap-reverse' : 'wrap'}
        bg={isBgColor ? `${bgImage}` : `'${bgImage}'`}
        w="100%"
        $isSticky={true}
        opacity={0.25}
        h={{
          base: 'auto',
          sm: 'auto',
          md: 'auto',
          lg: isBgColor ? '60vh' : fullHeight ? '90vh' : 'auto',
        }}
        p={{
          base: '10px 16px',
          sm: '10px 24px',
          md: '10px 32px',
          lg: '10px 40px',
        }}
        justify="center"
        align={isSticky ? 'flex-start' : 'center'}
      >
        <BgFlex
          direction="column"
          w={{ base: '100%', lg: leftWidth }}
          h={{ base: 'auto', lg: '100%' }}
          gap={20}
          style={{
            position: 'relative',
            padding: '20px 0',
          }}
          justify="center"
          p={{ base: 'md', lg: '0' }}
        >
          {children}
        </BgFlex>

        {isSticky ? (
          <BgFlex
            w={{ base: '100%', lg: rightWidth }}
            h="100%"
            justify={RSJustify}
            align="center"
            p="100px 0px"
            style={{ position: 'sticky', top: '70px' }}
          >
            {rightSection}
          </BgFlex>
        ) : (
          <BgFlex
            w={{ base: '100%', lg: rightWidth }}
            h="100%"
            justify={RSJustify}
            align="center"
            p={{ base: '0px', lg: '0' }}
          >
            {rightSection}
          </BgFlex>
        )}
      </BgFlex>
    </>
  )
}

export { horWrapper }
