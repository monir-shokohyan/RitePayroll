import { VerticalLine } from "@features/app-layout/styles";
import { Flex, Image } from "@mantine/core";
import IconWithText from "@shared/ui/IconWithText";
import { TextResponsive, TitleWithFamily } from "@shared/ui/Typography";
import Wrapper from "@shared/ui/horWrapper";
import { ImCheckmark } from "react-icons/im";
import { SavedColors } from "@shared/constants";
import ActionLayout from "@shared/ui/ActionLayout";
import { MdBlock } from 'react-icons/md'
import { HoveredButtonWithBorder } from "@features/Dashboard/styles/styles";
import useNavigationScroll from "@shared/hooks/useNavigationScroll";
import { memo } from "react";
import FindByName from "@shared/helpers/findByName";


const Ui = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()
    const pageInfo = FindByName('About Us')


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
        <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">{pageInfo?.name}</TextResponsive>
        <TitleWithFamily $font="Nunito" fontSize="48px" fontWeight="800">{pageInfo?.title}</TitleWithFamily>
        <VerticalLine opacity={20} />
        <Flex wrap="wrap">

          <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
            {pageInfo?.section?.map(section =>{
              return (
                <IconWithText key={section.name} $hoveractive={"false"} icon={ImCheckmark} allowTextRes textRes={section.name} textColor={SavedColors.TextColor}></IconWithText>
              )
            })}
          </Flex>
          <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
            {pageInfo?.sectionSecond?.map(section =>{
              return (
                <IconWithText key={section.name} $hoveractive={"false"} icon={ImCheckmark} allowTextRes textRes={section.name} textColor={SavedColors.TextColor}></IconWithText>
              )
            })}
          </Flex>

    
        </Flex>

        <TextResponsive $font="Roboto" fontSize="18px">{pageInfo?.description} </TextResponsive>
        <div></div>
        <TextResponsive $font="Roboto" fontSize="18px">{pageInfo?.descriptionSecond}</TextResponsive>

        <Flex wrap="wrap" gap={20}>
          {pageInfo?.features.map(feature =>{
            return (
              <ActionLayout
                key={feature.name}
                title={feature.name}
                description={feature.description}
                Icon={feature.icon ?? MdBlock}
                ariaLabel={feature.ariaLabel}
              />
            )
          })}

        </Flex>
        <HoveredButtonWithBorder
          radius="sm"
          size="md"
          w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'fit-content' }}
          color={SavedColors.Primaryblue}
          onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}

        >
          Explore Our Journey and Values
        </HoveredButtonWithBorder>
      </Wrapper>
    </section>
  );
})

export { Ui };