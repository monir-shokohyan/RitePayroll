import { horWrapperType } from '@shared/types/horWrapper'
import { BgFlex } from '@shared/ui/BgFlex'

const horWrapper = ({ children,rightSection,bgImage,isReverseWrap,leftWidth = '55%', rightWidth = '45%', fullHeight = true}:horWrapperType) => {
  return (
    <>
    <BgFlex 
      wrap={isReverseWrap ? "wrap-reverse" : 'wrap' }
      bg={`'${bgImage}'`}
      w="100%"
      h={{ base: 'auto', sm: 'auto', md: 'auto', lg: fullHeight ? '90vh' : 'auto' }}
      p={{ base: '10px 16px', sm: '10px 24px', md: '10px 32px', lg: '10px 40px' }}
      justify="center"
      align="center"
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

      <BgFlex  
        w={{ base: '100%', lg: rightWidth }}
        h="100%"  
        justify="start" 
        align="center" 
        p={{ base: 'md', lg: "0" }}
        
      >
       {rightSection}
      </BgFlex>
    </BgFlex>
    </>
  )
}

export default horWrapper
