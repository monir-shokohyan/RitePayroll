import { VerticalLine } from "@features/app-layout/styles";
import { Flex, Image } from "@mantine/core";
import { TextResponsive, TitleWithFamily } from "@shared/ui/Typography";
import Wrapper from "@shared/ui/horWrapper";
import { SavedColors } from "@shared/constants";
import ActionLayout from "@shared/ui/ActionLayout";
import IconWithText from "@shared/ui/IconWithText";
import { MdOutlineReply } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import ContactForm from "./contactForm";


function Ui() {
  return (
    <Wrapper bgImage="/bgNet.png" isReverseWrap={false}
      fullHeight={false}
      rightSection={
        <ContactForm />
      }
      RSJustify="center"
      leftWidth="60%"
      rightWidth="40%"
    >
      <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">Contact Us</TextResponsive>
      <TitleWithFamily font="Nunito" fontSize="48px" fontWeight="800">Get in Touch with Lotus Soft Technologies Ltd.</TitleWithFamily>
      <VerticalLine opacity={20} />
        
         <Flex wrap="wrap">

        <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
          <IconWithText fontWeight="600" hoverActive={false} iconSize={25} icon={MdOutlineReply} allowTextRes textRes="Reply within 24 hrs" textColor={SavedColors.TextColor}></IconWithText>
        </Flex>

        <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
          <IconWithText fontWeight="600" hoverActive={false} iconSize={25} icon={BsTelephoneFill} allowTextRes textRes="Telephone support" textColor={SavedColors.TextColor}></IconWithText>
        </Flex>
        
      </Flex>

      <TextResponsive font="Roboto" fontSize="18px">We’re here to assist you with any inquiries about our products, services, or custom solutions. Reach out to us through the contact form below or use the provided information to connect with our team directly.</TextResponsive>

       <ActionLayout 
      title="Open Hours"
      description="Mon - Fri" 
      descriptionSecond="9:00AM - 06:00PM " 
      descriptionThird="Sat" 
      descriptionForth="9:00AM - 01:00PM " 
      Icon={IoIosTime}
       />

      <Flex wrap="wrap" gap={20}>

 
      </Flex>
  

    </Wrapper>
  );
}

export { Ui };