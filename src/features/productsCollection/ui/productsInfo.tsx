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
import { productsMap } from "../constant/Contant";
import { ProductsType } from "../types";
import { ProductsTableOfContent } from "./productsMenu";


function ProductsInfo({page}:{page:ProductsType}) {
  return (
    <Wrapper bgImage="/texture.png" isReverseWrap={false}
      fullHeight={false}
      rightSection={
        <ProductsTableOfContent />
      }
      leftWidth="60%"
      rightWidth="40%"
      RSJustify="center"
    >
      <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">About Product</TextResponsive>
      <TitleWithFamily font="Nunito" fontSize="48px" fontWeight="800">{productsMap?.[page]?.name}</TitleWithFamily>
      <VerticalLine opacity={20} />
      <Flex direction="column">


          {
            productsMap?.[page].features.map((feature) => {
                return (
                  <IconWithText fontWeight="600" fontSize="18px" hoverActive={false} iconSize={25} icon={ImCheckmark} allowTextRes textRes={feature} textColor={SavedColors.TextColor}></IconWithText>
                )
            })

        }
        
        
      </Flex>
        <TextResponsive font="Roboto" fontSize="18px">{productsMap?.[page]?.info || 'info about product'}</TextResponsive>     
   
   <Flex wrap="wrap" gap={20}>

     <ActionLayout 
      title={productsMap[page].deploymentOption.title}
      description={productsMap[page].deploymentOption.description} 
      Icon={MdRemoveRedEye}
       />
     <ActionLayout 
      title={productsMap[page].industriesServed.title}
      description={productsMap[page].industriesServed.description} 
      Icon={TbTargetArrow}
       />
   </Flex>
    </Wrapper>
  );
}

export { ProductsInfo };