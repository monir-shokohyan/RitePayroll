import { VerticalLine } from "@features/app-layout/styles";
import { ActionIcon, Flex, Image } from "@mantine/core";
import IconWithText from "@shared/ui/IconWithText";
import { TextResponsive, TitleWithFamily } from "@shared/ui/Typography";
import Wrapper from "@shared/ui/horWrapper";
import { ImCheckmark } from "react-icons/im";
import { SavedColors } from "@shared/constants";
import ActionLayout from "@shared/ui/ActionLayout";
import { MdRemoveRedEye } from 'react-icons/md'
import { TbTargetArrow } from "react-icons/tb";
import { HoveredButtonWithBorder } from "@features/Dashboard/styles/styles";
import useNavigationScroll from "@shared/hooks/useNavigationScroll";


function Ui() {
    const { navigateAndScroll } = useNavigationScroll()

  return (
    <section id="dashboard-about-section">
    <Wrapper bgImage="/texture.png" isReverseWrap={false}
      fullHeight={false}
      rightSection={
        <Image
          src="/pc.png"
          alt="pc image"
          miw={300}
          style={{ objectFit: 'contain' }}
          height="100%"
        />
      }
      leftWidth="60%"
      rightWidth="40%"
    >
      <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">About Us</TextResponsive>
      <TitleWithFamily font="Nunito" fontSize="48px" fontWeight="800">Pioneers in Business Software Solutions</TitleWithFamily>
      <VerticalLine opacity={20} />
      <Flex wrap="wrap">

        <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
          <IconWithText hoverActive={false} icon={ImCheckmark} allowTextRes textRes="Innovation" textColor={SavedColors.TextColor}></IconWithText>
          <IconWithText hoverActive={false} icon={ImCheckmark} allowTextRes textRes="Customer Success" textColor={SavedColors.TextColor}></IconWithText>
          <IconWithText hoverActive={false} icon={ImCheckmark} allowTextRes textRes="Continuous Improvement" textColor={SavedColors.TextColor}></IconWithText>
        </Flex>

        <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
          <IconWithText hoverActive={false} icon={ImCheckmark} allowTextRes textRes="Integrity" textColor={SavedColors.TextColor}></IconWithText>
          <IconWithText hoverActive={false} icon={ImCheckmark} allowTextRes textRes="Collaboration" textColor={SavedColors.TextColor}></IconWithText>
        </Flex>
        
      </Flex>
        <TextResponsive font="Roboto" fontSize="18px">Lotus Soft Technologies Ltd. has been a trusted name in Uganda’s software industry for over 25 years. Founded by Mr. Nikhil Shah, Lotus has consistently delivered innovative business software solutions, helping organizations simplify processes, improve productivity, and ensure compliance with evolving market standards.</TextResponsive>  
      
        <TextResponsive font="Roboto" fontSize="18px">Co-Director Mrs. Shital Shah plays a pivotal role in the strategic direction and market expansion of Lotus Soft Technologies. Leveraging her deep knowledge in Accounting and Finance, she has been instrumental in bridging business needs with software innovation, leading successful product positioning and marketing strategies across Uganda and beyond. She stands as a symbol of women’s empowerment in technology and leadership, inspiring others to drive change through innovation.</TextResponsive>
   
   
   <Flex wrap="wrap" gap={20}>

     <ActionLayout 
      title="Vision"
      description="To be the most trusted provider of comprehensive business software and IT solutions across Africa and beyond." 
      Icon={MdRemoveRedEye}
       />
     <ActionLayout 
      title="Mission"
      description="To simplify, automate, and empower businesses with scalable technology solutions that drive growth and sustainability." 
      Icon={TbTargetArrow}
       />

   </Flex>
         <HoveredButtonWithBorder
            radius="sm" 
            size="md" 
            w={{ base: '100%',sm: 'auto',md: 'auto', lg: 'fit-content'}}
            color={SavedColors.Primaryblue}
            onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}

          >
            Explore Our Journey and Values
          </HoveredButtonWithBorder>
    </Wrapper>
    </section>
  );
}

export { Ui };