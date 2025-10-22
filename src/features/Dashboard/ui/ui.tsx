import { Image } from "@mantine/core";
import { SavedColors } from "@shared/constants";
import CTC from "@shared/ui/changeTextColor";
import Container from "@shared/ui/Container";
import { HoveredButtonWithBorder, HoveredButtonWithoutBorder, WelcomeText, WelcomeTitle } from "../styles/styles";
import ResContainer from "@shared/ui/ResContainer";

function Ui() {
  return (
    <ResContainer 
      wrap="wrap-reverse" 
      bg="url('/landing bg.svg')"
      w="100%"
      h={{ base: 'auto', sm: 'auto', md: 'auto', lg: '100vh' }}
      justify="center"
      align="start"
    >
      <ResContainer 
        direction="column" 
        w={{ base: '100%', lg: '55%' }}
        h={{ base: 'auto', lg: '70vh' }} 
        gap={20}
        style={{ 
          position: 'relative', 
          padding: '20px 0'
        }} 
        justify="center"
        p={{ base: 'md', lg: '0' }}
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
            Talk to Our Experts on WhatsApp
          </HoveredButtonWithoutBorder>
        </Container>
      </ResContainer>

      <ResContainer  
        w={{ base: '100%', lg: '45%' }}
        h={{ base: 'auto', lg: '70vh' }}  
        justify="center" 
        align="center" 
        p={{ base: 'md', lg: "0" }}
      >
        <Image 
          src="/welcome.svg" 
          alt="welcome image" 
          miw={300}
        />
      </ResContainer>
    </ResContainer>
  );
}

export { Ui };