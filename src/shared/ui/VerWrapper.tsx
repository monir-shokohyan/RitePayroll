import { horWrapperType } from '@shared/types/horWrapper'
import { BgFlex } from '@shared/ui/BgFlex'
import { TextResponsive, TitleWithFamily } from './Typography'
import { SavedColors } from '@shared/constants'
import { VerticalLine } from '@features/app-layout/styles'

const VerWrapper = ({ sectionTitle, title, children,bgImage}:horWrapperType) => {
  return (
    <>
    <BgFlex 
      bg={`'${bgImage}'`}
      w="100%"
      h={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
      p={{ base: '10px 16px', sm: '10px 24px', md: '10px 32px', lg: '10px 40px' }}
      justify="center"
      align="flex-start"
      direction="column"
      gap={20}
    >
      <TextResponsive color={SavedColors.Primaryblue} fontSize="14px" fontWeight="600">{sectionTitle}</TextResponsive>
      <TitleWithFamily font="Nunito" fontSize="48px" fontWeight="800">{title}</TitleWithFamily>
      <VerticalLine opacity={20} />
      
        {children}
         
    </BgFlex>
    </>
  )
}

export default VerWrapper
