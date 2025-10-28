import { VerticalLine } from "@features/app-layout/styles";
import { Flex, Image } from "@mantine/core";
import { TextResponsive, TitleWithFamily } from "@shared/ui/Typography";
import Wrapper from "@shared/ui/horWrapper";
import { SavedColors } from "@shared/constants";
import ActionLayout from "@shared/ui/ActionLayout";
import { memo } from "react";
import FindByName from "@shared/helpers/findByName";
import { MdBlock } from "react-icons/md";


const Ui = memo(() => {
    const pageInfo = FindByName('why choose us')

  return (
        <section id="dashboard-whyus-section">
    <Wrapper bgImage="/bgNet.webp" isReverseWrap={false}
      fullHeight={false}
      rightSection={
        <Image
          src="/why_us.png"
          alt="growth image"
          miw={300}
          style={{ objectFit: 'contain' }}
          height="100%"
        />
      }
      leftWidth="60%"
      rightWidth="40%"
    >
      <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">{pageInfo?.name}</TextResponsive>
      <TitleWithFamily $font="Nunito" fontSize="48px" fontWeight="800">{pageInfo?.title}</TitleWithFamily>
      <VerticalLine opacity={20} />

      <TextResponsive $font="Roboto" fontSize="18px">{pageInfo?.description}</TextResponsive>



      <Flex wrap="wrap" gap={20}>

      {pageInfo?.features?.map((feature) => {
        return (
            <ActionLayout
              title={feature.name}
              description={feature.description}
              Icon={feature.icon ?? MdBlock}
              ariaLabel={feature.name}
              key={feature.name}
            />
        )
      })  }
       
      </Flex>
  

    </Wrapper>
    </section>
  );

})

export { Ui };