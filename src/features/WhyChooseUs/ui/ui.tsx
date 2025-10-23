import { VerticalLine } from "@features/app-layout/styles";
import { Flex, Image } from "@mantine/core";
import { TextResponsive, TitleWithFamily } from "@shared/ui/Typography";
import Wrapper from "@shared/ui/horWrapper";
import { SavedColors } from "@shared/constants";
import ActionLayout from "@shared/ui/ActionLayout";
import { WhyMap } from "../constant/Contant";


function Ui() {
  return (
    <Wrapper bgImage="/bgNet.png" isReverseWrap={false}
      fullHeight={false}
      rightSection={
        <Image
          src="/why_us.png"
          alt="pc image"
          miw={300}
          style={{ objectFit: 'contain' }}
          height="100%"
        />
      }
      leftWidth="60%"
      rightWidth="40%"
    >
      <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">Why Choose Us</TextResponsive>
      <TitleWithFamily font="Nunito" fontSize="48px" fontWeight="800">We Are Pioneers In Business
        Software Solutions</TitleWithFamily>
      <VerticalLine opacity={20} />

      <TextResponsive font="Roboto" fontSize="18px">Lotus Soft Technologies Ltd. has been at the forefront of software innovation in Uganda for over 25 years. Founded with the mission to simplify business operations, our company, led by Mr. Nikhil Shah, has developed a comprehensive range of software solutions. Our expertise spans Accounting, Inventory, POS, and Customer Loyalty Management, with a strong focus on integrating with local systems like URA EFRIS and providing customized solutions for diverse business needs.</TextResponsive>



      <Flex wrap="wrap" gap={20}>

      {WhyMap?.map((section) => {
        return (
            <ActionLayout
              title={section.title}
              description={section.description}
              Icon={section.icon}
            />
        )
      })  }
       
      </Flex>
  

    </Wrapper>
  );
}

export { Ui };