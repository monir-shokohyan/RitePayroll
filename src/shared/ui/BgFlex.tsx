import { Flex, FlexProps } from "@mantine/core";
import styled from "styled-components";

interface BgFlexProps extends FlexProps {
  bg?: string;
  opacity?: number;
}

export const BgFlex = styled(Flex)<BgFlexProps>`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ bg }) => (bg ? `url(${bg})` : "none")};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${({ opacity = 0.5 }) => opacity};
    z-index: -1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;