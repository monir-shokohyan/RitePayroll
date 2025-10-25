import { Image } from '@mantine/core'
import { HoveredButtonWithBorder, HoveredButtonWithoutBorder, WelcomeText, WelcomeTitle } from '../styles/styles'
import CTC from '@shared/ui/changeTextColor'
import { SavedColors } from '@shared/constants'
import Container from '@shared/ui/Container'
import Wrapper from '@shared/ui/horWrapper'
import { ProductsType } from '../types'
import { productsMap } from '../constant/Contant'

const ProductWelcome = ({page}:{page:ProductsType}) => {
  return (
    <Wrapper rightSection={
        <Image 
          src={`/products/${productsMap?.[page].image as any}`} 
          alt="product image" 
          miw={300}
          h="100%"
          fit="contain"
        />
    }
    bgImage={SavedColors.TextColor}
    isReverseWrap={true}
    isBgColor
    >
             <Image 
          src="/bgNet.png" 
          alt="welcome image" 
          style={{
            position: 'absolute',
            top: '10%', 
            left: '0%', 
            opacity: '40%'
          }}
        />
        
        <WelcomeTitle font="Nunito" fontWeight="800" color={SavedColors.PrimaryWhite}>
         {productsMap?.[page].name as any}
        </WelcomeTitle>
        
        <WelcomeText font="Roboto" fontWeight='600' fontSize='24px' color={SavedColors.PrimaryWhite}>
          {productsMap?.[page].info as any}
        </WelcomeText>
        
        <Container
          gap={20} 
          wrap="wrap"  
          w="100%"  
          justify="start" 
          align="center"
        >
          <HoveredButtonWithBorder 
            radius="md" 
            size="md" 
            w={{ base: '100%',sm: 'auto',md: 'auto', lg: 'auto'}}
            color={SavedColors.Primaryblue}
          >
            Request a demo
          </HoveredButtonWithBorder>
          
          <HoveredButtonWithoutBorder 
            radius={20} 
            size="md" 
            w={{ base: '100%',sm: 'auto',md: 'auto', lg: 'auto'}}
            color={SavedColors.Primaryblue} 
            variant="transparent"
          >
            Download product brochure
          </HoveredButtonWithoutBorder>
        </Container>
    </Wrapper>
  )
}

export default ProductWelcome

