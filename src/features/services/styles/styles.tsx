import { Button, ButtonProps } from "@mantine/core";
import { SavedColors } from "@shared/constants";
import styled from "styled-components";

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

export {
    ContactButton,
    Card,
    CardContainer
}