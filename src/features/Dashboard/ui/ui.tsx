import { Image, ImageProps } from "@mantine/core";
import { SavedColors } from "@shared/constants";
import Container from "@shared/ui/Container";
import { TextWithFamily } from "@shared/ui/Typography";
import styled from "styled-components";

const WelcomeText = styled(TextWithFamily)`
font-size: 1.3rem;

`
const WelcomeTitle = styled(TextWithFamily)`
font-size: 3.2rem;

`

function Ui() {

  return (
    <Container bg="url('/landing bg.svg')" w="100%" h="100vh" justify="center" >
      <Container direction="column" w="55%" h="70vh" gap={20} style={{ position:'relative' }} justify="center">
         <Image src="/bgNet.png" alt="welcome image" style={{position:'absolute', top:'10%', left: '0%', opacity:'40%'}}/>
          <WelcomeText font="Roboto" fontWeight="600">
            Welcome to Lotus Soft Technologies Ltd.
          </WelcomeText>
          <WelcomeTitle font="Nunito" fontWeight="800">
            Empowering <span style={{color:SavedColors.Primaryblue}}>Africa’s</span> Businesses with Smart, Scalable  <span style={{color:SavedColors.Primaryblue}}>Software</span> & Technology <span style={{color:SavedColors.Primaryblue}}>Solutions</span>.
          </WelcomeTitle>
          <WelcomeText font="Roboto" >
            Simplifying operations, automating workflows, and driving growth through innovation. Welcome to Lotus Soft Technologies Ltd., Uganda’s leading provider of business software and IT solutions.
          </WelcomeText>
      </Container>
      <Container  w="45%" h="70vh"  justify="center" align="center">
         <Image src="/welcome.svg" alt="welcome image"/>
      </Container>
    </Container>

  );
}

export { Ui };