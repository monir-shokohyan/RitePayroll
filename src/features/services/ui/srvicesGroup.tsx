import { Flex, Button, ButtonProps } from '@mantine/core';
import { SavedColors } from '@shared/constants';
import ActionLayout from '@shared/ui/ActionLayout';
import styled from 'styled-components';
import { servicesMap } from '../constant/Contant';


const CardContainer = styled.div`
  position: relative;
  width: 345px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  width: 345px;
  height: 345px;
  background: ${SavedColors.lightBlue};
  border: 1px solid #ddd;
  padding: 40px 20px 20px 20px;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px #00000020;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const ContactButton = styled(Button) <ButtonProps>`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  
  opacity: 0;
  visibility: hidden;
  
  ${CardContainer}:hover & {
    opacity: 1;
    visibility: visible;
    width: 280px;
  }
`;

const ServicesGroup = () => {
  return (
    <Flex wrap="wrap" w="100%" justify="center" gap={20}>
      {
        servicesMap.map((service) => {
          return (
            <CardContainer key={service.title}>
              <Card>
                <ActionLayout
                  title={service.title}
                  description={service.description}
                  Icon={service.icon}
                  currentWidth='100%'
                  align='center'
                  textAlign='center'
                  rotate={45}
                  gap={10}
                  titleSize='16px'
                  textSize='10px'
                />
              </Card>
              <ContactButton
                variant="filled"
                color={SavedColors.Primaryblue}
                size="sm"
              >
                Contact Us for Custom Solutions
              </ContactButton>
            </CardContainer>
          )
        })
      }

    </Flex>
  );
};

export default ServicesGroup;