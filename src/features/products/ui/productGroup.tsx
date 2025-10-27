import { Button, Flex, Image } from '@mantine/core';
import IconWithText from '@shared/ui/IconWithText';
import {  TextWithFamily } from '@shared/ui/Typography';
import { ImCheckmark } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import { SavedColors } from '@shared/constants';
import { useState } from 'react';
import { Card } from '../styles/styles';
import { productsMap } from '../constant/Contant';
import { useNavigate } from 'react-router-dom';


 



const ProductGroup = () => {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  return (

    <Flex wrap="wrap" w="100%" justify="center" gap={20}>
      {productsMap.map((product) => {
        return (
           <Card onMouseEnter={()=>setId(product.title)} onMouseLeave={() => setId('')} bgColor={id===product.title ? product.color : '#fff'} onClick={() => navigate(product.to) }>
        <Image height={74} src={product.imgUrl} width="auto" fit="contain" alt={product.alt}/>
        <TextWithFamily color={id===product.title ? SavedColors.PrimaryWhite :SavedColors.TextColor} textAlign='center' fontWeight='600' font="Nunito" fontSize='14px'>{product.description}</TextWithFamily>

        <Flex direction="column" gap={10} >
          {
            product.features.map((feature) => {
              return (
                  <IconWithText
                  text={feature}
                  icon={ImCheckmark}
                  fontSize='14px'
                  hoverActive={false}
                  padding='0px'
                  textColor={id===product.title ? SavedColors.PrimaryWhite :SavedColors.TextColor}
                  iconColor={id===product.title ? SavedColors.PrimaryWhite :SavedColors.Primaryblue}
                  />
              )
            })
          }
          <Button variant="transparent" mt={40} rightSection={<FaArrowRight color={id===product.title ? SavedColors.PrimaryWhite :product.color} style={{transition: 'all 0.5s ease-in-out'}}/>}>
            <TextWithFamily color={id===product.title ? SavedColors.PrimaryWhite : product.color}>
              Read More
            </TextWithFamily>
          </Button>
        </Flex>
      </Card>
        )
      })
      }

    </Flex>

  );
};

export default ProductGroup;
