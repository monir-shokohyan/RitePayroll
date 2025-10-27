import { Image } from '@mantine/core'
import { HoveredButtonWithBorder, HoveredButtonWithoutBorder, WelcomeText, WelcomeTitle } from '../styles/styles'
import CTC from '@shared/ui/changeTextColor'
import { SavedColors } from '@shared/constants'
import Container from '@shared/ui/Container'
import Wrapper from '@shared/ui/horWrapper'
import useNavigationScroll from '@shared/hooks/useNavigationScroll'

const Welcome = () => {
  const { navigateAndScroll } = useNavigationScroll()
  return (
    <section id='dashboard-welcome-section'>
    <Wrapper rightSection={
        <Image 
          src="/welcome.svg" 
          alt="welcome image" 
          miw={300}
        />
    }
    bgImage='/landing bg.svg'
    isReverseWrap={true}
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
        
        <WelcomeText font="Roboto" fontWeight="600">
          Welcome to Lotus Soft Technologies Ltd.
        </WelcomeText>
        
        <WelcomeTitle font="Nunito" fontWeight="800">
          Empowering <CTC text="Africa's"/> Businesses with Smart, Scalable  
          <CTC text="Software"/> & Technology <CTC text="Solutions"/>.
        </WelcomeTitle>
        
        <WelcomeText font="Roboto">
          Simplifying operations, automating workflows, and driving growth through innovation. Welcome to Lotus Soft Technologies Ltd., Uganda's leading provider of business software and IT solutions.
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
             onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
          >
            Request a demo
          </HoveredButtonWithBorder>
          
          <HoveredButtonWithoutBorder 
            radius={20} 
            size="md" 
            w={{ base: '100%',sm: 'auto',md: 'auto', lg: 'auto'}}
            color={SavedColors.Primaryblue} 
            variant="transparent"
            onClick={()=>{
              window.location.href="https://wa.me/+256755818183"
            }}
          >
            Talk to Our Experts on WhatsApp
          </HoveredButtonWithoutBorder>
        </Container>
    </Wrapper>
    </section>
  )
}

export default Welcome
